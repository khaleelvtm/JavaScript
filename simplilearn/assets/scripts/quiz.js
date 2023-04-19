// Quiz Start
let startButton = document.getElementById("startButton");
let nextButton = document.getElementById("nextButton");
let questionContainer = document.getElementById("questionContainer");
let questionElement = document.getElementById("question");

let answerButtons = document.getElementById("answerButtons");

let shuffledQuestions, currentQuestionIndex;
let quizScrore = 0;

// Select Answer

const startGame = () => {
	console.log("start");
	startButton.classList.add("hide");
	shuffledQuestions = questions.sort(() => Math.random() - 0.5);
	currentQuestionIndex = 0;
	questionContainer.classList.remove("hide");
	setNextQuestion();
	quizScrore = 0;
};

startButton.addEventListener("click", startGame);

nextButton.addEventListener("click", () => {
	currentQuestionIndex++;
	setNextQuestion();
});

const setNextQuestion = () => {
	resetState();
	showQuestions(shuffledQuestions[currentQuestionIndex]);
};

const showQuestions = (question) => {
	questionElement.innerText = question.question;
	question.answer.forEach((answer) => {
		let button = document.createElement("button");
		button.innerText = answer.text;
		button.classList.add("btn");
		if (answer.correct) {
			button.dataset.correct = answer.correct;
		}
		button.addEventListener("click", selectAnswer);
		answerButtons.appendChild(button);
	});
};

const resetState = () => {
	clearStatusClass(document.body);
	nextButton.classList.add("hide");
	while (answerButtons.firstChild) {
		answerButtons.removeChild(answerButtons.firstChild);
	}
};

const selectAnswer = (e) => {
	let selectedButton = e.target;
	let correct = selectedButton.dataset.correct;

	setStatusClass(document.body, correct);
	Array.from(answerButtons.children).forEach((button) => {
		setStatusClass(button, button.dataset.correct);
	});

	if (shuffledQuestions.length > currentQuestionIndex + 1) {
		nextButton.classList.remove("hide");
	} else {
		startButton.innerText = "Restart";
		startButton.classList.remove("hide");
	}

	if ((selectedButton.dataset = correct)) {
		quizScrore += 5;
	}

	document.getElementById("right-answer").innerText = quizScrore;
};

const setStatusClass = (element, correct) => {
	clearStatusClass(element);
	if (correct) {
		element.classList.add("correct");
	} else {
		element.classList.add("wrong");
	}
};

const clearStatusClass = (element) => {
	element.classList.remove("correct");
	element.classList.remove("wrong");
};

// Questions
let questions = [
	{
		question: "Web page editors works on a ____ principle",
		answer: [
			{ text: "WWW", correct: false },
			{ text: "HTML", correct: false },
			{ text: "WYSIWYG", correct: true },
			{ text: "WYGWYSI", correct: false },
		],
	},
	{
		question: "Which program is used by web clients to view the web pages?",
		answer: [
			{ text: "Web browser", correct: true },
			{ text: "Protocol", correct: false },
			{ text: "Web server", correct: false },
			{ text: "Search Engine", correct: false },
		],
	},
	{
		question:
			"What is the name of the location address of the hypertext documents?",
		answer: [
			{ text: "Uniform Resource Locator", correct: true },
			{ text: "Web server", correct: false },
			{ text: "File", correct: false },
			{ text: "Web address", correct: false },
		],
	},
	{
		question:
			"What are shared on the Internet and are called as Web pages?",
		answer: [
			{ text: "Programs", correct: false },
			{ text: "Cables", correct: false },
			{ text: "Hypertext documents", correct: true },
			{ text: "None", correct: false },
		],
	},
	{
		question: "How many colour names are used by the browsers?",
		answer: [
			{ text: "8", correct: false },
			{ text: "10", correct: false },
			{ text: "12", correct: false },
			{ text: "16", correct: true },
		],
	},
];
