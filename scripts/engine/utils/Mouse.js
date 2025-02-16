import { Vector } from "../../math/Vector.js";

export class Mouse{

    constructor(){
        this.position = new Vector(0, 0);
    }

    Initiate(){
        window.addEventListener("mousemove", (e) => {
            this.position.x = e.clientX;
            this.position.y = e.clientY;
        })

        window.addEventListener("mousedown", (e) => {
            this.isMouseDown = true;

            this.OnMouseDown();
        })

        window.addEventListener("mouseup", (e) => {
            this.isMouseDown = false
        })
    }

    OnMouseDown(){
        throw new Error("OnMouseDown not implemented");
    }

}