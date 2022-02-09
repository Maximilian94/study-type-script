// Interception

type Admin = {
	name: string;
	privileges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const employee1: ElevatedEmployee = {
	name: "Max",
	privileges: ["create-server"],
	startDate: new Date(),
};

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
	console.log("Name: " + emp.name);

	if ("privileges" in emp) {
		console.log("Privileges: " + emp.privileges);
	}

	if ("startDate" in emp) {
		console.log("Privileges: " + emp.startDate);
	}
}

printEmployeeInformation(employee1);

type TypeStringOrNumb = string | number;
type TypeNumbOrBool = number | boolean;

type BothTypes = TypeStringOrNumb & TypeNumbOrBool;

function add(a: TypeStringOrNumb, b: TypeStringOrNumb) {
	if (typeof a === "string" || typeof b === "string") {
		return a.toString() + b.toString();
	}
	return a + b;
}
