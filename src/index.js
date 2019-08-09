import './main.scss';

import Canvas from './app/canvas.service';
import Shapes from './app/shapeManager.service';
import Storage from './app/storage';
import Tools from './app/tools.service';

const tools = new Tools();
const shapes = new Shapes();
const canvas = new Canvas(tools);
const storage = new Storage(shapes, tools, canvas);

shapes.storage = canvas.storage = storage;

console.log('hello from index.js');
