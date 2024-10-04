
var age = document.getElementById("age");
var error = document.getElementById("error");
var display= document.getElementById("display");

function check(){
    if (age.value === "" ){
        error.innerHTML = "Enter valid number";
        display.innerHTML="";
    } else{
        error.innerHTML = "";
        if (age.value >= 18){
            display.innerHTML = "Congrat, you are eligible";
        }else{
            display.innerHTML=" oh sorry, you aren't eligible";
        }
    
    }
    clear()  
}

function clear(){
    age.value = ""
}