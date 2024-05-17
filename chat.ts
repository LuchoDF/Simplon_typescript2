import { Animal } from "./animal";
export class Chat extends Animal{
    constructor(rname: string) {
        super(rname);
        this._name= rname;
        
    }

    public getName(): string {
        return this._name;
    }
}


