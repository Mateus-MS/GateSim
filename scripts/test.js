import { TestScene } from "./scenes/testScene.js";
import { Vector } from "./math/Vector.js";

var canvas = document.getElementById('canvas');
var engine = new TestScene(canvas);

let a = new Vector(0, 0);
let b = new Vector(100, 100);

engine.Draw.Line(a, b, 'red');