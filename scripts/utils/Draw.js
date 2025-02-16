//import { Vector } from "../math/Vector";

export class Draw{
    
    constructor(ctx){
        this.ctx = ctx;
    }
    
    Line(pA, pB, color = "black", width = 1){
        if(!pA.isVector) throw new Error("pA must be a Vector");
        if(!pB.isVector) throw new Error("pB must be a Vector");

        this.ctx.beginPath();
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = width;
        this.ctx.moveTo(pA.x, pA.y);
        this.ctx.lineTo(pB.x, pB.y);
        this.ctx.stroke();
        this.ctx.closePath();
    }

    Circle(position, radius, color = "black", borderColor, borderWidth = 0){
        if(!position.isVector) throw new Error("position must be a Vector");

        this.ctx.beginPath();
        
        this.ctx.fillColor = color;
        this.ctx.strokeStyle = borderColor;

        this.ctx.lineWidth = borderWidth;
        this.ctx.arc(position.x, position.y, radius, 0, 2 * Math.PI);
        
        this.ctx.fill();
        this.ctx.stroke();

        this.ctx.closePath();
    }

    Text(text, position, color = "black"){
        if(!position.isVector) throw new Error("position must be a Vector");

        this.ctx.beginPath();
        this.ctx.font = "20px Arial";
        this.ctx.fillStyle = color;
        this.ctx.fillText(text, position.x, position.y);
        this.ctx.closePath();
    }
}