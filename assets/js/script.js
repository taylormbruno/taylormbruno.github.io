$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
});


$("#simpleEats").on("click", function(){
    event.preventDefault();
    $("#modalBody0").empty();
    $("#exampleModalLabel").text("Simple Eats");
    $("#modalBody0").append("<img src='assets/images/simple-eats.png' class='modalImg'><p>This project was built collaboratively by three prospective coders at the UNCC Coding Bootcamp. This project allows a user to find recipes and filter results based on dietary restrictions, excluded ingredients, food intolerances, and types of food/drink. Users can add items from a recipe's ingredient list directly to a grocery list.</p><a href='https://github.com/kaciehatley/simple-eats' class='portLink' target='_blank'>Click here to visit the repository.</a>");
    $("#portModal").modal("show");
});

$("#weathDash").on("click", function(){
    event.preventDefault();
    $("#modalBody0").empty();
    $("#exampleModalLabel").text("Weather Dashboard");
    $("#modalBody0").append("<img src='assets/images/weathDash.png' class='modalImg'><p>This weather dashboard will allow the user to search for a city and displays the current weather conditions and a 5 day forecast. This project also will save the search history for up to 5 cities.</p><a href='https://github.com/taylormbruno/WeatherDashboard' class='portLink' target='_blank'>Click here to visit the repository.</a>");
    $("#portModal").modal("show");
});

$("#daySched").on("click", function(){
    event.preventDefault();
    $("#modalBody0").empty();
    $("#exampleModalLabel").text("Work Day Scheduler");
    $("#modalBody0").append("<img src='assets/images/passwordGen.png' class='modalImg'><p>This day scheduler allows the user to save important tasks to a specific time slot. The hour is color coded to represent whether the time is in the past, present, or future.</p><a href='https://github.com/taylormbruno/WorkDayScheduler' class='portLink' target='_blank'>Click here to visit the repository.</a>");
    $("#portModal").modal("show");
});

$("#codingQuiz").on("click", function(){
    event.preventDefault();
    $("#modalBody0").empty();
    $("#exampleModalLabel").text("Coding Quiz");
    $("#modalBody0").append("<img src='assets/images/codingQuizSS1.png' class='modalImg'><p>This coding quiz presents the user with the option to take three seperate quizes: one for HTML, one for CSS, and one for JavaScript. This project creates a score based on the amount of time left when the user completes the quiz. There are deductions in time if the user answers incorrectly. This project saves the high scores in local storage but still needs work to fix a few bugs.</p><a href='https://github.com/taylormbruno/codingQuiz' class='portLink' target='_blank'>Click here to visit the repository.</a>");
    $("#portModal").modal("show");
});

$("#passGen").on("click", function(){
    event.preventDefault();  
    $("#modalBody0").empty();
    $("#exampleModalLabel").text("Password Generator");
    $("#modalBody0").append("<img src='assets/images/passwordGen.png' class='modalImg'><p>This password generator allows the user to create a unique password based off their choosing of criteria. This project is still in progress with the changes of the alert to an on screen option.</p><a href='https://github.com/taylormbruno/passwordGenerator' class='portLink' target='_blank'>Click here to visit the repository.</a>");
    $("#portModal").modal("show");
});
