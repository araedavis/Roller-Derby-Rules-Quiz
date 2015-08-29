var QuizUI = {
  displayNext: function () {
    if (quiz.hasEnded()) {
      this.displayScore();
    } else {
      this.displayQuestion();
      this.CreateButtonsWithIds();
      this.displayChoices();
      this.displayProgress();
    }
  },
  
  displayQuestion: function(){
    this.populateIdWithHTML("question", quiz.getCurrentQuestion().text);
  },
  
  displayChoices: function(){
    var choices = quiz.getCurrentQuestion().choices;
    
    for(var i = 0; i < choices.length; i++){
      this.populateIdWithHTML("guess" + i, choices[i]);
      this.guessHandler("guess" + i, choices[i]);
    }
  },
  
  displayScore: function(){
    var gameOverHTML = '<h1>Game Over</h1>';
    gameOverHTML += '<h2>Your score is ' + quiz.score + '</h2>';
    this.populateIdWithHTML("quiz", gameOverHTML);
     
  },

//create a method that creates buttons relative to number of choices
  CreateButtonsWithIds: function(){
    var choices = quiz.getCurrentQuestion().choices;
    var list = document.getElementById("choices");
    list.innerHTML = '';
    for(var i = 0; i < choices.length; i++){
      var button = document.createElement("button");
      list.appendChild(button);
      button.setAttribute("id", "guess" + i)

    }
  },

  //New method - trying to hide or delete buttons from previous question
    HidePrevButtons: function(){
      var choiceDiv = document.getElementById("choices");
      choiceDiv.removeChild(button);
    },

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

