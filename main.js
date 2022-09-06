const quizDb = [
    {
        question:"#1 Capital of Lithuania",
        a:"Vilnius",
        b:"Kaunas",
        c:"Klaipeda",
        d:"Taurage",
        answer:"answe1"
    },
    {
        question:" #2 Capital of Latvia",
        a:"Vilnius",
        b:"Ryga",
        c:"Berlin",
        d:"Tartu",
        answer:"answer2"

    },
    {
        question:"#3 Capital of Estonia",
        a:"Vilnius",
        b:"Riga",
        c:"Tartu",
        d:"Tallinn",
        answer:"answer4"
    },
    {
        question:"#4 Capital of Germany",
        a:"Berlin",
        b:"Paris",
        c:"Hamburg",
        d:"Barcelona",
        answer:"answer1"
    },
    {
        question:"#5 Capital of Spain",
        a:"Berlin",
        b:"Paris",
        c:"Hamburg",
        d:"Barcelona",
        answer:"answer4"

    },
];
console.log(quizDb[0].answer)

const question = document.querySelector('.question')
const option1 =  document.querySelector('#option1')
const option2 =  document.querySelector('#option2')
const option3 =  document.querySelector('#option3')
const option4 =  document.querySelector('#option4')
const submitBtn = document.querySelector('#btn-submit')

let countQuestions = 0

const loadQuestion = () =>{

    const questionList = quizDb[countQuestions]

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}
loadQuestion()