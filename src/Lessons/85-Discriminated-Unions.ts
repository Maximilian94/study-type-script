interface Bird {
	type: 'bird';
	flyingSpeed: number;
}

interface Horse {
	type: 'horse';
	runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
	//  Verifica se existe a chave flyingSpeed, caso contratiro da erro
	if ('flyingSpeed' in animal) {
		console.log('Moving with speed: ' + animal.flyingSpeed);
	}

	//  Outra forma é criar uma propriedade que nomeie a interface com uma string, assim podemos
	//  fazer um switcher para identificar se é um Bird ou Horse
	let speed;
	switch (animal.type) {
		case 'bird':
			speed = animal.flyingSpeed;
			break;

		case 'horse':
			speed = animal.runningSpeed;
			break;
	}
	console.log('Moving with speed: ' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });
