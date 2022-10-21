/* -------------------------------- 
62. Function returing Function
---------------------------------*/

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain UI ?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ' what do you do?');
        }
    }
}

let teacherQuestion = interviewQuestion('teacher');
let designerQuestion = interviewQuestion('designer');
teacherQuestion('John');
designerQuestion('Mike');

interviewQuestion('designer')('Wills');
