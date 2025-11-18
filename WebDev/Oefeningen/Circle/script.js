function drawCircle(val) {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.arc(150, 75, val, 0, Math.PI);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.stroke();
}
