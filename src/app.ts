abstract class Flight {
	// Commented because the use of shortcut
	// private id: string;
	// public number: string;
	protected crew: string[] = ["Maximilian Kaden"];
	private id: number = Math.random();

	constructor(public flightNumber: string) {
		this.flightNumber = flightNumber;
	}

	abstract getAircraft(): void; //	The developer is forced to create this method when create a class based in this one.

	get flightId() {
		return this.id;
	}

	set flightId(newId: number) {
		if (!newId) {
			throw new Error("Please pass in a valid value");
		}
		this.id = newId;
	}

	addCrewMember(personName: string) {
		this.crew.push(personName);
	}
}

// const flightOne = new Flight("3534", "TAM3534");

// console.log(flightOne);

// flightOne.addCrewMember("max");

// flightOne.getCrewMembers();

class DomesticFlight extends Flight {
	constructor(flightNumber: string, private aircraft: string) {
		super(flightNumber);
		this.aircraft;
	}

	getAircraft(): void {
		//	The developer is forced to create this method, because is an abstract method, with comes from parent class
		console.log(this.aircraft);
	}

	getFlightNumber() {
		console.log("Getting Flight Number");
		console.log("Domestic " + this.flightNumber);
		console.log("-------------------");
	}

	getFlightId() {
		// console.log(this.id);
		console.log("Getting Flight Id");
		console.log(
			"Cannot get flight ID, because Flight ID is private key and can only be accessed by the class, not the heir class "
		);
		console.log("-------------------");
	}

	getCrewMembers() {
		console.log("Getting Crew Members");
		console.log(
			"We can get crew members, because crew is a protected key on ow parent class"
		);
		console.log(this.crew);
	}
}

const domestic = new DomesticFlight("3525", "PT-MAX");

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
