function drawLeaves(x, y) {
  context.beginPath();
  context.moveTo(328, 412);
  context.bezierCurveTo(208 + x, 316 + y, 219 + x, 279 + y, 204 + x, 270 + y);
  context.bezierCurveTo(191 + x, 262 + y, 212 + x, 247 + y, 209 + x, 232 + y);
  context.bezierCurveTo(205 + x, 212 + y, 250 + x, 230 + y, 244 + x, 212 + y);
  context.bezierCurveTo(234 + x, 183 + y, 275 + x, 215 + y, 281 + x, 204 + y);
  context.bezierCurveTo(288 + x, 191 + y, 327 + x, 205 + y, 314 + x, 211 + y);
  context.bezierCurveTo(298 + x, 218 + y, 342 + x, 217 + y, 335 + x, 231 + y);
  context.bezierCurveTo(328 + x, 244 + y, 368 + x, 267 + y, 351 + x, 266 + y);
  context.bezierCurveTo(336 + x, 265 + y, 346 + x, 306 + y, 335 + x, 291 + y);
  context.bezierCurveTo(326 + x, 279 + y, 328 + x, 323 + y, 319 + x, 311 + y);
  context.stroke();
}

function drawTrunk(x, y) {
  context.beginPath();
  context.moveTo(406, 387);
  context.bezierCurveTo(308 + x, 301 + y, 312 + x, 291 + y, 304 + x, 322 + y);
  context.bezierCurveTo(300 + x, 337 + y, 299 + x, 355 + y, 298 + x, 340 + y);
  context.bezierCurveTo(297 + x, 325 + y, 298 + x, 353 + y, 297 + x, 363 + y);
  context.bezierCurveTo(296 + x, 378 + y, 308 + x, 397 + y, 300 + x, 385 + y);
  context.bezierCurveTo(292 + x, 373 + y, 302 + x, 391 + y, 313 + x, 404 + y);
  context.bezierCurveTo(327 + x, 420 + y, 338 + x, 421 + y, 332 + x, 424 + y);
  context.bezierCurveTo(319 + x, 431 + y, 333 + x, 427 + y, 310 + x, 426 + y);
  context.bezierCurveTo(295 + x, 425 + y, 306 + x, 428 + y, 291 + x, 429 + y);
  context.bezierCurveTo(276 + x, 430 + y, 270 + x, 416 + y, 255 + x, 418 + y);
  context.bezierCurveTo(240 + x, 420 + y, 240 + x, 424 + y, 225 + x, 424 + y);
  context.bezierCurveTo(206 + x, 424 + y, 239 + x, 401 + y, 226 + x, 411 + y);
  context.bezierCurveTo(214 + x, 420 + y, 248 + x, 392 + y, 254 + x, 387 + y);
  context.bezierCurveTo(266 + x, 377 + y, 260 + x, 378 + y, 264 + x, 363 + y);
  context.bezierCurveTo(266 + x, 354 + y, 267 + x, 321 + y, 266 + x, 336 + y);
  context.bezierCurveTo(265 + x, 351 + y, 266 + x, 327 + y, 265 + x, 312 + y);
  context.bezierCurveTo(264 + x, 292 + y, 265 + x, 288 + y, 259 + x, 282 + y);
  context.stroke();
}

drawLeaves(100, 100);
drawTrunk(90, 100);
