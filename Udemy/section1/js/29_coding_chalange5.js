/* ------------------------------------------------
29. Coding Chalnge 5
--------------------------------------------------*/

// Tip
let john = {
	fullname: "John Doe",
	bills: [124, 48, 268, 180, 42],
	tipCalc: function () {
		this.tips = [];
		this.finalvalue = [];

		for (let i = 0; i < this.bills.length; i++) {
			// Determine
			let percentage;
			let bill = this.bills[i];

			if (bill < 50) {
				percentage = 0.2;
			} else if (bill >= 50 && bill < 200) {
				percentage = 0.15;
			} else {
				percentage = 0.1;
			}

			// Add Result
			this.tips[i] = bill * percentage;
			this.finalvalue[i] = bill + bill * percentage;
		}
	},
};

john.tipCalc();
//console.log(john);

// Mark
let mark = {
	fullname: "Mark Steev",
	bills: [77, 375, 110, 45],
	tipCalc: function () {
		this.tips = [];
		this.finalvalue = [];

		for (i = 0; i < this.bills.length; i++) {
			let percentage;
			let bill = this.bills[i];

			if (bill < 100) {
				percentage = 0.2;
			} else if (bill >= 100 && bill < 300) {
				percentage = 0.1;
			} else {
				percentage = 0.25;
			}

			this.tips[i] = bill * percentage;
			this.finalvalue[i] = bill + bill * percentage;
		}
	},
};

mark.tipCalc();
//console.log(mark);

// Calc
function calcAverage(tips) {
	let sum = 0;

	for (let i = 0; i < tips.length; i++) {
		sum = sum + tips[i];
	}
	return sum / tips.length;
}

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
	console.log(john.fullname + "'s Average higher " + john.average);
} else if (mark.average > john.average) {
	console.log(mark.fullname + "Mark Average high " + mark.average);
} else {
	console.log("Two person both are same ");
}
