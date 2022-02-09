"use strict";
var addFn;
addFn = function (a, b) { return a + b; };
var Person = /** @class */ (function () {
    function Person(name, nickName) {
        this.age = 10;
        this.name = name;
        this.nickName = nickName;
    }
    Person.prototype.greet = function (phrase) { };
    return Person;
}());
var user1;
user1 = {
    name: "Maximilian Kaden",
    age: 27,
    greet: function () { return console.log("Hi!"); },
};
// user1.name = "";
