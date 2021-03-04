let submitButton1 = document.getElementById('submitButton1');
submitButton1.addEventListener("click", description1);
let inputField1 = document.getElementById('inputField1');
let edit1 = document.getElementById('editButton1');
edit1.addEventListener("click", editDescription1);


let submitButton2 = document.getElementById('submitButton2');
submitButton2.addEventListener("click", description2);
let inputField2 = document.getElementById('inputField2');
let edit2 = document.getElementById('editButton2');
edit2.addEventListener("click", editDescription2);


let submitButton3 = document.getElementById('submitButton3');
submitButton3.addEventListener("click", description3);
let inputField3 = document.getElementById('inputField3');
let edit3 = document.getElementById('editButton3');
edit3.addEventListener("click", editDescription3);


let addImage = document.getElementById('addImage');


function description1() {
        event.preventDefault();
        document.getElementById('imageDescription1').innerHTML = inputField1.value;
        inputField1.value = "";
        edit1.style.display = "block";
        submitButton1.style.display = "none";
        inputField1.style.display = "none";
    
}

function description2() {
        event.preventDefault();
        edit2.style.display = "block";
        document.getElementById('imageDescription2').innerHTML = inputField2.value;
        inputField2.value = "";
        edit2.style.display = "block";
        submitButton2.style.display = "none";
        inputField2.style.display = "none";
}

function description3() {
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

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Green", "Blue", "Gray", "Purple", "Yellow", "Red", "Black", "Forest", "Lavender"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
        "#9b59b6",
        "#f1c40f",
        "#e74c3c",
        "#34495e",
        "#3a6e50",
        "#938abf"
      ],
      data: [12, 19, 3, 17, 28, 24, 7, 3, 12]
    }]
  }
});