var inputText = document.getElementById("displayBox");
var btnGreet1 = document.getElementById("greet-1");
var btnGreet2 = document.getElementById("greet-2");
var btnGreet3 = document.getElementById("greet-3");
var btnGreet4 = document.getElementById("greet-4");
var btnClear = document.getElementById("clear-button");
var printArea = document.getElementById("print-area");


btnGreet1.addEventListener("click",function(){
  printArea.innerText = btnGreet1.value + " " + inputText.value;
});

btnGreet2.addEventListener("click",function(){
  printArea.innerText = btnGreet2.value + " " + inputText.value;
});

btnGreet3.addEventListener("click",function(){
  printArea.innerText = btnGreet3.value + " " + inputText.value;
});

btnGreet4.addEventListener("click",function(){
  printArea.innerText = btnGreet4.value + " " + inputText.value;
});
btnClear.addEventListener("click",function(){
  printArea.innerText = " ";
});
 
