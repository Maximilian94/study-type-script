"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Flight = /** @class */ (function () {
    function Flight(flightNumber) {
        this.flightNumber = flightNumber;
        // Commented because the use of shortcut
        // private id: string;
        // public number: string;
        this.crew = ["Maximilian Kaden"];
        this.id = Math.random();
        this.flightNumber = flightNumber;
    }
    Object.defineProperty(Flight.prototype, "flightId", {
        get: function () {
            return this.id;
        },
        set: function (newId) {
            if (!newId) {
                throw new Error("Please pass in a valid value");
            }
            this.id = newId;
        },
        enumerable: false,
        configurable: true
    });
    Flight.prototype.addCrewMember = function (personName) {
        this.crew.push(personName);
    };
    return Flight;
}());
// const flightOne = new Flight("3534", "TAM3534");
// console.log(flightOne);
// flightOne.addCrewMember("max");
// flightOne.getCrewMembers();
var DomesticFlight = /** @class */ (function (_super) {
    __extends(DomesticFlight, _super);
    function DomesticFlight(flightNumber, aircraft) {
        var _this = _super.call(this, flightNumber) || this;
        _this.aircraft = aircraft;
        _this.aircraft;
        return _this;
    }
    DomesticFlight.prototype.getAircraft = function () {
        //	The developer is forced to create this method, because is an abstract method, with comes from parent class
        console.log(this.aircraft);
    };
    DomesticFlight.prototype.getFlightNumber = function () {
        console.log("Getting Flight Number");
        console.log("Domestic " + this.flightNumber);
        console.log("-------------------");
    };
    DomesticFlight.prototype.getFlightId = function () {
        // console.log(this.id);
        console.log("Getting Flight Id");
        console.log("Cannot get flight ID, because Flight ID is private key and can only be accessed by the class, not the heir class ");
        console.log("-------------------");
    };
    DomesticFlight.prototype.getCrewMembers = function () {
        console.log("Getting Crew Members");
        console.log("We can get crew members, because crew is a protected key on ow parent class");
        console.log(this.crew);
    };
    return DomesticFlight;
}(Flight));
var domestic = new DomesticFlight("3525", "PT-MAX");
// console.log(domestic);
domestic.getFlightNumber();
domestic.getFlightId();
domestic.getCrewMembers();
//	Use of "get", to get value from private key
console.log(domestic.flightId);
//	Use of "set", to set value from private key
// domestic.flightId = 0; // This case will cause an error
domestic.flightId = 1;
console.log(domestic.flightId);
