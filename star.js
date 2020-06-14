function drawStar(centerX, centerY, points, outerRadius, innerRadius, line) {
  // define the star
  context.beginPath();
  context.moveTo(centerX, centerY + outerRadius);
  for (var i = 0; i < 2 * points + 1; i++) {
    var r = i % 2 == 0 ? outerRadius : innerRadius;
    var a = (Math.PI * i) / points;
    context.lineTo(centerX + r * Math.sin(a), centerY + r * Math.cos(a));
  }
  context.closePath();
  context.lineWidth = line;
  context.stroke();
}

drawStar(75, 75, 5, 50, 25, 3);
