import {AirplaneClass} from "./airplane.class";
import {TrainClass} from "./train.class";
import {Car, sum} from "./car.class";
import {MechanoInterface} from "./interfaces/mechano.interface";

const my2: string = 'Hello world';

let my3: string = 'Hello world 2';

const myVar: number | string  = '15';

const myBool: boolean = false;  // true

const myArr: (string | number )[] = [1,2,3, 's'];

const myArr2: any[] = [1,2,3, 's', true];

const myObj: User = {
    name: 'Vasya',
    age: 15
}


interface User {
    name: string,
    age: number
}

// function sum(a: number, b: number): number {
//     console.log(my2);
//     return a+b;
// }

let sum2 = (a: number, b: number): number => {
    return a+b;
}



sum(2,3);

sum2(2,3);

const myAirplain = new AirplaneClass(3, 'white');
console.log('myAirplain', myAirplain);

myAirplain.beep();

const train = new TrainClass(20, 'blue');

train.beep(4);

console.log('train', train);

const car: Car = new Car(4, 'blue');
const car2: MechanoInterface = new Car(2, 'red');

car.beep(4);

const carColor = car.color;




