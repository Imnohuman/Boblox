var myImage = document.querySelector("img");

myImage.onclick = function() {
    var myScr = myImage.getAttribute("scr");
    if(myScr === '') {
        myImage.setAttribute ('src','');
        
    } else {
        myImage.setAttribute ('src','');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Введите свое имя');
    myHeading.textContent = 'Добро пожпловать' + myName;
}
if(!localStorage.getItem('name')) {
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Привет' + storedName;
}
myButton.onclick = function() {
    setUserName();
}