const quizData = [
    {
        question: 'how old is Sainath',a:'10',b:'20',c:'15',d:'16',correct:'c'
    },
    {
        question:'What is the most used programming language in 2022?',a:'Java',b:'Python',c:'Javascript',d:'Golang',correct:'b'
    },
    {
        question:'Who is the president of india?',a:'Narendra Modi',b:'Nirmal Sitaraman',c:'Ram nath Kovind',d:'Lalu Prasad Yadav',correct:'c'
    },
    {
        question:'What does HTML Stand for?',a:'Hypertext Markup Language',b:'Cascading Stylesheet',c:'JSON',d:'Application Programming Interface',correct:'a'
    },
    {
        question:'what year is Javascript Launched?',a:'1983',b:'1996',c:'1994',d:'None of the above',correct:'d'
    }
];

let currentQuestion = 0;
const quiz = document.getElementById('quiz');
const questionEle = document.getElementById('questions');
const a_text =document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text =document.getElementById('d_text');
const submitBtn = document.getElementById('subBtn');
let score = 0;
loadQuiz();//Call Everytime we submit
function getSelected()
{
    const answersEle = document.querySelectorAll('.answers');
    let answer = undefined
    for(i=0;i<answersEle.length;i++)
    {
        if(answersEle[i].checked)
        {
            answer =  answersEle[i].id;
        }
    }
    console.log(answer)
    return answer
}

function loadQuiz()
{
    const currentQuizData = quizData[currentQuestion];
    questionEle.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}
submitBtn.addEventListener('click',function(){
    
    const answer = getSelected()

    if(answer)
    {
        if(answer === quizData[currentQuestion].correct)
        {
            score++;
        }
        currentQuestion++;
        
        
    if(currentQuestion < quizData.length){
        loadQuiz();
    }
    else{
        quiz.innerHTML = `<h1>Your Score is  ${score}/ ${quizData.length}</h2><button onclick="location.reload()">Reload</button>`
    }
    } 
})