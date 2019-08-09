export class Triangle {
  constructor(x, y, color = '#000') {
    this.type = 'triangle';
    this.id = Math.floor(Math.random() * 10000);
    this.origin = { x: x, y: y };
    this.corners = {
      t: { x: x, y: y - 50 },
      bl: { x: x - 50, y: y + 50 },
      br: { x: x + 50, y: y + 50 }
    };
    this.width = 100;
    this.heigth = 100;
    this.color = color;
  }

  draw = ctx => {
    ctx.beginPath();
    ctx.moveTo(this.corners.t.x, this.corners.t.y);
    ctx.lineTo(this.corners.bl.x, this.corners.bl.y);
    ctx.lineTo(this.corners.br.x, this.corners.br.y);
    ctx.lineTo(this.corners.t.x, this.corners.t.y);
    ctx.strokeStyle = this.color;
    ctx.closePath();
    ctx.stroke();
  };
}
