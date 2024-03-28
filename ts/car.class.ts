import {MechanoClass} from "./mechanoClass";


export function sum(a: number, b: number): number {

    return a+b;
}

export class Car extends MechanoClass {

    beep(countBeep: number){
        console.log('beep'); // д/з вывести в консоль строку beep заданное количество раз в countBeep - range
    }

}




