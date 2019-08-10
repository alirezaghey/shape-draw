export class Circle {
  constructor(x, y, radius, color = '#000') {
    this.type = 'circle';
    this.id = Math.floor(Math.random() * 10000);
    this.origin = { x: x, y: y };
    this.radius = radius;
    this.color = color;
    this.selected = false;
  }

  isInItsArea = (x, y) =>
    (x - this.origin.x) ** 2 + (y - this.origin.y) ** 2 <= this.radius ** 2;

  Area = () => Math.PI * this.radius ** 2;

  draw = ctx => {
    const lineWidth = ctx.lineWidth;
    ctx.lineWidth = this.selected ? lineWidth + 2 : lineWidth;
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.origin.x, this.origin.y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.lineWidth = lineWidth;
  };
}
