var QuizUI = {
  displayNext: function () {
    if (quiz.hasEnded()) {
      this.displayScore();
    } else {
      this.displayQuestion();
      this.displayChoices();
      this.displayProgress();
    }
  },
  
  displayQuestion: function(){
    this.populateIdWithHTML("question", quiz.getCurrentQuestion().text);
  },
  
  displayChoices: function(){
    var choices = quiz.getCurrentQuestion().choices;
   //add the method to create each button 
    for(var i = 0; i < choices.length; i++){
      this.populateIdWithHTML("choice" + i, choices[i]);
      this.guessHandler("guess" + i, choices[i]);
    }
  },
  
  displayScore: function(){
    var gameOverHTML = '<h1>Game Over</h1>';
    gameOverHTML += '<h2>Your score is ' + quiz.score + '</h2>';
    this.populateIdWithHTML("quiz", gameOverHTML);
     
  },

//create a method that creates each button element and assigns it the id choicei

 /* createButtonwithID: function(){
    var button = document.createElement("button");
  }, */

  populateIdWithHTML: function(id, text){
    var element = document.getElementById(id);
    element.innerHTML = text;
  },
  
  guessHandler: function(id, guess){
    var button = document.getElementById(id);
    button.onclick = function() {
      quiz.guess(guess);
      QuizUI.displayNext();
    }
  },
  
  displayProgress: function(){
    var currentQuestionNumber = quiz.currentQuestionIndex + 1;
    this.populateIdWithHTML("progress", "Question " + currentQuestionNumber + " of " + quiz.questions.length);
  }

}

