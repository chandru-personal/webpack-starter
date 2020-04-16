export class Car6 {
    constructor(id, type) {
        this.id = id;
        this.type = type;
    }
    start() {
        return `starting ${this.type} ${this.id}`;
    }
}