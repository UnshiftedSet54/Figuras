function drawTip() {
  context.beginPath();
  context.moveTo(52, 163);
  context.lineTo(187, 163);
  context.stroke();
}

function drwaUpperBody(x, y) {
  context.beginPath();
  context.moveTo(52, 165);
  context.bezierCurveTo(182 + x, 50 + y, 163 + x, 150 + y, 168 + x, 162 + y);
  context.bezierCurveTo(175 + x, 180 + y, 185 + x, 193 + y, 200 + x, 196 + y);
  context.bezierCurveTo(213 + x, 199 + y, 277 + x, 199 + y, 292 + x, 197 + y);
  context.bezierCurveTo(308 + x, 195 + y, 322 + x, 178 + y, 325 + x, 163 + y);
  context.bezierCurveTo(324 + x, 148 + y, 318 + x, 77 + y, 316 + x, 62 + y);
  context.stroke();
}

function drawBottomBody(x, y) {
  context.beginPath();
  context.moveTo(162, 297);
  context.bezierCurveTo(277 + x, 197 + y, 250 + x, 277 + y, 250 + x, 295 + y);
  context.bezierCurveTo(250 + x, 313 + y, 316 + x, 327 + y, 298 + x, 327 + y);
  context.bezierCurveTo(283 + x, 327 + y, 191 + x, 331 + y, 175 + x, 327 + y);
  context.bezierCurveTo(166 + x, 325 + y, 224 + x, 311 + y, 227 + x, 295 + y);
  context.bezierCurveTo(230 + x, 279 + y, 212 + x, 193 + y, 200 + x, 196 + y);
  context.stroke();
}

drawTip();
drwaUpperBody(-130, 100);
drawBottomBody(-130, 100);
