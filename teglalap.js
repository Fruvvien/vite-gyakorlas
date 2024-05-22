export class Teglalap{
    #a;
    #b;

    constructor(a, b){
        this.#a = a;
        this.#b = b;
    }

    get a(){
        return this.#a;
    }
    get b(){
        return this.#b;
    }

    kerulet(){
        return this.#a+this.#b;
    }
    terulet(){
        return this.#a * this.#b;
    }
}