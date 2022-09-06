const quizDb = [
    {
        question:"#1 Capital of Lithuania?",
        a:"Vilnius",
        b:"Kaunas",
        c:"Klaipeda",
        d:"Taurage",
        answer:"answer1"
    },
    {
        question:" #2 Capital of Latvia?",
        a:"Vilnius",
        b:"Ryga",
        c:"Berlin",
        d:"Tartu",
        answer:"answer2"

    },
    {
        question:"#3 Capital of Estonia?",
        a:"Vilnius",
        b:"Riga",
        c:"Tartu",
        d:"Tallinn",
        answer:"answer4"
    },
    {
        question:"#4 Capital of Germany?",
        a:"Berlin",
        b:"Paris",
        c:"Hamburg",
        d:"Barcelona",
        answer:"answer1"
    },
    {
        question:"#5 Capital of Spain?",
        a:"Berlin",
        b:"Paris",
        c:"Hamburg",
        d:"Barcelona",
        answer:"answer4"

    },
];

const question = document.querySelector('.question')
const answers = document.querySelectorAll('.answer')
const showResult = document.querySelector('#show-score')

const option1 =  document.querySelector('#option1')
const option2 =  document.querySelector('#option2')
const option3 =  document.querySelector('#option3')
const option4 =  document.querySelector('#option4')
const submitBtn = document.querySelector('#btn-submit')

let countQuestion = 0
let score = 0

const loadQuestion = () =>{

    const questionList = quizDb[countQuestion]    
    question.innerText = questionList.question;
    console.log(questionList.question)
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const checkAnswer = () =>{
    let answer;

    answers.forEach((answerElem)=>{
        if(answerElem.checked){
            answer = answerElem.id
        }
    });
    return answer;
};

submitBtn.addEventListener('click',() => {
    const selectedAnswer = checkAnswer()
    console.log(selectedAnswer)

    if(selectedAnswer === quizDb[countQuestion].answer){
        score++
    };

    countQuestion++;

    if(countQuestion <quizDb.length){
        loadQuestion();
    }else{
        showResult.innerHTML = 
        ` 
        <h2>Your result is: ${score} / ${quizDb.length} </h2>
        <button id="btn-submit" onclick="location.reload()">Play Again</button>
        `;
        showResult.classList.remove('score-block');
    }

})