let outputScreen = document.getElementById("output");

function display(num){
    outputScreen.value += num;
}
function Calculate(){
    try {
        outputScreen.value = eval(outputScreen.value);
    }
    catch (error){
        alert("invalid");
    }
}

function clear(){
    outputScreen.value = "";
}
// $('#clear').click(function () {
//     $('#output').val('');
// });

function del(){
    outputScreen.value = outputScreen.value.slice(0,0);
}