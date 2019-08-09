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
    this.changeSelectedTool(this.tools.Circle);
  }
  changeSelectedTool = tool => {
    // The same tool has been clicked on. Do nothing!
    if (this.selectedTool === this.tools[tool]) return;
    console.log(`.tools-${this.selectedTool}`);
    if (this.selectedTool) {
      document
        .querySelector(`.tools-${this.selectedTool}`)
        .classList.remove('selected');
    }
    this.selectedTool = this.tools[tool];
    console.log(`.tools-${this.selectedTool}`);
    document
      .querySelector(`.tools-${this.selectedTool}`)
      .classList.add('selected');
  };
}
