const quizDBS = [
    {
    question: "Q1) Which type of JavaScript language is ___",
    a: "Object-Oriented",
    b: "Object-Based ",
    c: "Assembly-language",
    d: "High-level",
    ans: "ans2"
    },
    {
    question: " Q2) HTML stands for -",
     a: "HighText Machine Language",
     b: "HyperText and links Markup Language",
     c: "HyperText Markup Language ",
     d: "High-level",
     ans: "ans3"
    
    },
    {
    question: " Q3) CSS stands for -",
     a: "Cascade style sheets",
     b: "Cascade style shape ",
     c: "Color and style sheets ",
     d: "Cascading style sheets",
     ans: "ans4"
        
    },
    {
    question: "Q4) The function and var are known as:",
    a: "Keywords",
    b: "Data types",
    c: "Declaration statements ",
    d: "Prototypes",
    ans: "ans3"
    },
    {
    question: "Q5) Which of the following element is responsible for making the text bold in HTML?",
    a: "<pre>",
    b: "<b>",
    c: "<br> ",
    d: "Prototypes",
    ans: "ans2"
    },
    {
    question: "Q6) Which of the following  name is correct?",
    a: "css",
    b: "cssss",
    c: "cses ",
    d: "hhh",
    ans: "ans1"
    },
    
];
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2 =document.querySelector('#option2');
const option3 =document.querySelector('#option3');
const option4 =document.querySelector('#option4');
const submit=document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount =0;
let score =0;
const loadQuestion = () => {
    const questionList = quizDBS[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}
loadQuestion();
const getCheckAnswer = () =>{
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer= curAnsElem.id;
        }
        
    });

   return answer; 

};
const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}


submit.addEventListener('click',() =>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer=== quizDBS[questionCount].ans){
        score++;
    };


questionCount++;
deselectAll();

if(questionCount<quizDBS.length){
    loadQuestion();
}else{
    showScore.innerHTML = `
         <h3> You scored ✌️ ${score}/${quizDBS.length} </h3>
         <button class="btn" onclick="location.reload()">😀Never Give Up !!! Play Again ✌️</button> 

    
    ` ;
    showScore.classList.remove('scoreArea');
    
    
}
});

