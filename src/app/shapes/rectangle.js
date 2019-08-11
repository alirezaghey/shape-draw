import { Shape } from './shape';
export class Rectangle extends Shape {
  constructor(x, y, width, heigth, color = '#000') {
    super(x, y, color);
    this.type = 'rectangle';
    this.corners = {
      tl: { x: x - width / 2, y: y - heigth / 2 },
      tr: { x: x + width / 2, y: y - heigth / 2 },
      br: { x: x + width / 2, y: y + heigth / 2 },
      bl: { x: x - width / 2, y: y + heigth / 2 }
    };
    this.width = width;
    this.heigth = heigth;
  }

  isInBounds = (x, y) =>
    x >= this.corners.tl.x &&
    x <= this.corners.br.x &&
    y >= this.corners.tl.y &&
    y <= this.corners.bl.y;

  Area = () =>
    Math.abs(this.corners.tl.x - this.corners.br.x) *
    Math.abs(this.corners.tl.y - this.corners.br.y);

  draw = ctx => {
    const lineWidth = ctx.lineWidth;
    ctx.lineWidth = this.selected ? lineWidth + 2 : lineWidth;
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.strokeRect(
      this.corners.tl.x,
      this.corners.tl.y,
      this.width,
      this.heigth
    );
    ctx.lineWidth = lineWidth;
    if (this.selected) this.drawOrigin(ctx);
  };
}
