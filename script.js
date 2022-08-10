//Get the modal
let modal = document.getElementById('divModal');

//Get the image
let img = document.getElementById('photo');
let modalImg = document.getElementById('img01');
let captionText = document.getElementById("botomtext");

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.style.display = "block";
}

let span = document.getElementsByClassName("close__button")[0];

//click on (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}