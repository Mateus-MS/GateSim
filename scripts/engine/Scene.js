import { Engine } from "./Engine.js";

export class Scene extends Engine {
    constructor(canvasElement, frameRate = undefined){
        super(canvasElement, frameRate);
    }

    Update(){
        console.log("Scene update")
    }
}