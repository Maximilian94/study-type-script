// O javascript não tem o conteiro de TypeCasting, porque as variáveis são de tipo dinâmico.
//	Porem, toda variável no TypeScript tem um tipo.
//	TypeCasting permite voce converter o tipo de uma variável para outro

//  Desta maneira o elemento esta sendo tipado como HTMLElement ou null
const userInputElement = document.getElementById('some-id');

//  Desta maneira o elemento esta sendo tipado como HTMLElement
const userInputElement2 = document.getElementById('some-id')!;
// Property 'value' does not exist on type 'HTMLElement'.ts(2339)
// console.log(userInputElement2.value);

//  Desta maneira o elemento esta sendo tipado como HTMLInputElement e agora conseguimos acessar o value
const userInputElement3 = <HTMLInputElement>document.getElementById('some-id')!;
console.log(userInputElement3.value);

//  Em caso de trabalhar com React, podemos fazer assim
const userInputElement4 = document.getElementById(
	'some-id'
)! as HTMLInputElement;
console.log(userInputElement4.value);

//	Ou também podemos acessar a propriedade da seguinte forma
let newWay = (userInputElement2 as HTMLInputElement).value;
