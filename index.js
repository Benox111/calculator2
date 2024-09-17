const display = document.getElementById("display");


function appendToDisplay(input){
    display.value += input
}

function Clearondiplay(){
    display.value = "";
}

function calculate(){
     try{

        display.value = eval(display.value);
     }   
    catch(error){
        display.value = "Error"
    }
}

function squareroots(){
    display.value = eval(display.value);
    display.value *= display.value

}