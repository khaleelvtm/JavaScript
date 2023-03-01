//
const get = require("./app.js");
const axios = require("axios");

const BASE_URL = "https://code-malayalam.github.io/school-test-api/";

// Async
const getTotalStudentsAsy = async (className) => {
	const data = await axios(`${BASE_URL}/class/${className}.json`);
	const classTeacher = data.data.classTeacher;
	const data2 = await axios(`${BASE_URL}/staff/${classTeacher}.json`);
	const classes = data2.data.classes;
	const promisArr = classes.map((element) => {
		return axios(`${BASE_URL}/class/${element}.json`);
	});
	const data3 = await Promise.all(promisArr);
	const result = data3.reduce((total, item) => {
		return total + item.data.numberOfStudents;
	}, 0);

	return result;
};

// Then Cathc
const getTotalStudentsPro = (className) => {
	return axios(`${BASE_URL}/class/${className}.json`)
		.then((data) => {
			const classTeacher = data.data.classTeacher;
			return axios(`${BASE_URL}/staff/${classTeacher}.json`);
		})
		.then((data) => {
			const classes = data.data.classes;
			const promisArr = classes.map((element) => {
				return axios(`${BASE_URL}/classerr/${element}.json`);
			});
			return Promise.all(promisArr);
		})
		.then((data) => {
			return data.reduce((total, item) => {
				return total + item.data.numberOfStudents;
			}, 0);
		});
};

// Normal
const getTotalStudents = (className, success, failure) => {
	get(
		`${BASE_URL}/class/${className}.json`,
		(data) => {
			console.log(data);
			const classTeacher = data.classTeacher;
			get(
				`${BASE_URL}/staff/${classTeacher}.json`,
				(data) => {
					console.log(data);
					const classes = data.classes;
					let count = 0;
					let sum = 0;
					let error = false;
					for (let index = 0; index < classes.length; index++) {
						const element = classes[index];
						get(
							`${BASE_URL}/class/${element}.json`,
							(data) => {
								count++;
								sum = sum + data.numberOfStudents;
								if (
									count === classes.length &&
									error === false
								) {
									console.log(sum);
									success(sum);
								}
							},
							(err) => {
								if (error === false) {
									error = true;
									error(err);
								}
							}
						);
					}
				},
				failure
			);
		},
		failure
	);
};

getTotalStudentsAsy("10c")
	.then((data) => {
		console.log("10C :", data);
	})
	.catch((err) => {
		console.log("ERROR: 101");
	});

getTotalStudentsPro("10c")
	.then((data) => {
		console.log("10C STUDENTS:", data);
	})
	.catch((err) => {
		console.log("ERROR: 404");
	});

getTotalStudents(
	"10c",
	(data) => {},
	(error) => {}
);
