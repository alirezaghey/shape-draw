export class Shape {
  constructor(x, y, color = '#000') {
    this.origin = { x: x, y: y };
    this.color = color;
    this.selected = false;
    this.id = Math.floor(Math.random() * 10000);
  }

  drawOrigin = ctx => {
    ctx.strokeStyle = '#444';
    ctx.beginPath();
    ctx.strokeRect(this.origin.x - 2, this.origin.y + 2, 4, 4);
  };
}
