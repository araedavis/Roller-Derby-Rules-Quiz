//Create questions

var questions = [
  new Question("True or False: Team A’s Jammer is not on the track prior to the jam-starting    whistle. Team A is allowed to send a Jammer from its bench onto the track to play in the in-progress jam.", ["True", "False"], "False"),

  new Question("True or False: Skaters may legally re-enter the track in front of the opponent who forced them out of bounds, if the opponent went out of bounds at any point after the initiating block.", ["True", "False"], "True"),

  new Question("True or False: A cutting the track penalty will be issued for a skater who slides out of bounds and then back in bounds while still down.", ["True", "False"], "False"),

  new Question("Which part of the body is considered an illegal target zone?", ["Chest","Above the shoulder"], "Above the shoulder")
]

//Create quiz
var quiz = new Quiz(questions);


//Create UI
QuizUI.displayNext();
      
