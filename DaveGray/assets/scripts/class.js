// Factory function

// function pizzaFactory(pizzaSize) {
// 	let crust = "original";
// 	let size = pizzaSize;
// 	return {
// 		bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`),
// 	};
// }

// const myPizza = pizzaFactory("small");
// myPizza.bake();

class Pizza {
	crust = "Original";
	#sauce = "tradition";
	#size;
	constructor(pizzaSize) {
		this.#size = pizzaSize;
	}
	getCrust() {
		return this.crust;
	}
	setCrust(pizzaCrust) {
		this.crust = pizzaCrust;
	}
	hereYouGo() {
		console.log(
			`Here is ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`
		);
	}
}

let myPizza = new Pizza("Small");
myPizza.hereYouGo();

console.log(myPizza.crust);
