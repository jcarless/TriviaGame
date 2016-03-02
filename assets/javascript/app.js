// GLOBAL VARIABLES
var gameTimer = 20;
var score = 0;
var questionNumber = 0;

var trivia = [
    {
        question: "Who is the Knicks all time leading scorer?",
       	answerOption1: "Patrick Ewing",
      	answerOption2: "Carmelo Anthony",
      	answerOption3: "Allen Houston",
      	answerOption4: "Walt Frazier",
      	correctAnswer: function(){return this.answerOption1},
        postAnswer: function(){
          $('#answerBlock').html('<h4>Patrick Ewing</h4>'+ '<br>' + '<h5>Patrick Ewing scored 23,665 points during his career with the Knicks.</h5>' + '<img src="assets/images/giphy.gif" />');
        }
      },

    {
        question: "Who is the Knicks all time leader in 3pt field goals?",
       	answerOption1: "Alan Houston",
      	answerOption2: "Latrel Sprewell",
      	answerOption3: "Phil Jackson",
      	answerOption4: "John Starks",
      	correctAnswer: function(){return this.answerOption4},
        postAnswer: function(){
          $('#answerBlock').html('<h4>John Starks</h4>'+ '<br>' + '<h5>John Starks hit 982 3 pointers during his career with the Knicks.</h5>' + '<img src="assets/images/tumblr_mpalg1LJLA1renuivo1_500.gif" />');
        }
      },

    {
        question: "What arena do the Knicks play in?",
       	answerOption1: "Madison Square Garden",
      	answerOption2: "Barclays Center",
      	answerOption3: "Prudencial Center",
      	answerOption4: "New York Coliseum",
      	correctAnswer: function(){return this.answerOption1},
        postAnswer: function(){
          $('#answerBlock').html('<h4>Madison Square Garden</h4>'+ '<br>' + '<h5>The current building is the 4th version of Madison Square Garden. The original opened in 1879. Todays MSG, located between 7th and 8th avenue in midtown manhatten opened in 1968.</h5>' + '<img src="assets/images/giphy%20(1).gif" />');
        }
      },

    {
        question: "How many championships have the Knicks won?",
       	answerOption1: "1",
      	answerOption2: "2",
      	answerOption3: "0",
      	answerOption4: "5",
      	correctAnswer: function(){return this.answerOption2},
        postAnswer: function(){
          $('#answerBlock').html('<h4>2</h4>'+ '<br>' + '<h5>The Knicks won championships in the 1969-70 and 1972-73 seasons.</h5>' + '<img src="assets/images/challenge_photo_knicks1970.jpg" />');
        }
      },

    {
        question: "What year did the Knicks last appear in the NBA finals?",
       	answerOption1: "2013",
      	answerOption2: "1999",
      	answerOption3: "1973",
      	answerOption4: "1993",
      	correctAnswer: function(){return this.answerOption2},
        postAnswer: function(){
          $('#answerBlock').html('<h4>1999</h4>'+ '<br>' + '<h5>As the 8th seed, the Knicks beat the top seeded Miami Heat on their way to the NBA finals.</h5>' + '<img src="assets/images/knicks-99-072615-getty-ftr_p227pk3nyaer14lhn3wys4onc.jpg" />');
        }
      },

    {
        question: "Who was the last Knick head coach to coach the all star game?",
       	answerOption1: "Red Holzman",
      	answerOption2: "Phil Jackson",
      	answerOption3: "Jeff Van Gundy",
      	answerOption4: "Pat Riley",
      	correctAnswer: function(){return this.answerOption3},
        postAnswer: function(){
          $('#answerBlock').html('<h4>Jeff Van Gundy</h4>'+ '<br>' + '<h5>Van Gundy coached the Eastern all stars in the 1999-00 season.</h5>' + '<img src="assets/images/giphy%20(2).gif" />');
        }
      },

    {
        question: "In 1992-93, the Knicks tied the franchize record with 60 wins in a single season. which other season did they win 60 games?",
       	answerOption1: "1950-51",
      	answerOption2: "1969-70",
      	answerOption3: "1991-92",
      	answerOption4: "1967-68",
      	correctAnswer: function(){return this.answerOption2},
        postAnswer: function(){
          $('#answerBlock').html('<h4>1969-70</h4>'+ '<br>' + '<h5>The Knicks won 60 games during the 1992-93 and 1969-70 seasons.</h5>' + '<img src="assets/images/lj-4-point-play-o.gif" />');
        }
      },

    {
        question: "Who is widley known as the Knicks biggest 'Celebrity Superfan'",
       	answerOption1: "Jay-Z",
      	answerOption2: "Michael Bloomberg",
      	answerOption3: "Jack Nicholson",
      	answerOption4: "Spike Lee",
      	correctAnswer: function(){return this.answerOption4},
        postAnswer: function(){
          $('#answerBlock').html('<h4>Spike Lee</h4>'+ '<br>' + '<h5>The film maker Spike Lee can be found at almost every Knick game cheering from celebrity row.</h5>' + '<img src="assets/images/giphy%20(4).gif" />');
        }
      },

    {
        question: "As of 2016, the Knicks are the most valuable NBA franchize. What is their estimated value?",
       	answerOption1: "$900 Million",
      	answerOption2: "$2 Billion",
      	answerOption3: "$1 Billion",
      	answerOption4: "$3 Billion",
      	correctAnswer: function(){return this.answerOption4},
        postAnswer: function(){
          $('#answerBlock').html('<h4>$3 Billion</h4>'+ '<br>' + '<h5>The Lakers come in second place at $2.7 Billion according to Statista.com</h5>' + '<img src="assets/images/450x348-alg_james-dolan-speaks_display_image.jpg" />');
        }
      },

    {
        question: "The Knicks are one of only two NBA franchizes to never do what?",
       	answerOption1: "Change Cities",
      	answerOption2: "Go Bankrupt",
      	answerOption3: "Both of These",
      	answerOption4: "None of These",
        correctAnswer: function(){return this.answerOption3},
        postAnswer: function(){
          $('#answerBlock').html('<h4>Both of These</h4>'+ '<br>' + '<h5>Both the Knicks and Boston Celtics are the only NBA franchizes to never change location or fold.</h5>' + '<img src="assets/images/1395157077000-RSI-USA-KNICKS-JACKSON.jpg" />');
        }
      }
  ];
    

// END OF GAME FUNCTION---------------------------
function endGame (){
  stop();
    $('#answerBlock').html("<h4>Final Score: " + score + "/100" + "</h4>");

    if (score <= 60) {
      $('#question').html("<h3>You're no fan at all!</h3>");
    }
    else if (score == 70) {
      $('#question').html("<h3>Casual Fan</h3>");
    }
    else if (score == 80 || score == 90) {
      $('#question').html("<h3>Diehard Fan</h3>");
    }
    else if (score == 100) {
      $('#question').html("<h3>Fanatic Fan</h3>");
    };

    
}

// PUSHES NEXT QUESTION-------------------
function nextQuestion (){
  clearInterval(showQuestion)
   if (questionNumber==10){
    endGame();
  }  
  else {
  $("#question").html("<h3>" + trivia[questionNumber].question + "</h3>");
  $("#answerBlock").html(
    

        
        "<div class='row'>" + 
          "<button type='button' class='btn btn-secondary btn-lg btn-block answer' id='answer1'>" + trivia[questionNumber].answerOption1 + "</button></div>" + 
        "<div class='row'>" + 
          "<button type='button' class='btn btn-secondary btn-lg btn-block answer' id='answer2'>" + trivia[questionNumber].answerOption2 + "</button></div>" + 
        "<div class='row'>" + 
          "<button type='button' class='btn btn-secondary btn-lg btn-block answer' id='answer3'>" + trivia[questionNumber].answerOption3 + "</button></div>" + 
        "<div class='row'>" + 
          "<button type='button' class='btn btn-secondary btn-lg btn-block answer'id='answer4'>" + trivia[questionNumber].answerOption4 + "</button></div>"
        );
  run();
  };
}

// ------------------ANSWER CHECKING-----------------
var checkAnswer1 = function(){
  stop();
  trivia[questionNumber].postAnswer();
  if (trivia[questionNumber].answerOption1 == trivia[questionNumber].correctAnswer()) {
    score= score + 10;
    
  }else{
  }
  postRun();

}

var checkAnswer2 = function(){
  stop();
  trivia[questionNumber].postAnswer();
  if (trivia[questionNumber].answerOption2 == trivia[questionNumber].correctAnswer()) {
    score= score + 10;
    
  }else{
  }
  postRun();

}

var checkAnswer3 = function(){
  stop();
  trivia[questionNumber].postAnswer();
  if (trivia[questionNumber].answerOption3 == trivia[questionNumber].correctAnswer()) {
    score= score + 10;
    
  }else{
  }
  postRun();

}

var checkAnswer4 = function(){
  stop();
  trivia[questionNumber].postAnswer();
  if (trivia[questionNumber].answerOption4 == trivia[questionNumber].correctAnswer()) {
    score= score + 10;
    
  }else{
  }
  postRun();

}
// ----------------------------------------------------------------
// TIMERS
function run(){
    gameTimer=20;
      counter = setInterval(increment, 1000);
    }
    function increment(){
      gameTimer--
      document.getElementById('timer').innerHTML = ('<h6>' + gameTimer + '</h6>')
      if (gameTimer === 0){
        stop();
        postRun();
        trivia[questionNumber].postAnswer();
      }
    }

function postRun (){
  showQuestion = setInterval(nextQuestion, 6000);
  questionNumber++;
}

function stop(){
  clearInterval(counter);
    }


// START GAME FUNCTION------------------------------------------
var startGame = function(){
      score = 0;
      questionNumber = 0;
      run();

   $("#question").html("<h3>" + trivia[questionNumber].question + "</h3>");
  $("#answerBlock").html(
    

        
        "<div class='row'>" + 
          "<button type='button' class='btn btn-secondary btn-lg btn-block answer' id='answer1'>" + trivia[questionNumber].answerOption1 + "</button></div>" + 
        "<div class='row'>" + 
          "<button type='button' class='btn btn-secondary btn-lg btn-block answer' id='answer2'>" + trivia[questionNumber].answerOption2 + "</button></div>" + 
        "<div class='row'>" + 
          "<button type='button' class='btn btn-secondary btn-lg btn-block answer' id='answer3'>" + trivia[questionNumber].answerOption3 + "</button></div>" + 
        "<div class='row'>" + 
          "<button type='button' class='btn btn-secondary btn-lg btn-block answer'id='answer4'>" + trivia[questionNumber].answerOption4 + "</button></div>"
        ); 
}


// ANSWER/START GAME BUTTONS-------------------------------------
$(document).on('click','#answer1', function(){
  checkAnswer1();
  })

$(document).on('click','#answer2', function(){
  checkAnswer2();
  })

$(document).on('click','#answer3', function(){
  checkAnswer3();
  })

$(document).on('click','#answer4', function(){
  checkAnswer4();
  })

$('#start').click(startGame)











// for (var i = 0; i <= triviaQuestions.length; i++) {
//   console.log(triviaQuestions[i]);
// };

// PROCESS


// create array of object questions for random selection

// start button
// 	starts timer
// 	loads random question with answer options

// identify which answer is correct
// 	add to score for correct answer
// 	push score depending on selection
// 	start timer to load next question

// after 10 question, show final score and tier

// try again button to run start game

// (tiers for fandom depending on score: not a fan, casual fan, diehard fan, fanatic)