let display = document.getElementById('display');html
function append(value){
    display.value += value;
}
function cleardisplay(){
    display.value = '';
}
function deletelast(){
    display.value = display.value.slice(0, -1);
}
function calculate(){
    try{
        display.value = eval(display.value);
    }catch{
        display.value = 'Error';
    }
}