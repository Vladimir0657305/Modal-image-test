// let it = document.querySelector('.image_modal');
//Get the modal
let modal = document.querySelector('.divModal');

//Get the image
let img = document.querySelector('.image');
let modalImg = document.querySelector('.image_modal');
let captionText = document.getElementById("botomtext");

captionText.style.display = 'none';
img.onclick = function () {
    modal.classList.remove('modalClose');
    modal.style.display = "block";
    modalImg.src = this.src;
    // modalImg.alt = this.alt;
    captionText.style.display = "block";
    img.style.display = 'none';
}

let span = document.getElementsByClassName("close__button")[0];

span.onclick = function () {
    modal.classList.add('modalClose');
    img.style.display = 'block';
}

window.onclick = function (event) {
    console.log('=====', event);
    if (event.target == modal) {
        console.log('=1=1=1=', event.target);
        modal.classList.add('modalClose');
        img.style.display = 'block';
    }
}