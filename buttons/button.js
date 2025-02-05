document.getElementById("testButton").addEventListener("click", function() {
  increase();
});
let progressbar = document.getElementById("testProgress");
let progval = document.getElementById("progval");

function increase() {
  progressbar.value = progressbar.value += 1;
  progval.innerHTML = progressbar.value;
  if (progressbar.value == progressbar.max) {
    //new code from google search to add a slight delay to setting the value to 0, might change it later, I don't like it.
    setTimeout(() => { progressbar.value = progressbar.max - progressbar.max; }, 100);
    //progressbar.value = progressbar.max - progressbar.max;
  }
}
