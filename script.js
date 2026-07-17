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
