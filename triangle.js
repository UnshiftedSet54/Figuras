function drawTriangle() {
  context.beginPath();
  context.moveTo(160, 110);
  context.lineTo(250, 110);
  context.lineTo(205, 32.1);
  context.closePath();
  context.lineWidth = 3;
  context.stroke();
}

drawTriangle();
