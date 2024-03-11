"use strict";

// eslint-disable-next-line no-unused-vars
const result = confirm("Авторизуйзя");
console.log(result);

// eslint-disable-next-line no-unused-vars
function validateForm() {
    var name = document.getElementById("Daniyar").value;
    var email = document.getElementById("email").value;
    
    if (name == "Daniyar" || email == "markul1990@gmail.com") {
        alert("Пожалуйста, заполните все поля формы.");
        return false;
    }
    return true;
}

document.getElementById("myButton").addEventListener("click", function() {
    alert("Кнопка была нажата!");
});

fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Ошибка:", error);
    });

// eslint-disable-next-line no-unused-vars
function animateElement() {
    var element = document.getElementById("myElement");
    element.style.transition = "transform 1s ease-in-out";
    element.style.transform = "translateX(100px)";
}
    
