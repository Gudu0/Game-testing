const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(0, 0, 50, 300);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();
