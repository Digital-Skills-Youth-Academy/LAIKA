let submitButton1 = document.getElementById('submitButton1').addEventListener("click", comment1);
let inputField1 = document.getElementById('inputField1');

let submitButton2 = document.getElementById('submitButton2').addEventListener("click", comment2);
let inputField2 = document.getElementById('inputField2');

let submitButton3 = document.getElementById('submitButton3').addEventListener("click", comment3);
let inputField3 = document.getElementById('inputField3');

let addImage = document.getElementById('addImage');

function comment1() {
    event.preventDefault();
    document.getElementById('imageDescription1').innerHTML = inputField1.value;
    inputField1.value = "";
}

function comment2() {
    event.preventDefault();
    document.getElementById('imageDescription2').innerHTML = inputField2.value;
    inputField2.value = "";
}

function comment3() {
    event.preventDefault();
    document.getElementById('imageDescription3').innerHTML = inputField3.value;
    inputField3.value = "";
}

let description1 = document.getElementById('imageDescription1').addEventListener("click", editDescription)

function editDescription() {

}