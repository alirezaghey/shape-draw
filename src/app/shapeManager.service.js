export default class ShapeManager {
  constructor() {
    this.storage;
    this.shapeContainer = document.getElementById('shapes');
  }
  notify() {
    this.updateShapes();
  }
  updateShapes() {
    this.shapeContainer.innerHTML = '';
    this.storage.store.shapes.forEach(shape => {
      const el = document.createElement('div');
      el.className = shape.type;
      el.id = shape.id;
      el.innerHTML = shape.type + shape.id;
      el.addEventListener('click', () => this.removeShape(shape.id));
      this.shapeContainer.appendChild(el);
    });
  }
  removeShape(shapeID) {
    this.storage.removeShape(shapeID);
  }
}
