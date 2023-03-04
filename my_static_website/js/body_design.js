var bgColors = ["#ccdbfd", "#f4f1de"];
let randomNum = Math.floor(Math.random() * 1);

function myFunction() {
    document.body.style.backgroundColor = bgColors[randomNum];
}

setTimeout(myFunction, 3000);

