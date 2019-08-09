import { isContext } from 'vm';

export default class Canvas {
  constructor(tools) {
    this.tools = tools;
    this.storage;
    this.canvas = document.getElementById('canvas');
    this.canvas.addEventListener('mouseup', this.onMouseUp, false);
  }

  onMouseUp = e => {
    console.log('offsetX:', e.offsetX, 'offsetY:', e.offsetY);
    console.log(e);
    this.storage.addShape({
      type: this.tools.selectedTool,
      x: e.offsetX,
      y: e.offsetY,
      id: Math.floor(Math.random() * 1000)
    });
  };

  notify = () => {
    console.log('Canvas notified!');
    this.drawShapes();
  };

  drawShapes = () => {
    const ctx = this.canvas.getContext('2d');
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.storage.store.shapes.forEach(shape => {
      switch (shape.type) {
        case 'Circle':
          this.drawCircle(ctx, shape.x, shape.y, 50);
          break;
        case 'Rectangle':
          this.drawRect(ctx, shape.x - 50, shape.y - 50, 100, 100);
          break;
        case 'Triangle':
          this.drawTriangle(ctx, shape.x, shape.y - 50);
        default:
          break;
      }
    });
  };
  drawRect = (ctx, x, y, width, heigth) => ctx.strokeRect(x, y, width, heigth);
  drawCircle = (ctx, x, y, radius) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.stroke();
  };
  drawTriangle = (ctx, x, y) => {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - 50, y + 100);
    ctx.lineTo(x + 50, y + 100);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.stroke();
  };
}
