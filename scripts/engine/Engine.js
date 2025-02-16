import { Draw } from "../utils/Draw.js";
import { Vector } from "../math/Vector.js";
import { Mouse } from "./utils/Mouse.js";

export class Engine {
    constructor(canvasElement, frameRate = 60){
        this.canvas = canvasElement;
        this.SetupCanvas();
        this.frameRate = frameRate;

        this.ctx = this.canvas.getContext("2d");

        this.updateLoopInterval = undefined;

        this.Draw = new Draw(this.ctx);

        this.LastSecond = undefined;
        this.showFPS = false;
        this.FrameCount = 0;

        this.Mouse = new Mouse();
        this.Mouse.Initiate();

        this.isAddingAPipe = false;
    }

    SetupCanvas(){
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    StartUpdate(){
        this.updateLoopInterval = setInterval(() => {
            this.UpdateLoop();
        }, 1000 / this.frameRate);
    }

    StopUpdate(){
        if (this.updateLoopInterval !== undefined){
            clearInterval(this.updateLoopInterval);
            this.updateLoopInterval = undefined;
        }
    }

    Update(){
        throw new Error("Update method not implemented");    
    }

    UpdateLoop(){
        if (this.LastSecond === undefined){
            this.LastSecond = new Date().getSeconds();
            this.LastFPS = 0;
        }

        let currentSecond = new Date().getSeconds();

        if (currentSecond - this.LastSecond >= 1){
            this.LastSecond = currentSecond;
            this.LastFPS = this.FrameCount;
            this.FrameCount = 0;
        } else {
            this.FrameCount++;
        }

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        if (this.showFPS){
            this.Draw.Text("FPS: " + this.LastFPS, new Vector(10, 25));
        }
        
        this.Update();
    }
}