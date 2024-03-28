import {MechanoInterface} from "./interfaces/mechano.interface";

export class MechanoClass implements MechanoInterface {

    wheels: number;
    color: string;
    constructor(w: number, c: string) {
        this.wheels = w;
        this.color = c;
    }

    beep (count?: number){
        console.log('beep mechano');
    }

}