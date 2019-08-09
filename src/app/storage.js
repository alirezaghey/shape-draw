export default class Storage {
  constructor(shapes, tools, canvas) {
    this.shapes = shapes;
    this.tools = tools;
    this.canvas = canvas;
    this.store = { shapes: [] };
  }

  addShape(shape) {
    this.store.shapes.push(shape);
    this.shapes.notify();
    this.canvas.notify();
  }

  removeShape(shapeID) {
    this.store.shapes = this.store.shapes.filter(s => s.id !== shapeID);
    this.shapes.notify();
    this.canvas.notify();
  }
}
