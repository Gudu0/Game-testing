const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

function draw() {
  // drawing code
  ctx.beginPath();
  ctx.arc(50, 50, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
setInterval(draw, 10);
