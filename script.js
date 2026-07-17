let video = document.getElementById("video");

function openCamera() {

    navigator.mediaDevices.getUserMedia({
        video: true
    })
    .then(function(stream) {
        video.srcObject = stream;
    })
    .catch(function(error) {
        alert("دوربین فعال نشد");
        console.log(error);
    });

}


function takePhoto() {

    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.drawImage(video, 0, 0);
let photo = document.getElementById("photo");
photo.src = canvas.toDataURL("image/png");
    alert("عکس گرفته شد");

}
