let displayString = "";

function sendVal(id){
    const display = document.getElementById("display");
    displayString += document.getElementById(id).innerText;
    display.innerText = displayString;
}

function operation(id){
    const display = document.getElementById("display");
    const op = document.getElementById(id).innerText;
    displayString += op;
    display.innerText = displayString;
}

function allClear(){
    const display = document.getElementById("display");
    display.innerText = 0;
    displayString = "";
}

function del(){
    const display = document.getElementById("display");
    displayString = displayString.slice(0,-1);
    display.innerText = displayString;
}

function compute(){
    try{
        display.innerText = eval(displayString)
        displayString = "";
    }catch{
        alert("Syntax Error")
    }
} 

