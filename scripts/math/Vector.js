export class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.isVector = true;
    }

    add(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }

    subtract(vector) {
        return new Vector(this.x - vector.x, this.y - vector.y);
    }
}