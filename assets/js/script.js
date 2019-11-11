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
var end = false;

var isHtmlTrue = false;
var isCssTrue = false;
var isJsTrue = false;

// time interval for all quizes
$('#quizOptions').click( function(){
    timer = 75;
    var timerInterval = setInterval(function() {
      timer--;
       if (timer >= 0) {
          timeEl.textContent = "Time: " + timer;
       }
       if (end === true) {
        clearInterval(timerInterval);
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
        end = true;        
        isHtmlTrue = true;
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
        end = true;
        isCssTrue = true;
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
        end = true;
        isJsTrue = true;
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
var userHTML = { 
};
var userCSS = { 
};
var userJS = { 
};

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
            $('input[type="text"]').each(function(){
                var htmlID = $(this).attr('id');
                var hIdVal = $(this).val();
                localStorage.setItem(htmlID, hIdVal);
                console.log(hIdVal);
            });
            var htmlSc = scoreNum.attr('score');
            var hScVal = scoreNum.val();
            localStorage.setItem(htmlSc, hScVal);
            console.log(hScVal);

            highscorePage();
        });
    }
    else if (isCssTrue) {
        event.preventDefault(); 
        $('input[type="text"]').each(function(){
            var cssID = $(this).attr('id');
            var cIdVal = $(this).val();
            localStorage.setItem(cssID, cIdVal);   
        });  
        highscorePage();
    }
    else if (isJsTrue) {
        event.preventDefault(); 
        $('input[type="text"]').each(function(){
            var jsID = $(this).attr('id');
            var jIdVal = $(this).val();
            localStorage.setItem(jsID, jIdVal);   
        });
        highscorePage();
    }
}

function highscorePage() {
    landingPage.setAttribute("style", "display:none;");
    initialPage.setAttribute("style", "display:none;");
    scorePage.setAttribute("style", "display:block;");
    questPage.setAttribute("style", "display:none;");
    if (isHtmlTrue) {
    }
    else if (isCssTrue) {
    }
    else if (isJsTrue) {
    }

}