export default class Tools {
  constructor() {
    this.toolsContainer = document.getElementById('tools');
    this.tools = {
      Select: 'Select',
      Move: 'Move',
      Circle: 'Circle',
      Rectangle: 'Rectangle',
      Triangle: 'Triangle',
      Remove: 'Remove',
      Save: 'Save'
    };
    for (let p in this.tools) {
      const el = document.createElement('div');
      el.className = `tools-${this.tools[p]}`;
      el.id = `tools-${this.tools[p]}`;
      el.innerHTML = `tools-${this.tools[p]}`;
      el.addEventListener('click', () =>
        this.changeSelectedTool(this.tools[p])
      );
      this.toolsContainer.appendChild(el);
    }
    this.selectedTool = this.tools.Circle;
  }
  changeSelectedTool = tool => (this.selectedTool = this.tools[tool]);
}
