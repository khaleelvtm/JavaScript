//
function CarManufacturing(brand, modelNumber, price) {
	this.brand = brand;
	this.modelNumber = modelNumber;
	this.price = price;
	function allWeeldrive() {
		return "this is new car";
	}
}

let audiCar = new CarManufacturing("Audi", "Q8", 50000);

console.log(audiCar.brand);

let ver1 = new String();
console.log(typeof ver1);
