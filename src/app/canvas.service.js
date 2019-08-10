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
    if (
      this.tools.selectedTool === this.tools.tools.Circle ||
      this.tools.selectedTool === this.tools.tools.Rectangle ||
      this.tools.selectedTool === this.tools.tools.Triangle
    ) {
      const shape = this.createShape(e.offsetX, e.offsetY);
      if (shape) this.storage.addShape(shape);
    } else if (this.tools.selectedTool === this.tools.tools.Select)
      this.selectShape(e.offsetX, e.offsetY);
  };

  notify = () => {
    console.log('Canvas notified!');
    this.drawShapes();
  };

  selectShape = (x, y) => {
    this.storage.store.shapes.forEach(shape =>
      shape.inInBounds(x, y)
        ? (shape.selected = true)
        : (shape.selected = false)
    );
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
}
