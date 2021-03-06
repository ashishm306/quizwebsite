    const quizDB = [
        {
            question: "Q1: what is the full form of HTML?",
            a:"Hello to My lord",
            b:"Hey Text Markup Language",
            c:"HyperText Markup Language",
            d:"Hypertext Markup Language",
            ans:"ans4"
        },
        {
            question: "Q2: what is the full form of CSS?",
            a:"Cascading Style Sheets",
            b:"Cascading Style sheep",
            c:"Cartoon Style Sheets",
            d:"Cascading super sheets",
            ans:"ans1"
        },
        {
            question: "Q3: what is the full form of HTTP?",
            a:"Hyper Transfer Product",
            b:"Hyper Transfer Protocol",
            c:"Hey Transfer Protocol",
            d:"Hypertext Transfer Protocol",
            ans:"ans4"
        },
        {
            question: "Q1: what is the full form of JS?",
            a:"JavaScript",
            b:"JavaSuper",
            c:"Javascripts",
            d:"Jordenshoes",
            ans:"ans1"
        }
    ];
    // #to disable right click
//     document.addEventListener('contextmenu', event => event.preventDefault());  

    const question = document.querySelector('.question');
    const option1 = document.querySelector('#option1');
    const option2 = document.querySelector('#option2');
    const option3 = document.querySelector('#option3');
    const option4 = document.querySelector('#option4');

    const submit = document.querySelector('#submit') ;
    const answers = document.querySelectorAll(".answer");
    const showScore = document.querySelector('#showScore')

    let questionCount=0;
    let score=0;

    const loadQuestion = ()=> {
        const questionList = quizDB[questionCount]
        question.innerHTML=questionList.question;

        option1.innerHTML=questionList.a;
        option2.innerHTML=questionList.b;
        option3.innerHTML=questionList.c;
        option4.innerHTML=questionList.d;
    }

    loadQuestion();

    const getCheckAnswer = () => {
        let answer;
        answers.forEach((curAnsElem) => {
            if (curAnsElem.checked){
                answer = curAnsElem.id;
            }
    
        });
        return answer;
    
    };

    const deselectAll = () =>{
        answers.forEach((curAnsElem) => curAnsElem.checked = false);
    }

    submit.addEventListener('click',() => {
        const checkedAnswer = getCheckAnswer();
        console.log(checkedAnswer)
        if(checkedAnswer === quizDB[questionCount].ans){
            score++;
        };
        questionCount++;

        deselectAll();

        if(questionCount < quizDB.length ){
            loadQuestion();
        }else{
            showScore.innerHTML =  `
            <h3>You Scored ${score}/${quizDB.length} . </h3>
            <button class="btn" onclick="location.reload()"> Play Again </button>

            `;
            showScore.classList.remove('scoreArea');
        }

    });


 
        


