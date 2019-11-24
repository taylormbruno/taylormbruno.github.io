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
var userHTMLinit = [];
var userHTMLscore = [];
var userCSSinit = [];
var userCSSscore = [];
var userJSinit = [];
var userJSscore = [];

function getInitials() { // used in all functions
    scoreNum = timer;
    landingPage.setAttribute("style", "display:none;");
    initialPage.setAttribute("style", "display:block;");
    scorePage.setAttribute("style", "display:none;");
    questPage.setAttribute("style", "display:none;");
    $('#enterInitial').empty();
    $('#enterInitial').append("<h1>All done!</h1>");    
    $('#enterInitial').append("<h3>Your score is: " + scoreNum + ".</h3>");
    $('#enterInitial').append('<form id="initForm"><input type="text" name="Initials" id="initials" placeholder="Enter initials here"><button id="submit">Submit</button></form>');

    var initInput = document.getElementById("initials");
    var initForm = document.getElementById("initForm");

    if (isHtmlTrue === true) {
        localStorage.setItem("hUser", JSON.stringify(userHTMLinit));
        localStorage.setItem("hScore", JSON.stringify(userHTMLscore));
        initForm.addEventListener("submit", function(event){
            event.preventDefault(); 
            var htInit = initInput.value.trim();
            if (htInit === ""){
                return;
            }
            var htScore = scoreNum;

            userHTMLinit.push(htInit);
            userHTMLscore.push(htScore);

            localStorage.setItem("hUser", JSON.stringify(userHTMLinit));
            localStorage.setItem("hScore", JSON.stringify(userHTMLscore));

            console.log("Initials are: " + htInit);
            console.log("Score is: " + htScore);
            highscorePage();
        });
    }
    else if (isCssTrue === true) {
        localStorage.setItem("cUser", JSON.stringify(userHTMLinit));
        localStorage.setItem("cScore", JSON.stringify(userHTMLscore));
        initForm.addEventListener("submit", function(event){
            event.preventDefault(); 
            var csInit = initInput.value.trim();
            if (csInit === ""){
                return;
            }
            var csScore = scoreNum;

            userCSSinit.push(csInit);
            userCSSscore.push(csScore);

            localStorage.setItem("cUser", JSON.stringify(userCSSinit));
            localStorage.setItem("cScore", JSON.stringify(userCSSscore));

            console.log("Initials are: " + csInit);
            console.log("Score is: " + csScore);
            highscorePage();
        });
    }
    else if (isJsTrue === true) {
        localStorage.setItem("jUser", JSON.stringify(userJSinit));
        localStorage.setItem("jScore", JSON.stringify(userJSscore));
        initForm.addEventListener("submit", function(event){
            event.preventDefault(); 
            var jsInit = initInput.value.trim();
            if (jsInit === ""){
                return;
            }
            var jsScore = scoreNum;

            userJSinit.push(jsInit);
            userJSscore.push(jsScore);

            localStorage.setItem("jUser", JSON.stringify(userJSinit));
            localStorage.setItem("jScore", JSON.stringify(userJSscore));

            console.log("Initials are: " + userJSinit);
            console.log("Score is: " + userJSscore);
            highscorePage();
        });
    }
}

function highscorePage() {
    landingPage.setAttribute("style", "display:none;");
    initialPage.setAttribute("style", "display:none;");
    scorePage.setAttribute("style", "display:block;");
    questPage.setAttribute("style", "display:none;");
    if (isHtmlTrue === true) {
        var storedUserH = JSON.parse(localStorage.getItem("hUser"));
        var storedScoreH = JSON.parse(localStorage.getItem("hScore"));
        if ((storedUserH !== null) || (storedScoreH !== null)) {
            userHTMLinit = storedUserH;
            userHTMLscore = storedScoreH;
        }
        for (var i=0; i < userHTMLinit.length; i++) {
            storedUserH = JSON.parse(localStorage.getItem("hUser"));
            storedScoreH = JSON.parse(localStorage.getItem("hScore"));
            $("#htmlScores").append("<tr><td>" + userHTMLinit[i] + "</td><td>" + userHTMLscore[i] + "</td></tr>");
        }
    }
    else if (isCssTrue === true) {
        var storedUserC = JSON.parse(localStorage.getItem("cUser"));
        var storedScoreC = JSON.parse(localStorage.getItem("cScore"));
        if ((storedUserC !== null) || (storedScoreC !== null)) {
            userCSSinit = storedUserC;
            userCSSscore = storedScoreC;
        }
        for (var k=0; k < userCSSinit.length; k++) {
            storedUserC = JSON.parse(localStorage.getItem("cUser"));
            storedScoreC = JSON.parse(localStorage.getItem("cScore"));
            $("#cssScores").append("<tr><td>" + userCSSinit[k] + "</td><td>" + userCSSscore[k] + "</td></tr>");
        }
    }
    else if (isJsTrue === true) {
        var storedUserJ = JSON.parse(localStorage.getItem("jUser"));
        var storedScoreJ = JSON.parse(localStorage.getItem("jScore"));
        if ((storedUserJ !== null) || (storedScoreJ !== null)) {
            userJSinit = storedUserJ;
            userJSscore = storedScoreJ;
        }
        for (var m=0; m < userJSinit.length; m++) {
            storedUserJ = JSON.parse(localStorage.getItem("jUser"));
            storedScoreJ = JSON.parse(localStorage.getItem("jScore"));
            $("#jsScores").append("<tr><td>" + userJSinit[m] + "</td><td>" + userJSscore[m] + "</td></tr>");
        }
    }
}

$("#highscores").on("click", function() {
    // html quiz scores
    var storedUserH = JSON.parse(localStorage.getItem("hUser"));
    var storedScoreH = JSON.parse(localStorage.getItem("hScore"));
    if ((storedUserH !== null) || (storedScoreH !== null)) {
        userHTMLinit = storedUserH;
        userHTMLscore = storedScoreH;
    }
    for (var i=0; i < userHTMLinit.length; i++) {
        storedUserH = JSON.parse(localStorage.getItem("hUser"));
        storedScoreH = JSON.parse(localStorage.getItem("hScore"));
        $("#htmlScores").append("<tr><td>" + userHTMLinit[i] + "</td><td>" + userHTMLscore[i] + "</td></tr>");
    }
    // css quiz scores
    var storedUserC = JSON.parse(localStorage.getItem("cUser"));
    var storedScoreC = JSON.parse(localStorage.getItem("cScore"));
    if ((storedUserC !== null) || (storedScoreC !== null)) {
        userCSSinit = storedUserC;
        userCSSscore = storedScoreC;
    }
    for (var k=0; k < userCSSinit.length; k++) {
        storedUserC = JSON.parse(localStorage.getItem("cUser"));
        storedScoreC = JSON.parse(localStorage.getItem("cScore"));
        $("#cssScores").append("<tr><td>" + userCSSinit[k] + "</td><td>" + userCSSscore[k] + "</td></tr>");
    }
    // js quiz scores
    var storedUserJ = JSON.parse(localStorage.getItem("jUser"));
    var storedScoreJ = JSON.parse(localStorage.getItem("jScore"));
    if ((storedUserJ !== null) || (storedScoreJ !== null)) {
        userJSinit = storedUserJ;
        userJSscore = storedScoreJ;
    }
    for (var m=0; m < userJSinit.length; m++) {
        storedUserJ = JSON.parse(localStorage.getItem("jUser"));
        storedScoreJ = JSON.parse(localStorage.getItem("jScore"));
        $("#jsScores").append("<tr><td>" + userJSinit[m] + "</td><td>" + userJSscore[m] + "</td></tr>");
    }
})

// landing page reset click
function goHome() {
    landingPage.setAttribute("style", "display:block;");
    initialPage.setAttribute("style", "display:none;");
    scorePage.setAttribute("style", "display:none;");
    questPage.setAttribute("style", "display:none;");
    isHtmlTrue = false;
    isCssTrue = false;
    isJsTrue = false;
    quesCounter = 0;
}