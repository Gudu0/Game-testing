document.getElementById("testButton").addEventListener("click", function() {
  increase();
});
document.getElementById("button2").addEventListener("click", function() {
  tier2();
});

let res1 = 0
let res2 = 0
let val1 = document.getElementById("val1");
let val2 = document.getElementById("val2");

val1.innerHTML = res1;
val2.innerHTML = res2;

function increase() {
  res1++;
  val1.innerHTML = res1;
}
function tier2() {
  if(res1 >= 10){
    res1 - 10;
    res2++;
    val2.innerHTML = res2;
    val1.innerHTML = res1;
  }
}
