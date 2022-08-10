//Get the modal
let modal = document.querySelector('.divModal');

//Get the image
let img = document.querySelector('.image');
let modalImg = document.querySelector('.image_modal');
let captionText = document.getElementById("botomtext");

modal.classList.remove('divModal');
img.onclick = function () {
    modal.classList.add('divModal');
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.style.display = "block";
}

let span = document.getElementsByClassName("close__button")[0];

//click on (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    // modal.classList.add('closeClass');
    // modal.classList.remove('divModal');
    // document.querySelector('.divModal').style.display = 'none';
}