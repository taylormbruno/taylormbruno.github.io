// variables used in all function
var landingPage = document.getElementById("landingPage");
var initialPage = document.getElementById("enterInitial");
var scorePage = document.getElementById("scorePage");
var questPage = document.getElementById("questPage");

var scorePage = document.getElementById("scorePage");
var score = 0;

var quesCounter = 0;

var timeEl = document.getElementById("time");
var timer = 75;


// time interval for all quizes
function setTime() {
    var timerInterval = setInterval(function() {
        timer--;
        timeEl.textContent = "Time: " + timer;
        if(timer === 0) {
            clearInterval(timerInterval);
            getScores();
        }
    }, 1000);
}

//HTML Quiz functions
var htmlLastQues = htmlQuestions.length;
var htmlCurrentQ = htmlQuestions[quesCounter];
function htmlQuiz() {
    landingPage.setAttribute("style", "display:none;");
    initialPage.setAttribute("style", "display:none;");
    scorePage.setAttribute("style", "display:none;");
    questPage.setAttribute("style", "display:block;");
    
    setTime();

    $('#questPage').empty().append('<h2>' + htmlCurrentQ.title +'</h2>');

    if (quesCounter >= htmlLastQues) {
        questPage.setAttribute("display", "none;");
    }
    else {
        for (j=0; j < htmlCurrentQ.choices.length; j++) {
            $('#questPage').append('<button data-attribute="' + j + '" onclick="htmlAnswer()">' +  htmlCurrentQ.choices[j] + '</button> <br />');
        }
    }  
}

function htmlAnswer() {
    event.stopPropagation;
    console.log($(this.event.target).attr('data-attribute'));
    console.log(htmlCurrentQ.answer);
    if (parseInt($(this.event.target).attr('data-attribute')) == parseInt(htmlCurrentQ.answer)) {
        console.log('Correct!');
        $('#questPage').append('<h4>Correct answer!</h4>');
        quesCounter++;
        htmlCurrentQ = htmlQuestions[quesCounter];
        htmlQuiz();
    } else {
        console.log('Wrong!');
        $('#questPage').append('<h4>Incorrect answer! -15 seconds </h4>');      
        timer = (timer - 15);
        quesCounter++;
        htmlCurrentQ = htmlQuestions[quesCounter];
        htmlQuiz();
    }
}

// CSS Quiz functions
var cssLastQues = cssQuestions.length;
var cssCurrentQ = cssQuestions[quesCounter];

function cssQuiz() {
    landingPage.setAttribute("style", "display:none;");
    initialPage.setAttribute("style", "display:none;");
    scorePage.setAttribute("style", "display:none;");
    questPage.setAttribute("style", "display:block;");
    
    running = true;
    setTime();

    $('#questPage').empty().append('<h2>' + cssCurrentQ.title +'</h2>');

    if (quesCounter >= cssLastQues) {
        questPage.setAttribute("display", "none;");
    }
    else {
        for (j=0; j < cssCurrentQ.choices.length; j++) {
            $('#questPage').append('<button data-attribute="' + j + '" onclick="cssAnswer()">' +  cssCurrentQ.choices[j] + '</button> <br />');
        }
    } 

}

function cssAnswer() {
    console.log($(this.event.target).attr('data-attribute'));
    console.log(cssCurrentQ.answer)
    if (parseInt($(this.event.target).attr('data-attribute')) == parseInt(cssCurrentQ.answer)) {
        console.log('Correct!');
        $('#questPage').append('<h4>Correct answer!</h4>');
        quesCounter++;
        cssCurrentQ = cssQuestions[quesCounter];
        htmlQuiz();
    } else {
        console.log('Wrong!');
        $(questPage).append();
        var incorrectAnswer = document.createElement("h4");
        incorrectAnswer.textContent = "Incorrect answer!";
        questPage.append(incorrectAnswer);
        timer = (timer - 15);
        quesCounter++;
        cssCurrentQ = cssQuestions[quesCounter];
        cssQuiz();
    }
}

// JS Quiz functions
var jsLastQues = jsQuestions.length;
var jsCurrentQ = jsQuestions[quesCounter];

function jsQuiz() {
    landingPage.setAttribute("style", "display:none;");
    initialPage.setAttribute("style", "display:none;");
    scorePage.setAttribute("style", "display:none;");
    questPage.setAttribute("style", "display:block;");
    
    running = true;
    setTime();

    $('#questPage').empty().append('<h2>' + jsCurrentQ.title +'</h2>');

    if (quesCounter >= jsLastQues) {
        questPage.setAttribute("display", "none;");
    }
    else {
        for (j=0; j < jsCurrentQ.choices.length; j++) {
            $('#questPage').append('<button data-attribute="' + j + '" onclick="jsAnswer()">' +  jsCurrentQ.choices[j] + '</button> <br />');
        }
    } 
}

function jsAnswer() {
    console.log($(this.event.target).attr('data-attribute'));
    console.log(jsCurrentQ.answer)
    if (parseInt($(this.event.target).attr('data-attribute')) == parseInt(jsCurrentQ.answer)) {
        console.log('Correct!');
        $('#questPage').append('<h4>Correct answer!</h4>');
        quesCounter++;
        jsCurrentQ = jsQuestions[quesCounter];
        jsQuiz();
    } else {
        console.log('Wrong!');
        $(questPage).append();
        var incorrectAnswer = document.createElement("h4");
        incorrectAnswer.textContent = "Incorrect answer!";
        questPage.append(incorrectAnswer);
        timer = (timer - 15);
        quesCounter++;
        jsCurrentQ = jsQuestions[quesCounter];
        jsQuiz();
    }
}