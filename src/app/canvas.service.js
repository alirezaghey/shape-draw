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
    ctx.clearRect(0, 0, this.canvas.with, this.canvas.height);
    this.storage.store.shapes.forEach(shape => {
      const x = shape.x;
      const y = shape.y;
      ctx.strokeRect(x - 50, y - 50, 100, 100);
    });
    // ctx.lineWidth = 10;
    // ctx.moveTo(x, y);
    // ctx.strokeRect(75, 140, 150, 110);
    // ctx.beginPath();
    // ctx.arc(
    // Number(this.storage.store.shapes[0].x),
    // Number(this.storage.store.shapes[0].y),
    //   x,
    //   y,
    //   50,
    //   0,
    //   2 * Math.PI
    // );
    // ctx.stroke();
    // this.storage.store.shapes.forEach(shape => {
    // ctx.beginPath();
    // ctx.arc(shape.x, shape.y, 5, 0, 2 * Math.PI);
    // ctx.stroke();
    // });
  };
}
