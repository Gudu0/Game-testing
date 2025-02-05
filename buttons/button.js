document.getElementById("testButton").addEventListener("click", function() {
  increase();
});

let res1 = 0
let progval = document.getElementById("progval");

progval.innerHTML = res1;

function increase() {
  res1++
  progval.innerHTML = res1;
}
