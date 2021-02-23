let submitButton1 = document.getElementById('submitButton1');
submitButton1.addEventListener("click", comment1);
let inputField1 = document.getElementById('inputField1');
let edit1 = document.getElementById('editButton1');
edit1.addEventListener("click", editDescription1);


let submitButton2 = document.getElementById('submitButton2');
submitButton2.addEventListener("click", comment2);
let inputField2 = document.getElementById('inputField2');
let edit2 = document.getElementById('editButton2');
edit2.addEventListener("click", editDescription2);


let submitButton3 = document.getElementById('submitButton3');
submitButton3.addEventListener("click", comment3);
let inputField3 = document.getElementById('inputField3');
let edit3 = document.getElementById('editButton3');
edit3.addEventListener("click", editDescription3);


let addImage = document.getElementById('addImage');


function comment1() {
        event.preventDefault();
        document.getElementById('imageDescription1').innerHTML = inputField1.value;
        inputField1.value = "";
        edit1.style.display = "block";
        submitButton1.style.display = "none";
        inputField1.style.display = "none";
    
}

function comment2() {
        event.preventDefault();
        edit2.style.display = "block";
        document.getElementById('imageDescription2').innerHTML = inputField2.value;
        inputField2.value = "";
        edit2.style.display = "block";
        submitButton2.style.display = "none";
        inputField2.style.display = "none";
}

function comment3() {
        event.preventDefault();
        edit3.style.display = "block";
        document.getElementById('imageDescription3').innerHTML = inputField3.value;
        inputField3.value = "";
        edit3.style.display = "block";
        submitButton3.style.display = "none";
        inputField3.style.display = "none";
}


function editDescription1() {
    edit1.style.display = "none";
    submitButton1.style.display = "block";
    inputField1.style.display = "block";
    inputField1.value = document.getElementById('imageDescription1').innerText;
}

function editDescription2() {
    edit2.style.display = "none";
    submitButton2.style.display = "block";
    inputField2.style.display = "block";
    inputField2.value = document.getElementById('imageDescription2').innerText;
}

function editDescription3() {
    edit3.style.display = "none";
    submitButton3.style.display = "block";
    inputField3.style.display = "block";
    inputField3.value = document.getElementById('imageDescription3').innerText;
}


var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});

data = {
    datasets: [{
        data: [10, 20, 30]
    }],

    labels: [
        'Red',
        'Yellow',
        'Blue'
    ]
};