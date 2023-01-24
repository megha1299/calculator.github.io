function buttonClick(val){
    document.getElementById("display").value=  document.getElementById("display").value+val; 
}
// Clear screen
function clearScreen(){
    document.getElementById("display").value= ""
}
function equalClick(){
    // empty value
    if(display.value === ''){
        display.value ="";
    }else {
        // dipaly operataion
        let result = eval(display.value);
        // eval value will be stored in display.value
        display.value = result;
        document.getElementById('display').value = result;
    }
}
// backspace function
function backSpace(){
    let display = document.getElementById("display").value;
    document.getElementById("display").value = display.substring(0, display.length -1);
}
let haveDot = false;
function dotButton(){
    dotButton.addEventlistener('click', (e)=>{
        if(e.target.innerText === '.' && !haveDot){
            haveDot = true;
        }else if(e.target.innerText === '.' && haveDot){
            return;
        }
        document.getElementById("display").value=  document.getElementById("display").value+val; 
        btnNumber += e.target.innerText;
        display.innerText = btnNumber;
    } )
}