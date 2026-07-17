let video = document.getElementById("video");
let canvas = document.getElementById("canvas");
let photo = document.getElementById("photo");
let status = document.getElementById("status");

let stream = null;


// فعال کردن دوربین
function openCamera() {

    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
    })

    .then(function(cameraStream) {

        stream = cameraStream;

        video.srcObject = stream;

        status.innerHTML = "وضعیت: دوربین فعال شد ✅";

    })

    .catch(function(error) {

        status.innerHTML = "وضعیت: اجازه دوربین داده نشد ❌";

        console.log(error);

    });

}



// گرفتن عکس
function takePhoto() {

    if (!stream) {

        alert("اول دوربین را فعال کنید");

        return;

    }


    canvas.width = video.videoWidth;

    canvas.height = video.videoHeight;


    let context = canvas.getContext("2d");


    context.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
    );


    photo.src = canvas.toDataURL("image/png");


    status.innerHTML = "وضعیت: عکس گرفته شد ✅";

}



// ذخیره عکس
function savePhoto() {

    if (!photo.src) {

        alert("اول عکس بگیرید");

        return;

    }


    let link = document.createElement("a");

    link.download = "photo.png";

    link.href = photo.src;

    link.click();


    status.innerHTML = "وضعیت: عکس ذخیره شد ✅";

}
function stopCamera() {

    if (stream) {

        stream.getTracks().forEach(track => {
            track.stop();
        });

        video.srcObject = null;

        status.innerHTML =
        "وضعیت: دوربین خاموش شد 🔴";

    }

}
