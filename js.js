// getting all my query selectors and setting them into variables

let welcomeTxt = document.querySelector(".welcome")
let startBtn = document.querySelector("#start-btn")
let viewHighScoreBtn = document.querySelector('#high-scores')
let timer = document.querySelector('#timeLeft')
let question1 = document.querySelector('.choice1')
let question2 = document.querySelector('.choice2')
let question3 = document.querySelector('.choice3')
let question4 = document.querySelector('.choice4')
let questionHeader = document.querySelector(".question-header")

/*
console.log(question1)
console.log(question2)
console.log(question3)
console.log(question4)
console.log(timer) 
console.log(viewHighScoreBtn)
console.log(startBtn)
console.log(welcomeTxt) 
*/
var questions = [
    {
      title: "Which one is a looping structure in JavaScript?",
      choices: ["All the below", "For", "While", "do-while loops"],
      answer: "All the below"
    },{
        title:"What is a String",
        choices:["A text","A Number","A yarn"],
        answer: "A text"
    }]

   /// console.log(questions[1].title)

let startQuizTxt = 'Start Quiz'

let firstQuestion = questions[1].title
//console.log(firstQuestion)


let startAction = function(){
    startBtn.addEventListener('click',function(){
      if(startBtn.textContent == startQuizTxt){
       welcomeTxt.textContent = 'Choose from the following options'
         startBtn.remove()
      }
    
    }) 
    
} 

let secondAction = function(){
}


secondAction();
startAction();
