export default class Tools {
  constructor() {
    this.toolsContainer = document.getElementById('tools');
    this.toolType = {
      Select: 'Select',
      Move: 'Move',
      Circle: 'Circle',
      Rectangle: 'Rectangle',
      Triangle: 'Triangle',
      Remove: 'Remove',
      Save: 'Save'
    };
    for (let p in this.toolType) {
      const el = document.createElement('div');
      el.className = `tools-${this.toolType[p]}`;
      el.id = `tools-${this.toolType[p]}`;
      el.innerHTML = `tools-${this.toolType[p]}`;
      el.addEventListener('click', () =>
        this.changeSelectedTool(this.toolType[p])
      );
      this.toolsContainer.appendChild(el);
    }
    this.changeSelectedTool(this.toolType.Circle);
  }
  changeSelectedTool = tool => {
    // The same tool has been clicked on. Do nothing!
    if (this.selectedTool === this.toolType[tool]) return;
    console.log(`.tools-${this.selectedTool}`);
    if (this.selectedTool) {
      document
        .querySelector(`.tools-${this.selectedTool}`)
        .classList.remove('selected');
    }
    this.selectedTool = this.toolType[tool];
    console.log(`.tools-${this.selectedTool}`);
    document
      .querySelector(`.tools-${this.selectedTool}`)
      .classList.add('selected');
  };
}
