let video = document.getElementById("video");

function openCamera() {

    navigator.mediaDevices.getUserMedia({
        video: true
    })
    .then(function(stream) {

    video.srcObject = stream;

    document.getElementById("status").innerHTML =
    "وضعیت: دوربین فعال شد ✅";

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
function savePhoto() {

    let photo = document.getElementById("photo");

    let link = document.createElement("a");

    link.download = "my-photo.png";
    link.href = photo.src;

    link.click();

}
