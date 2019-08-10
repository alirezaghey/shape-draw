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
    this.selected = false;
  }

  draw = ctx => {
    const lineWidth = ctx.lineWidth;
    ctx.lineWidth = this.selected ? lineWidth + 2 : lineWidth;
    ctx.beginPath();
    ctx.moveTo(this.corners.t.x, this.corners.t.y);
    ctx.lineTo(this.corners.bl.x, this.corners.bl.y);
    ctx.lineTo(this.corners.br.x, this.corners.br.y);
    ctx.lineTo(this.corners.t.x, this.corners.t.y);
    ctx.strokeStyle = this.color;
    ctx.closePath();
    ctx.stroke();
    ctx.lineWidth = lineWidth;
  };

  isInItsArea = (x, y) => {
    const a1 = this.Area({ c1: { x: x, y: y } });
    const a2 = this.Area({ c2: { x: x, y: y } });
    const a3 = this.Area({ c3: { x: x, y: y } });

    const a = this.Area();

    return a1 + a2 + a3 === a;
  };

  Area = (
    { c1 = this.corners.t, c2 = this.corners.br, c3 = this.corners.bl } = {
      c1: this.corners.t,
      c2: this.corners.br,
      c3: this.corners.bl
    }
  ) => {
    return Math.abs(
      (c1.x * (c2.y - c3.y) + c2.x * (c3.y - c1.y) + c3.x * (c1.y - c2.y)) / 2.0
    );
  };
}
