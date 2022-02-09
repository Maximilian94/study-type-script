interface AddFn {
	(a: number, b: number): number;
}

let addFn: AddFn;

addFn = (a, b) => a + b;

// ---------------------------

interface PersonName {
	readonly name: string;
	nickName?: string; //  Optional Property

	greet(phrase: string): void;
}

interface PersonInter extends PersonName {
	age: number;
}

class Person implements PersonInter {
	name: string;
	nickName?: string;
	age = 10;
	greet(phrase: string): void {}

	constructor(name: string, nickName?: string) {
		this.name = name;
		this.nickName = nickName;
	}
}

let user1: Person;

user1 = {
	name: "Maximilian Kaden",
	age: 27,
	greet: () => console.log("Hi!"),
};

// user1.name = "";
