import { randomInt } from "crypto";
import { Animal } from "./animal";

export class Cheval extends Animal{
        public robe: string="";
        public asignedNumber: number = 0;
        private runningpos: number= 0;
        public finished: boolean= false;
        public perfIndex: number = 0;
        public flip: number = 0;

        constructor(rname: string, pindex: number,flippete: number) {
            super(rname)
            this._name= rname;
        }
        public getName(): string {
            return this._name;
        }

        private getStepHorse(): number{
            return randomInt(1,9);
        }
        
        public runHorse(): number{
            this.runningpos = this.runningpos + this.getStepHorse()*Math.round(1+ this.perfIndex/100);
            this.runningpos = this.runningpos*Math.round(1-this.flip/100);
            return this.runningpos;
        }

        public initPos(): void {
            this.runningpos = 0;
        }
        
        public getPos(): number {
            return this.runningpos;
        }
        
}   
