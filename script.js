function openCamera() {

    navigator.mediaDevices.getUserMedia({
        video: true
    })

    .then(function(stream) {

        const video = document.getElementById("video");
        video.srcObject = stream;

    })

    .catch(function(error) {

        alert("دسترسی به دوربین داده نشد");

        console.log(error);

    });

}
function takePhoto() {

    const video = document.getElementById("video");
    const canvas = document.getElementById("canvas");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext("2d");

    context.drawImage(video, 0, 0);

}
