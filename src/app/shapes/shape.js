export class Shape {
  constructor(x, y, color = '#000') {
    this.origin = { x: x, y: y };
    this.color = color;
    this.selected = false;
    this.id = Math.floor(Math.random() * 10000);
  }
}
