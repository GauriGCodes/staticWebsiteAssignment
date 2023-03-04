var bgColors = ["#f8f9fa", "#e9ecef", "#dee2e6"];
let randomNum = Math.floor(Math.random() * 2);

function myFunction() {
    document.body.style.backgroundColor = bgColors[randomNum];
}

setTimeout(myFunction, 3000);

