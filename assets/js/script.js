// variables used in all function
var landingPage = document.getElementById("landingPage");
var initialPage = document.getElementById("enterInitial");
var scorePage = document.getElementById("scorePage");
var questPage = document.getElementById("questPage");

var scorePage = document.getElementById("scorePage");
var scoreNum = 0;


var quesCounter = 0;

var timeEl = document.getElementById("time");
var timer = 75;

var isHtmlTrue = false;
var isCssTrue = false;
var isJsTrue = false;

// time interval for all quizes
$('#quizOptions').click( function(){
    timer = 75;
    setInterval(function() {
      timer--;
       if (timer >= 0) {
          timeEl.textContent = "Time: " + timer;
       }
      }, 1000);
 });

//HTML Quiz functions
var htmlLastQues = htmlQuestions.length;
var htmlCurrentQ = htmlQuestions[quesCounter];
function htmlQuiz() {
    landingPage.setAttribute("style", "display:none;");
    initialPage.setAttribute("style", "display:none;");
    scorePage.setAttribute("style", "display:none;");
    questPage.setAttribute("style", "display:block;");
    isHtmlTrue = false;
    isCssTrue = false;
    isJsTrue = false;
    if (quesCounter < 5) {
        $('#questPage').empty().append('<h2>' + htmlCurrentQ.title +'</h2>');
        for (j=0; j < htmlCurrentQ.choices.length; j++) {
            $('#questPage').append('<button data-attribute="' + j + '" onclick="htmlAnswer()">' +  htmlCurrentQ.choices[j] + '</button> <br />');
        }
    }  
    else if ((quesCounter >= htmlLastQues) || (timer === 0)) {
        isHtmlTrue = true;
        clearInterval(timer);
        getInitials();
        
    }
}

function htmlAnswer() {
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
    isHtmlTrue = false;
    isCssTrue = false;
    isJsTrue = false;
    if(quesCounter < 5) {
        $('#questPage').empty().append('<h2>' + cssCurrentQ.title +'</h2>');
        for (j=0; j < cssCurrentQ.choices.length; j++) {
            $('#questPage').append('<button data-attribute="' + j + '" onclick="cssAnswer()">' +  cssCurrentQ.choices[j] + '</button> <br />');
        }
    } 
    else if ((quesCounter >= cssLastQues) || (timer === 0)) {
        isCssTrue = true;
        clearInterval(timer);
        getInitials();
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
        cssQuiz();
    } else {
        console.log('Wrong!');
        $('#questPage').append('<h4>Incorrect answer! -15 seconds </h4>');
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
    isHtmlTrue = false;
    isCssTrue = false;
    isJsTrue = false;
    if (quesCounter < 5) {
        $('#questPage').empty().append('<h2>' + jsCurrentQ.title +'</h2>');
        for (j=0; j < jsCurrentQ.choices.length; j++) {
            $('#questPage').append('<button data-attribute="' + j + '" onclick="jsAnswer()">' +  jsCurrentQ.choices[j] + '</button> <br />');
        }
    } 
    else if ((quesCounter >= jsLastQues) || (timer === 0)) {
        isJsTrue = true;
        clearInterval(timer);
        getInitials();
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
        $('#questPage').append('<h4>Incorrect answer! -15 seconds </h4>');
        timer = (timer - 15);
        quesCounter++;
        jsCurrentQ = jsQuestions[quesCounter];
        jsQuiz();
    }
}


//Functions for Initials and Highscores
var userHTML = [{ 
    userIn: initInput.nodeValue.trim(), 
    userSc: scoreNum, 
}];
var userCSS = [{ 
    userIn: initInput.nodeValue.trim(), 
    userSc: scoreNum, 
}];
var userJS = [{ 
    userIn: initInput.nodeValue.trim(), 
    userSc: scoreNum,
}];

var initInput = document.getElementById("initials");

function getInitials() {
    scoreNum = timer;
    landingPage.setAttribute("style", "display:none;");
    initialPage.setAttribute("style", "display:block;");
    scorePage.setAttribute("style", "display:none;");
    questPage.setAttribute("style", "display:none;");
    $('#enterInitial').append("<h1>All done!</h1>");
    $('#enterInitial').append("<h3>Your score is: " + scoreNum + ".</h4>");
    $('#enterInitial').append('<input type="text" name="Initials" id="initials" placeholder="Enter initials here"><button id="submit">Submit</button>');

    console.log("HTML is: " + isHtmlTrue);
    console.log("CSS is: " + isCssTrue);
    console.log("JS is: " + isJsTrue);
    
    if (isHtmlTrue) {
        $("#submit").on("click", function(event){
            event.preventDefault(); 
            localStorage.setItem("userHTML", JSON.stringify(userHTML));
            console.log(userHTML);
            highscorePage();
        });
    }
    else if (isCssTrue) {
        localStorage.setItem("initials", JSON.stringify(userInfoCSS));
        localStorage.setItem("score", JSON.stringify(userInfoCSS));
        highscorePage();
    }
    else if (isJsTrue) {
        localStorage.setItem("initials", JSON.stringify(userInfoJS));
        localStorage.setItem("score", JSON.stringify(userInfoJS));
        highscorePage();
    }
}

function highscorePage() {
    landingPage.setAttribute("style", "display:none;");
    initialPage.setAttribute("style", "display:none;");
    scorePage.setAttribute("style", "display:block;");
    questPage.setAttribute("style", "display:none;");
    if (isHtmlTrue) {
        $("#htmlScores").append('<tr><td>' + userHTML.userIn + '</td><td>' + userHTML.userSc + '</td></tr>');
    }
    else if (isCssTrue) {
        
    }
    else if (isJsTrue) {
    
    }

}