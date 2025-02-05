document.getElementById("testButton").addEventListener("click", function() {
  increase();
});
let progressbar = document.getElementById("testProgress");
let progval = document.getElementById("progval");

function increase() {
  progressbar.value = progressbar.value += 1;
  progval.innerHTML = progressbar.value;
  if (progressbar.value == progressbar.max + 1) {
    progressbar.value = progressbar.max - progressbar.max;
  }
}
