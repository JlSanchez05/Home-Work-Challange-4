let myBtn =document.querySelector('#start-btn');
let initialTxt = document.querySelector('.welcome')
const  startValueString = 'Start Quiz'
const answer1 = document.querySelector('.answer1')
const answer2 = document.querySelector('.answer2')
const answer3 = document.querySelector('.answer3')
const answer4 = document.querySelector('.answer4')
let question = document.querySelector('.question-header')

var questions = [
    {
      title: "Which one is a looping structure in JavaScript?",
      choices: ["All the below", "For", "While", "do-while loops"],
      answer: "All the below"
    }]

myBtn.addEventListener('click',function(){

let startValue = document.querySelector("#start-btn").textContent
console.log(startValue)

if(startValue === startValueString){
   initialTxt.textContent ='Choose from the following answers'
myBtn.remove() 
question.textContent ='WHich one is a looping structure in JavaScript ?'
answer1.textContent = '1: All the below'
answer2.textContent = '2: For'
}








}) 