let submitButton1 = document.getElementById('submitButton1').addEventListener("click", comment1);
let imageComment1 = document.getElementById('imageComment1');
let inputField1 = document.getElementById('inputField1');

let submitButton2 = document.getElementById('submitButton2').addEventListener("click", comment2);
let imageComment2 = document.getElementById('imageComment2');
let inputField2 = document.getElementById('inputField2');

let submitButton3 = document.getElementById('submitButton3').addEventListener("click", comment3);
let imageComment3 = document.getElementById('imageComment3');
let inputField3 = document.getElementById('inputField3');

let addImage = document.getElementById('addImage');

function comment1() {
    event.preventDefault();
    imageComment1.innerHTML = inputField1.value;
    inputField1.value = "";
}

function comment2() {
    event.preventDefault();
    imageComment2.innerHTML = inputField2.value;
    inputField2.value = "";
}

function comment3() {
    event.preventDefault();
    imageComment3.innerHTML = inputField3.value;
    inputField3.value = "";
}