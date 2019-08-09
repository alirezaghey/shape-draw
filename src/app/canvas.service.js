import { Circle } from './shapes/circle';
import { Triangle } from './shapes/triangle';
import { Rectangle } from './shapes/rectangle';

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
    // this.storage.addShape({
    //   type: this.tools.selectedTool,
    //   x: e.offsetX,
    //   y: e.offsetY,
    //   id: Math.floor(Math.random() * 1000)
    // });
    const shape = this.createShape(e.offsetX, e.offsetY);

    if (shape) this.storage.addShape(shape);
  };

  notify = () => {
    console.log('Canvas notified!');
    this.drawShapes();
  };

  createShape = (x, y) => {
    let shape = null;
    switch (this.tools.selectedTool) {
      case this.tools.tools.Circle:
        shape = new Circle(x, y, 100);
        break;
      case this.tools.tools.Rectangle:
        shape = new Rectangle(x, y, 100, 100);
        break;
      case this.tools.tools.Triangle:
        shape = new Triangle(x, y);
        break;
      default:
        break;
    }
    return shape;
  };

  drawShapes = () => {
    const ctx = this.canvas.getContext('2d');
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.storage.store.shapes.forEach(shape => shape.draw(ctx));
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
