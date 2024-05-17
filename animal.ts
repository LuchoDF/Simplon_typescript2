export abstract class Animal {
    protected _name: string;

    public constructor(rname: string) {
        this._name = rname;
    }

    public getName(): string {
        return this._name;
    }
}
