import { Shape } from './shape';
export class Circle extends Shape {
  constructor(x, y, radius, color = '#000') {
    super(x, y, color);
    this.type = 'circle';
    this.radius = radius;
  }

  inInBounds = (x, y) =>
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
