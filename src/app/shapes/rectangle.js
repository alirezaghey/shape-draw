export class Rectangle {
  constructor(x, y, width, heigth, color = '#000') {
    this.origin = { x: x, y: y };
    this.corners = {
      tl: { x: x - width / 2, y: y - heigth / 2 },
      tr: { x: x + width / 2, y: y - heigth / 2 },
      br: { x: x + width / 2, y: y + heigth / 2 },
      bl: { x: x - width / 2, y: y + heigth / 2 }
    };
    this.width = width;
    this.heigth = heigth;
    this.color = color;
  }

  drawRect = ctx =>
    ctx.strokeRect(
      this.corners.tl.x,
      this.corners.tl.y,
      this.width,
      this.heigth
    );
}
