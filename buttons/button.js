document.getElementById("button1").addEventListener("click", function() {
  t1();
});
document.getElementById("button2").addEventListener("click", function() {
  t2();
});
document.getElementById("button3").addEventListener("click", function() {
  t3();
});
document.addEventListener("keydown", function(event){
  if (event.shiftKey == true){
    shift = "true";
  }
});
document.addEventListener("keyup", function(event){
  if (event.shiftKey == true){
    shift = "false";
  }
});


let res1 = 0;
let res2 = 0;
let res3 = 0;

let val1 = document.getElementById("val1");
let val2 = document.getElementById("val2");
let val3 = document.getElementById("val3");

val1.innerHTML = res1;
val2.innerHTML = res2;
val3.innerHTML = res3;

let shift = "false";

function t1() {
  res1++;
  val1.innerHTML = res1;
}
function t2() {
  if(res1 >= 10 || shift == "true"){
    res1 -= 10;
    val1.innerHTML = res1;
    res2++;
    val2.innerHTML = res2;
  }
}
function t3(){
  if (res2>=10 || shift == "true"){
    res2 -= 10;
    val2.innerHTML = res2;
    res3++;
    val3.innerHTML = res3;
  }
}
// function keyenable(){
//   if (event.shiftKey == true){
//     shift = "true";
//   }
// }
// function keydisable(){
//   if (event.shiftKey == true){
//     shift = "false";
//   }
// }
