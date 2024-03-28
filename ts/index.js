"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var airplane_class_1 = require("./airplane.class");
var train_class_1 = require("./train.class");
var car_class_1 = require("./car.class");
var my2 = 'Hello world';
var my3 = 'Hello world 2';
var myVar = '15';
var myBool = false; // true
var myArr = [1, 2, 3, 's'];
var myArr2 = [1, 2, 3, 's', true];
var myObj = {
    name: 'Vasya',
    age: 15
};
function sum(a, b) {
    console.log(my2);
    return a + b;
}
var sum2 = function (a, b) {
    return a + b;
};
sum(2, 3);
sum2(2, 3);
var myAirplain = new airplane_class_1.AirplaneClass(3, 'white');
console.log('myAirplain', myAirplain);
myAirplain.beep();
var train = new train_class_1.TrainClass(20, 'blue');
train.beep(4);
console.log('train', train);
var car = new car_class_1.Car(4, 'blue');
var car2 = new car_class_1.Car(2, 'red');
car.beep(4);
var carColor = car.color;
