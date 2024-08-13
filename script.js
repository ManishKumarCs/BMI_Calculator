
const display = document.getElementById("input");
// console.log("hii",input)
function appendToDisplay(num){
    
    display.value += num;
}
function clearDisplay(){
    display.value = '';
}
function deleteLast(){
        display.value = display.value.slice(0,-1);
}
function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = 'Error'
    }
}
