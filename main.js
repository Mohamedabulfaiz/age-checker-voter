
var age = document.getElementById("age");
var error = document.getElementById("error");
var display= document.getElementById("display");

function check(){
    if (age.value === "" ){
        error.innerHTML = "enter valid number";
    } else{
        error.innerHTML = "";
        if (age.value >= 18){
            display.innerHTML = "your allowed";
        }else{
            display.innerHTML=" your not allowed";
        }
    
    }
    clear()
    
    
}

function clear(){
    age.value = ""
}