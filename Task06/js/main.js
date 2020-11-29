window.addEventListener("load", handleLoad);

function handleLoad(_event) {
    var modal = document.getElementById("imgModal");

    var imgs = document.getElementsByClassName("modalImg");
    console.log(imgs);

    modal.onclick = function () {
        modal.style.display = "none";
    }
}