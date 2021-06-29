let questionNumber = 1; 
let playerScore = 0;  
let wrongAttempt = 0; 
let indexNumber = 0;
let cakes=0;
const questions = [

    {
        question: "30 days has ______ ?",
        optionA: "January",
        optionB: "December",
        optionC: "June",
        optionD: "August",
        correctOption: "optionC"
    },

    {
        question: "How manay hours can be found in a day ?",
        optionA: "30 hours",
        optionB: "38 hours",
        optionC: "48 hours",
        optionD: "24 hours",
        correctOption: "optionD"
    },

    {
        question: "Which is the longest river in the world ?",
        optionA: "River Nile",
        optionB: "Long River",
        optionC: "River Niger",
        optionD: "Lake Chad",
        correctOption: "optionA"
    },

    {
        question: "_____ is the hottest Continent on Earth ?",
        optionA: "Oceania",
        optionB: "Antarctica",
        optionC: "Africa",
        optionD: "North America",
        correctOption: "optionC"
    },

    {
        question: "Which country is the largest in the world ?",
        optionA: "Russia",
        optionB: "Canada",
        optionC: "Africa",
        optionD: "Egypt",
        correctOption: "optionA"
    },

    {
        question: "Which of these numbers is an odd number ?",
        optionA: "Ten",
        optionB: "Twelve",
        optionC: "Eight",
        optionD: "Eleven",
        correctOption: "optionD"
    },

    {
        question: `"You Can't see me" is a popular saying by`,
        optionA: "Eminem",
        optionB: "Bill Gates",
        optionC: "Chris Brown",
        optionD: "John Cena",
        correctOption: "optionD"
    },

    {
        question: "Where is the world tallest building located ?",
        optionA: "Africa",
        optionB: "California",
        optionC: "Dubai",
        optionD: "Italy",
        correctOption: "optionC"
    },

    {
        question: "The longest river in the United Kingdom is ?",
        optionA: "River Severn",
        optionB: "River Mersey",
        optionC: "River Trent",
        optionD: "River Tweed",
        correctOption: "optionA"
    },


    {
        question: "How many permanent teeth does a dog have ?",
        optionA: "38",
        optionB: "42",
        optionC: "40",
        optionD: "36",
        correctOption: "optionB"
    },

    {
        question: "Which national team won the football World cup in 2018 ?",
        optionA: "England",
        optionB: "Brazil",
        optionC: "Germany",
        optionD: "France",
        correctOption: "optionD"
    },

    {
        question: "Which US state was Donald Trump Born ?",
        optionA: "New York",
        optionB: "California",
        optionC: "New Jersey",
        optionD: "Los Angeles",
        correctOption: "optionA"
    },

    {
        question: "How man states does Nigeria have ?",
        optionA: "24",
        optionB: "30",
        optionC: "36",
        optionD: "37",
        correctOption: "optionC"
    },

    {
        question: "____ is the capital of Nigeria ?",
        optionA: "Abuja",
        optionB: "Lagos",
        optionC: "Calabar",
        optionD: "Kano",
        correctOption: "optionA"
    },

    {
        question: "Los Angeles is also known as ?",
        optionA: "Angels City",
        optionB: "Shining city",
        optionC: "City of Angels",
        optionD: "Lost Angels",
        correctOption: "optionC"
    },

    {
        question: "What is the capital of Germany ?",
        optionA: "Georgia",
        optionB: "Missouri",
        optionC: "Oklahoma",
        optionD: "Berlin",
        correctOption: "optionD"
    },

    {
        question: "How many sides does an hexagon have ?",
        optionA: "Six",
        optionB: "Sevene",
        optionC: "Four",
        optionD: "Five",
        correctOption: "optionA"
    },

    {
        question: "How many planets are currently in the solar system ?",
        optionA: "Eleven",
        optionB: "Seven",
        optionC: "Nine",
        optionD: "Eight",
        correctOption: "optionD"
    },

    {
        question: "Which Planet is the hottest ?",
        optionA: "Jupitar",
        optionB: "Mercury",
        optionC: "Earth",
        optionD: "Venus",
        correctOption: "optionB"
    },

    {
        question: "where is the smallest bone in human body located?",
        optionA: "Toes",
        optionB: "Ears",
        optionC: "Fingers",
        optionD: "Nose",
        correctOption: "optionB"
    },

    {
        question: "How many hearts does an Octopus have ?",
        optionA: "One",
        optionB: "Two",
        optionC: "Three",
        optionD: "Four",
        correctOption: "optionC"
    },

    {
        question: "How many teeth does an adult human have ?",
        optionA: "28",
        optionB: "30",
        optionC: "32",
        optionD: "36",
        correctOption: "optionC"
    }

]
const play_quiz = document.querySelector(".play_quiz");
const quiz_menupage = document.querySelector(".quiz-menupage");
const quiz_end = document.querySelector(".quiz-end");
const check_answer = document.querySelector(".check_answer");

const optionk = document.querySelectorAll(".optionk");
const scores = document.querySelector(".scores");

     
     
// play
function play(){
    quiz_end.style.display="none";
    if(questionNumber>5)
    {
        end();
    }
    else{
        quiz_menupage.style.display="none";
    play_quiz.style.display="block";
    check_answer.style.color="aqua";
    let randomIndex = Math.floor(Math.random() * questions.length);
    let item = questions[randomIndex];
    document.querySelector(".question-number").innerHTML = `${questionNumber}`;
     document.getElementById("display-question").innerHTML = item.question;
    document.getElementById("option-one-label").innerHTML = item.optionA;
    document.getElementById("option-two-label").innerHTML = item.optionB;
    document.getElementById("option-three-label").innerHTML = item.optionC;
    document.getElementById("option-four-label").innerHTML = item.optionD;

    document.check_answer.onclick = function(){
        var radVal = document.check_answer.options.value;
        console.log(radVal);
        cakes=0;
        // console.log(item.correctOption);
        if(radVal===item.correctOption)
        {   cakes=1;
            
        }
        else
        {
            cakes=0;
        }
        let names = item.correctOption;
    }
    }


}

function check()
{
   if(cakes===1)
   {
    check_answer.style.color="green";
   
    playerScore++;
    console.log(playerScore);
    scores.innerHTML =`Score : ${playerScore}`;
   }
   else{
    check_answer.style.color="red";
    // document.querySelector('#'+ names).style.color="green";
    scores.innerHTML =`Score : ${playerScore}`;
    
}
questionNumber++;
setTimeout(()=>{
    play();
},1000)
}
let quiz_heading= document.querySelector(".quiz-heading");
let score_heading=document.querySelector(".score-heading")
function end()
{   
    
    play_quiz.style.display="none";
    quiz_menupage.style.display="none";
    quiz_end.style.display="block";
    questionNumber=1;
    
        score_heading.innerHTML=`Score : ${playerScore}`;
    
    
    
    
    playerScore=0;
    scores.innerHTML =`Score : ${playerScore}`;
}