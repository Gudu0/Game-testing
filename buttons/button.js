//loads/creates save data
localStorage.setItem("visited", "true");
//fetching past save data
if (localStorage.getItem("visited") == "true"){
  let res1 = localStorage.getItem("res1");
  let res1 = localStorage.getItem("res1");
  let res3 = localStorage.getItem("res3");
} else {
  //creating save data
  let res1 = 0;
  let res2 = 0;
  let res3 = 0;
  localStorage.setItem("res1", res1);
  localStorage.setItem("res2", res2);
  localStorage.setItem("res3", res3);
}
//calls the save function every 5 seconds
setInterval(save, 5000);

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
  if (event.shiftKey == false){
    shift = "false";
  }
});



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
    if (shift == "true"){
      val1.innerHTML = res1;
      res2++;
      val2.innerHTML = res2;
    } else {
      res1 -= 10;
      val1.innerHTML = res1;
      res2++;
      val2.innerHTML = res2;
    }
  }
}

function t3(){
  if (res2>=10 || shift == "true"){
    if (shift == "true"){
      val2.innerHTML = res2;
      res3++;
      val3.innerHTML = res3;
    } else {
      res2 -= 10;
      val2.innerHTML = res2;
      res3++;
      val3.innerHTML = res3;
    }
  }
}
//saving function, saves the resource values into local storage
function save(){
  localStorage.setItem("res1", res1);
  localStorage.setItem("res2", res2);
  localStorage.setItem("res3", res3);
}
