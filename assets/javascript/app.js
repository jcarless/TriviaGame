// GLOBAL VARIABLES
var gameTimer = 0;
var score = 0;

var triviaQuestions = ['trivia.trivia1', 'trivia.trivia2', 'trivia.trivia3', 'trivia.trivia4', 'trivia.trivia5', 'trivia.trivia6', 'trivia.trivia7', 'trivia.trivia8', 'trivia.trivia9', 'trivia.trivia10'];
// var randomTrivia = functiong(){
//   triviaQuestions[Math.floor(Math.random()*triviaQuestions.length)];
// };

var trivia = [
    {
        question: "Who is the Knicks all time leading scorer?",
       	answerOption1: "Patrick Ewing",
      	answerOption2: "Carmelo Anthony",
      	answerOption3: "Allen Houston",
      	answerOption4: "Walt Frazier",
      	correctAnswer: function(){return this.answerOption1},
        postAnswer: function(){
          $('#answerBlock').html('<h6>Patrick Ewing scored 23,665 points during his career with the Knicks.</h6>' + '<img src="assets/images/giphy.gif" />');
        }
      },

      // 'trivia2': {
      //   question: "Who is the Knicks all time leader in 3pt field goals?",
      //  	answerOption1: "Alan Houston",
      // 	answerOption2: "Latrel Sprewell",
      // 	answerOption3: "Phil Jackson",
      // 	answerOption4: "John Starks",
      // 	correctAnswer: this.answerOption4,
      //   postAnswer: function(){
      //     $('#answerBlock').html('<h6>John Starks hit 982 3 pointers during his career with the Knicks.</h6>' + '<img src="assets/images/tumblr_mpalg1LJLA1renuivo1_500.gif" />');
      //   }
      // },

      // 'trivia3': {
      //   question: "What arena do the Knicks play in?",
      //  	answerOption1: "Madison Square Garden",
      // 	answerOption2: "Barclays Center",
      // 	answerOption3: "Prudencial Center",
      // 	answerOption4: "New York Coliseum",
      // 	correctAnswer: this.answerOption1,
      //   postAnswer: function(){
      //     $('#answerBlock').html('<h6>The current building is the 4th version of Madison Square Garden. The original opened in 1879. Todays MSG, located between 7th and 8th avenue in midtown manhatten opened in 1968.</h6>' + '<img src="assets/images/giphy%20(1).gif" />');
      //   }
      // },

      // 'trivia4': {
      //   question: "How many championships have the Knicks won?",
      //  	answerOption1: "1",
      // 	answerOption2: "2",
      // 	answerOption3: "0",
      // 	answerOption4: "5",
      // 	correctAnswer: this.answerOption2,
      //   postAnswer: function(){
      //     $('#answerBlock').html('<h6>The Knicks won championships in the 1969-70 and 1972-73 seasons.</h6>' + '<img src="assets/images/challenge_photo_knicks1970.jpg" />');
      //   }
      // },

      // 'trivia5': {
      //   question: "What year did the Knicks last appear in the NBA finals?",
      //  	answerOption1: "2013",
      // 	answerOption2: "1999",
      // 	answerOption3: "1973",
      // 	answerOption4: "1993",
      // 	correctAnswer: this.answerOption2,
      //   postAnswer: function(){
      //     $('#answerBlock').html('<h6>As the 8th seed, the Knicks beat the top seeded Miami Heat on their way to the NBA finals.</h6>' + '<iframe width="420" height="315" src="https://www.youtube.com/embed/oiJJCnrCX3I?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
      //   }
      // },

      // 'trivia6': {
      //   question: "Who was the last Knick head coach to coach the all star game?",
      //  	answerOption1: "Red Holzman",
      // 	answerOption2: "Phil Jackson",
      // 	answerOption3: "Jeff Van Gundy",
      // 	answerOption4: "Pat Riley",
      // 	correctAnswer: this.answerOption3,
      //   postAnswer: function(){
      //     $('#answerBlock').html('<h6>Van Gundy coached the Eastern all stars in the 1999-00 season.</h6>' + '<img src="assets/images/giphy%20(2).gif" />');
      //   }
      // },

      // 'trivia7': {
      //   question: "In 1992-93, the Knicks tied the franchize record with 60 wins in a single season. which other season did they win 60 games?",
      //  	answerOption1: "1950-51",
      // 	answerOption2: "1969-70",
      // 	answerOption3: "1991-92",
      // 	answerOption4: "1967-68",
      // 	correctAnswer: this.answerOption2,
      //   postAnswer: function(){
      //     $('#answerBlock').html('<h6>The Knicks won 60 games during the 1992-93 and 1969-70 seasons.</h6>' + '<img src="assets/images/lj-4-point-play-o.gif />');
      //   }
      // },

      // 'trivia8': {
      //   question: "Who is widley known as the Knicks biggest 'Celebrity Superfan'",
      //  	answerOption1: "Jay-Z",
      // 	answerOption2: "Michael Bloomberg",
      // 	answerOption3: "Jack Nicholson",
      // 	answerOption4: "Spike Lee",
      // 	correctAnswer: this.answerOption4,
      //   postAnswer: function(){
      //     $('#answerBlock').html('<h6>The film maker Spike Lee can be found at almost every Knick game cheering from celebrity row.</h6>' + '<img src="assets/images/giphy%20(4).gif" />');
      //   }
      // },

      // 'trivia': {
      //   question: "As of 2016, the Knicks are the most valuable NBA franchize. What is their estimated value?",
      //  	answerOption1: "$900 Million",
      // 	answerOption2: "$2 Billion",
      // 	answerOption3: "$1 Billion",
      // 	answerOption4: "$3 Billion",
      // 	correctAnswer: this.answerOption4,
      //   postAnswer: function(){
      //     $('#answerBlock').html('<h6>The Lakers come in second place at $2.7 Billion according to Statista.com</h6>' + '<img src="assets/images/450x348-alg_james-dolan-speaks_display_image.jpg" />');
      //   }
      // },

      // 'trivia': {
      //   question: "The Knicks are one of only two NBA franchizes to never do what?",
      //  	answerOption1: "Change Cities",
      // 	answerOption2: "Go Bankrupt",
      // 	answerOption3: "Both of These",
      // 	answerOption4: "None of These",
      //   correctAnswer: this.answerOption3,
      //   postAnswer: function(){
      //     $('#answerBlock').html('<h6>Both the Knicks and Boston Celtics are the only NBA franchizes to never change location or fold.</h6>' + '<img src="assets/images/1395157077000-RSI-USA-KNICKS-JACKSON.jpg" />');
      //   }
      // }
  ];



// FUNCTIONS
console.log(trivia[0].question);
// console.log(trivia.trivia1.answerOption1);
// console.log(trivia.trivia1.correctAnswer());

// var startGame = function(){
//       gameTimer = 0;
//       score = 0;

//   for (var i = 0; i =< triviaQuestions.length; i++) {
//    $('#question').html(trivia.trivia[i].question);
//   $('#answer1').html(trivia.trivia[i].answerOption1);
//   $('#answer2').html(trivia.trivia[i].answerOption2);
//   $('#answer3').html(trivia.trivia[i].answerOption3);
//   $('#answer4').html(trivia.trivia[i].answerOption4);
//   };
  
// }

var postWin = function(){
  $('#answerBlock').html();
}

var postLoss = function(){
  $('#question').html(trivia.trivia1.correctAnswer);
  trivia.trivia1.postAnswer();
}

var checkAnswer = function(){
  if (trivia.trivia[0].answerOption1 == trivia.trivia[0].correctAnswer()) {
    alert('correct');
    score + 10;
    trivia.trivia[0].postAnswer();
  }else{
    alert('wrong');
    postLoss();
  };
}





$('#answer1').click(function(){
  checkAnswer();

  })

$('#answer2').click()

$('#answer3').click()

$('#answer4').click()



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