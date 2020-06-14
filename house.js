function drawHouse() {
  context.moveTo(400, 200);

  context.strokeRect(400, 150, 105, 98);
  context.strokeRect(420, 202, 23, 44);

  context.beginPath();
  context.moveTo(370, 150);
  context.lineTo(535, 150);
  context.stroke();
  context.closePath();

  context.beginPath();
  context.moveTo(535, 150);
  context.lineTo(450, 110);
  context.stroke();
  context.closePath();

  context.beginPath();
  context.moveTo(370, 150);
  context.lineTo(450, 110);
  context.stroke();
  context.closePath();
}

drawHouse();
