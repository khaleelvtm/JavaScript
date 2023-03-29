// -----
function createCircle(radius) {
	return {
		radius,
		draw: function () {
			console.log("draw");
		},
	};
}
const circle = createCircle(1);

function Circle(radius) {
	console.log("THIS: ", this);
	this.radius = radius;
	this.draw = function () {
		console.log("Draw");
	};
}

const anothOne = new Circle(1);
