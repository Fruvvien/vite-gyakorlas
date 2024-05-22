export class Pont{
    #x;
    #y;

    constructor(x, y){
        this.#x = x;
        this.#y = y;
    }

    get x(){
        return this.#x;
    }
    get y(){
        return this.#y;
    }

    origotolTavolsag(){
        const tavolsag = Math.sqrt(this.#x*this.#x + this.#y*this.#y)
        return tavolsag ;
    }
}