import {MechanoClass} from "./mechanoClass";

export class TrainClass extends MechanoClass {

    wheels: number;
    color: string;
    constructor(w: number, c: string) {
        super(w, c);
        this.wheels = w;
        this.color = c;
    }

    beep(countBeep: number){
        console.log('beep from train');
    }
}