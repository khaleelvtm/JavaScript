/* -------------------------------- 
66. Coading Challange
---------------------------------*/

(function (){
    function Question(question, answer, currect) {
        this.question = question;
        this.answer = answer;
        this.currect = currect;
    }
    Question.prototype.displayQustions = function() {
        console.log(this.question);
        for (let i = 0; i < this.answer.length; i++) {
            console.log(i + ' : ' + this.answer[i]);
        }
    }
    Question.prototype.checkAnswer = function(ans, callBack) {
        let sc;
        if (ans === this.currect) {
            console.log('Currect Answer!');
            sc = callBack(true);
        } else {
            console.log('Wrong Answer, Please try again :)');
            sc = callBack(false);
        };
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your score ' + score);
        console.log('--------------------');
    }
    
    let q1 = new Question('JavaScript World Best Languge?', ['yes', 'no'], 0);
    let q2 = new Question('What is your teacher name?', ['John', 'Mike', 'Smith'], 2);
    let q3 = new Question('Best coading Tool?', ['Code', 'Atom', 'VS Code', 'Brackets'], 2);
    
    let questions = [q1, q2, q3];
    
    function score() {
        let sc = 0;
        return function(currect) {
            if (currect) {
                sc++;
            }
            return sc;
        }
    }
    let keepScore = score();

    function nextQuestion() {
        let number = Math.floor(Math.random() * questions.length);
        questions[number].displayQustions();
        
        let answer = prompt('Please enter answe!');
        if (answer !== 'exit') {
            questions[number].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }

    nextQuestion();
    
}) ();

