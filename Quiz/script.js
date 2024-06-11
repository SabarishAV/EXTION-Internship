history.pushState(null, null, location.href);
window.onpopstate = function () {
    history.go(1);
};

const questions = [
    {
        question: "Which of the following is a correct syntax to declare a variable in JavaScript?",
        answer: "let variableName;",
        options: [
            "variableName = value;",
            "variable variableName = value;",
            "let variableName;",
            "var variableName = value;"
        ]
    },
    {
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheets",
        options: [
            "Computer Style Sheets",
            "Colorful Style Sheets",
            "Creative Style Sheets",
            "Cascading Style Sheets"
        ]
    },
    {
        question: "Which of the following is not a programming language?",
        answer: "HTML",
        options: [
            "Python",
            "Java",
            "C++",
            "HTML"
        ]
    },
    {
        question: "What is the capital of France?",
        answer: "Paris",
        options: [
            "London",
            "Berlin",
            "Madrid",
            "Paris"
        ]
    },
    {
        question: "What does API stand for?",
        answer: "Application Programming Interface",
        options: [
            "Application Process Interface",
            "Automated Programming Interface",
            "Automated Process Interface",
            "Application Programming Interface"
        ]
    },
    {
        question: "Which of the following is not a JavaScript framework?",
        answer: "Bootstrap",
        options: [
            "React",
            "Angular",
            "Vue",
            "Bootstrap"
        ]
    },
    {
        question: "What is the output of the following code snippet? console.log(2 + '2' - 1);",
        answer: "21",
        options: [
            "3",
            "21",
            "22",
            "NaN"
        ]
    },
    {
        question: "Which company developed JavaScript?",
        answer: "Netscape",
        options: [
            "Microsoft",
            "Google",
            "Apple",
            "Netscape"
        ]
    },
    {
        question: "What does SQL stand for?",
        answer: "Structured Query Language",
        options: [
            "Structured Query List",
            "Simple Query Language",
            "Structured Question Language",
            "Structured Query Language"
        ]
    },
    {
        question: "Which data structure uses LIFO (Last In, First Out) order?",
        answer: "Stack",
        options: [
            "Queue",
            "Array",
            "Linked List",
            "Stack"
        ]
    },
    {
        question: "What does HTML stand for?",
        answer: "Hypertext Markup Language",
        options: [
            "Hypertext Markup Language",
            "Hyperlink and Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlink Transfer Markup Language"
        ]
    },
    {
        question: "In programming, what do we call a named block of code that can be executed whenever needed?",
        answer: "Function",
        options: [
            "Variable",
            "Object",
            "Function",
            "Class"
        ]
    },
    {
        question: "Which of the following is a relational database management system?",
        answer: "MySQL",
        options: [
            "MongoDB",
            "SQLite",
            "PostgreSQL",
            "MySQL"
        ]
    },
    {
        question: "What is the output of the following code snippet? console.log(typeof undefined);",
        answer: "undefined",
        options: [
            "undefined",
            "null",
            "object",
            "string"
        ]
    },
    {
        question: "Which of the following is a valid JavaScript function declaration?",
        answer: "function myFunction() {}",
        options: [
            "myFunction() {}",
            "function myFunction() {}",
            "def myFunction() {}",
            "myFunction = function() {}"
        ]
    },
    {
        question: "What does HTTP stand for?",
        answer: "Hypertext Transfer Protocol",
        options: [
            "Hypertext Transfer Protocol",
            "Hypertext Terminal Protocol",
            "Hypertext Translation Protocol",
            "Hypertext Transaction Protocol"
        ]
    },
    {
        question: "Which of the following is not a valid JavaScript variable name?",
        answer: "_123variable",
        options: [
            "myVariable",
            "_variable",
            "$variable",
            "_123variable"
        ]
    },
    {
        question: "Which sorting algorithm has the worst-case time complexity of O(n^2)?",
        answer: "Bubble Sort",
        options: [
            "Merge Sort",
            "Quick Sort",
            "Heap Sort",
            "Bubble Sort"
        ]
    },
    {
        question: "What is the output of the following code snippet? console.log(3 * '5');",
        answer: "15",
        options: [
            "15",
            "8",
            "NaN",
            "53"
        ]
    },
    {
        question: "Which of the following is an example of a front-end development framework?",
        answer: "React",
        options: [
            "Express",
            "Django",
            "Ruby on Rails",
            "React"
        ]
    },
    {
        question: "What does IDE stand for?",
        answer: "Integrated Development Environment",
        options: [
            "Interactive Development Environment",
            "Integrated Development Environment",
            "Internet Development Environment",
            "Internal Development Environment"
        ]
    },
    {
        question: "Which of the following is a valid CSS selector?",
        answer: ".myClass",
        options: [
            "#myId",
            "$myClass",
            ".myClass",
            "*myClass"
        ]
    },
    {
        question: "What is the output of the following code snippet? console.log(10 == '10');",
        answer: "true",
        options: [
            "true",
            "false",
            "undefined",
            "NaN"
        ]
    },
    {
        question: "What year was the Python programming language first released?",
        answer: "1991",
        options: [
            "1995",
            "2000",
            "1985",
            "1991"
        ]
    },
    {
        question: "What does JSON stand for?",
        answer: "JavaScript Object Notation",
        options: [
            "JavaScript Object Notation",
            "JavaScript Oriented Notation",
            "JavaScript Object Naming",
            "JavaScript Order Notation"
        ]
    },
    {
        question: "Which of the following is not a JavaScript data type?",
        answer: "Dictionary",
        options: [
            "Number",
            "String",
            "Boolean",
            "Dictionary"
        ]
    }
];


// start page 

function startTest(){
    let personName = document.getElementById("name-input").value;
    let radios = document.getElementsByName('gender');
    let isRadioSelected = false;
    radios.forEach((radio) => {
        if (radio.checked) {
            localStorage.setItem("gender",radio.alt)
            isRadioSelected = true;
        }
      });
      if(!personName || isRadioSelected==false){
        document.getElementById("field-mandatory").style.display = "block"
      }else{
        localStorage.setItem("Name",personName)
        let pageTracker = JSON.parse(localStorage.getItem('pageTracker'));
        pageTracker[0] = true;
        localStorage.setItem('pageTracker', JSON.stringify(pageTracker));
        window.location.href = "questions.html"
      }
}

var questionArray = new Array(10);
let answerArray = [];

window.onload = function() {

    if (window.location.pathname.includes("/start.html")){
        localStorage.setItem('pageTracker', JSON.stringify([false,false]));
    }

    if (window.location.pathname.includes("/questions.html")) {

        let pageTracker = JSON.parse(localStorage.getItem('pageTracker'));
        if(pageTracker && pageTracker[0] === true){
        }else{
            window.location.href = "start.html"
        }

        let startTime = 300;
        let min, sec;
        let intervalId = setInterval(() => {
          min = Math.floor(startTime / 60);
          sec = startTime % 60;
        //   console.log(`${min} : ${sec}`);
          document.getElementById("timer-min").textContent = `0${min}`
          if(sec<=9){
            sec = `0${sec}`
          }
          document.getElementById("timer-sec").textContent = sec
          startTime--;
          if (startTime <= 0) {
            const encryptedQuestionArray = btoa(JSON.stringify(questionArray));
            const encryptedAnswerArray = btoa(JSON.stringify(answerArray));
            window.location.href = `score.html?q=${encryptedQuestionArray}&a=${encryptedAnswerArray}`;
            // window.location.href = "score.html"
          clearInterval(intervalId);
          }
        }, 1000);

        // create a new array containing 10 random questions
        const selectedIndices = new Set();
        for (let i = 0; i < 10; i++) {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * questions.length);
            } while (selectedIndices.has(randomIndex));
                selectedIndices.add(randomIndex);
                questionArray[i] = questions[randomIndex];
                questionArray[i].options.sort(() => Math.random() - 0.5);
        }

        // questions
        let questionIndex = 0;
        changeQuestion(questionArray,questionIndex,answerArray)
        document.getElementById("next").addEventListener("click", ()=>{
            checkAnswer(answerArray)
            if(questionIndex == 9){
                let pageTracker = JSON.parse(localStorage.getItem('pageTracker'));
                pageTracker[1] = true
                localStorage.setItem('pageTracker', JSON.stringify(pageTracker));
                startTime = 0
            }
            questionIndex++;
            changeQuestion(questionArray,questionIndex,answerArray)
        })
        document.getElementById("prev").addEventListener("click", ()=>{
            checkAnswer(answerArray)
            questionIndex--;
            changeQuestion(questionArray,questionIndex,answerArray)
        })
    }

    if (window.location.pathname.includes("/score.html")){
        let pageTracker = JSON.parse(localStorage.getItem('pageTracker'));
        if(pageTracker && pageTracker[0] == true && pageTracker[1] == true){
            pageTracker = [false,false]
            localStorage.setItem('pageTracker', JSON.stringify(pageTracker));
        }else{
            window.location.href = "start.html"
        }
        const queryParams = new URLSearchParams(window.location.search);
        const encryptedQuestionArray = queryParams.get('q');
        const encryptedAnswerArray = queryParams.get('a');
        const questionArray = JSON.parse(atob(encryptedQuestionArray));
        const answerArray = JSON.parse(atob(encryptedAnswerArray));
        let index=0;
        let correctAnswer=0, wrongAnswer=0, unattendedAnswer=0;
        questionArray.forEach((question, index) => {
            if(!answerArray[index]){
                unattendedAnswer++;
            }else if(question.answer == answerArray[index]){
                correctAnswer++;
            }else if(question.answer != answerArray[index]){
                wrongAnswer++;
            }

            let questionAnsContainer = document.getElementById("qn-ans-container");
            let questionContainer = document.createElement("div")
            questionContainer.classList.add("question-container")

            let question_ = document.createElement("h4")
            question_.classList.add("question_")
            question_.textContent = `${index+1}. ${question.question}`

            let yourAnswer = document.createElement("p")
            yourAnswer.classList.add("your-answer")
            if(answerArray[index]===undefined){
                answerArray[index] = ""
            }
            yourAnswer.textContent = `Your Answer : ${answerArray[index]}`
            if(question.answer != answerArray[index]){
                yourAnswer.style.color = "red"
            }else if(question.answer == answerArray[index]){
                yourAnswer.style.color = "green"
            }
            

            let correctAns = document.createElement("p")
            correctAns.classList.add("correct-answer")
            correctAns.textContent = `Correct Answer : ${question.answer}`

            questionContainer.appendChild(question_)
            questionContainer.appendChild(yourAnswer)
            questionContainer.appendChild(correctAns)

            questionAnsContainer.appendChild(questionContainer)
        })
        let candidateName = localStorage.getItem('Name');
        document.getElementById("candidateName").textContent = candidateName+","
        document.getElementById("total-marks").textContent = correctAnswer*2
        document.getElementById("correct-ans").textContent = correctAnswer
        document.getElementById("wrong-ans").textContent = wrongAnswer
        document.getElementById("unattended").textContent = unattendedAnswer
        var ctx = document.getElementById('pieChart').getContext('2d');

// Define data for the pie chart
var data = {
    labels: ['Wrong Answers', 'Correct Answers', 'Unattended Answes'],
    datasets: [{
        data: [wrongAnswer, correctAnswer, unattendedAnswer],
        backgroundColor: [
            'red',
            'green',
            'gray'
        ]
    }]
};

// Create the pie chart
var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: data
});




    }
}

function changeQuestion(questionArray,qnNo,answerArray){
    // question passing to html
    for(let i=1;i<=4;i++){
        document.getElementById(`ans-${i}`).checked = false
    }
    document.getElementById("qn-no").textContent = qnNo+1
    document.getElementById("qn").textContent = questionArray[qnNo].question
    document.getElementById("ans1").textContent = questionArray[qnNo].options[0]
    document.getElementById("ans2").textContent = questionArray[qnNo].options[1]
    document.getElementById("ans3").textContent = questionArray[qnNo].options[2]
    document.getElementById("ans4").textContent = questionArray[qnNo].options[3]
    if(qnNo==0){
        document.getElementById("prev").style.display = "none"
    }else{
        document.getElementById("prev").style.display = "flex"
    }

    if(qnNo==9){
        document.getElementById("next").textContent = "Submit Answers"
    }else{
        document.getElementById("next").textContent = "Next"
    }
    placeAnswer(answerArray)
}

function checkAnswer(answerArray){
    // store the choice selected by user
    for(let i=1;i<=4;i++){
        if(document.getElementById(`ans-${i}`).checked){
            let qnNo = parseInt(document.getElementById("qn-no").textContent)
            answerArray[qnNo-1] = document.getElementById(`ans${i}`).textContent
        }
    }
}

function placeAnswer(answerArray){
    let ansArrIndex = parseInt(document.getElementById("qn-no").textContent)-1;
    if(answerArray[ansArrIndex]){
        for(let i=1;i<=4;i++){
            if(document.getElementById(`ans${i}`).textContent == answerArray[ansArrIndex]){
                document.getElementById(`ans-${i}`).checked = true
            }
        }
    }
}