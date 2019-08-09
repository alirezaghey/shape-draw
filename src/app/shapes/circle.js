export class Circle {
  constructor(x, y, radius, color = '#000') {
    this.type = 'circle';
    this.id = Math.floor(Math.random() * 10000);
    this.origin = { x: x, y: y };
    this.radius = radius;
    this.color = color;
  }

  draw = ctx => {
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.origin.x, this.origin.y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
  };
}
