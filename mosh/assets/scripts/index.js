// -----
// 	return {
// function createCircle(radius) {
// 		radius,
// 		draw: function () {
// 			console.log("draw");
// 		},
// 	};
// }
// const circle = createCircle(1);

function Circle(radius) {
	this.radius = radius;

	this.defaultLocation = {
		x: 0,
		y: 0,
	};

	this.computeOptimLocation = function (fact) {
		//.....
	};

	this.getDefaultLocation = function () {
		return this.defaultLocation;
	};

	this.draw = function () {
		console.log("Draw Start");
	};

	Object.defineProperty(this, "defaultLocation", {
		get: function () {
			return defaultLocation;
		},
		set: function (value) {
			if (!value.x || !value.y) throw new Error("Invalid Locarion ! 404");
			defaultLocation = value;
		},
	});
}

const circle = new Circle(1);
circle.defaultLocation = 1;
