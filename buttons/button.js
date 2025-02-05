document.getElementById("testButton").addEventListener("click", function() {
  increase();
});
let progressbar = document.getElementById("testProgress");

function increase() {
  progressbar.value = progressbar.value += 1;
}
