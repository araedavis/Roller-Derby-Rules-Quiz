//Create questions

var questions = [
  new Question("1. True or False: Team A’s Jammer is not on the track prior to the jam-starting whistle. Team A is allowed to send a Jammer from its bench onto the track to play in the in-progress jam.", ["True", "False"], "False"),

  new Question("2. True or False: Skaters may legally re-enter the track in front of the opponent who forced them out of bounds, if the opponent went out of bounds at any point after the initiating block.", ["True", "False"], "True"),

  new Question("3. True or False: A cutting the track penalty will be issued for a skater who slides out of bounds and then back in bounds while still down.", ["True", "False"], "False"),

  new Question("4. Which part of the body is considered an illegal target zone?", ["Chest","Upper arm", "Hips", "Above the shoulder"], "Above the shoulder"),

  new Question("5. How many timeouts does each team have per game?", ["One", "Two", "Three", "Zero"], "Three"),

  new Question("6. Which of the following is a penalty?", ["Failure to Yield", "Too Many Skaters on the Track", "Improper Uniform", "Removing Required Safety Equipment", "All of the above"], "All of the above"),

  new Question("7. True or False: When initiating a block, a skater must be in bounds but may pick up momentum for the block from out of bounds prior to returning to the track", ["True", "False"], "False"),

  new Question("8. True or False: Using an impenetrable wall to impede an opponent is illegal.", ["True", "False"], "True"),

  new Question("9. True or False: A skater who is lead jammer can call off the jam while being removed from play due to a penalty.", ["True", "False"], "False"),

  new Question("10. What is the maximum number of skaters from one team that can be seated in the penalty box at one time?", ["Three", "Four", "Five", "Two"], "Three"),

  new Question("11. What happens when a jammer who has not been declared lead jammer successfully calls off the jam?", ["A. The jammer receives an illegal procedure penalty", "B. The captain receives an insubordination penalty", "C. Nothing"], "A. The jammer receives an illegal procedure penalty"),

  new Question("12. What is the referee whistle signal for a penalty?", ["A. No whistle signal", "B. Two rapid whistle blasts", "C. One long whistle blast", "D. Two long whistle blasts"], "C. One long whistle blast"),

  new Question("13. At most, how many seconds can elapse after the completion of a timeout, barring additional timeouts before the next jam begins?", ["Fifteen", "Twenty", "Thirty", "Sixty"], "Thirty"),

  new Question("14. True or False: A Jammer must stay in bounds to remain lead jammer", ["True", "False"], "False"),

  new Question("15. Helmet covers may be retrieved while skating in which direction?", ["A. Clockwise", "B. Counterclockwise", "C. Neither", "D. A and B"], "B. Counterclockwise"),

  new Question("16. What is the result of the following scenario? <br> Downed skater re-entering the track causes an opposing skater to stumble but not fall or lose relative position.", ["Legal Play", "Penalty", "Expulsion"], "Legal Play"),

  new Question("17. True or False: When a jammer's helmet cover falls to the ground, the pivot can pick it up to become the active jammer.", ["True", "False"], "False"),

  new Question("18. True or False:<br> A skater, having gone out of bounds or straddling, who briefly and unintentionally completely returns to the track on one skate in their eofforsts to remain or return out of bounds is issued a cutting the track penalty", ["True", "False"], "True"),

  new Question("19. True or False: If a skater is illegally blocked outside of the engagement zone, they may legally counter-block.", ["True", "False"], "True"),

  new Question("20. A referee must give you a warning before issuing which types of penalties:", ["A. Failure to Return", "B. Multi-Player Blocks", "C. Use of Hands", "D. None of the above"], "D. None of the above"),

  new Question("21. What kind of penalty would be issued in the following scenario?<br>An upright skater re-enters the track from out of bounds in front of multiple in-bounds skaters during a no-pack scenario during a no pack scenario, resulting in having bettered their position.", ["Illegal Procedure", "Cutting the Track", "No Impact/No Penalty", "Thumbs Up"], "Cutting the Track"),

  new Question("22. True or False: Blockers who advance or chase the jammer out of the engagement zone are considered part of and belonging to point totals of the previous (just completed) scoring pass.", ["True", "False"], "True"),

  new Question("23. Which referees are allowed to expel a skater?", ["Any of the Referee staff", "Only the Jammer Referees", "Only the Head Referee", "The Jammer Referees and the Head Referee"], "Only the Head Referee"),

  new Question("24. If an official is not sure whether an action warrants a penalty or expulsion, it must be called as:", ["No Impact/No Penalty", "Penalty", "Explusion"], "No Impact/No Penalty"),

  new Question("25. Which of the following safety gear may be removed when seated in the penalty box?", ["Helmet", "Mouth guard", "Helmet and Mouth guard", "None of the Above"], "Mouth guard"),

  new Question("26. True or False: A penalized skater's teammates, managers and coaches may not at any time physically enter the designated penalty box area to communicate with the penalized skater", ["True", "False"], "True"),

  new Question("27. A jam gets called off for having too many skaters on the track, and the offending team did not field a pivot. As the referees are unsure who was the last blocker on the track, who gets the penalty?", ["Captain","Pivot","Closest Blocker to Referee who made the call","No one"], "Closest Blocker to Referee who made the call"),

  new Question("28. What Kind of penalty would be issued in the following scenario?<br>A skater initiates contact or engages an opponent before the first whistle, forcing the receiving opposing skater off balance, forward or sideways but does not cause them to lose their established starting position.", ["No Impact/No Penalty", "Illegal Procedure penalty", "Out of Play penalty"], "No Impact/No Penalty"),

  new Question("29. True or False: A blocker’s proximity to other blockers is measured by their fingertips.", ["True", "False"], "False"),

  new Question("30. Which of the following is an example of a multi-player block?", ["A. 'Bowling' with a teammate by pushing them into an opponent", "B. Preventing an opponent from passing between blockers by holding each other’s clothing", "C. Grabbing or holding a teammate’s arm while blocking"], "C. Grabbing or holding a teammate's arm while blocking"),

  new Question("31. True or False: If a skater jumps, it is illegal to hit them while they are in the air.", ["True", "False"], "True"),

  new Question("32. True or False: If a skater re-enters the track from out of bounds in front of an opposing skater, bettering their position, they will not recieve a cutting the track penalty as long as they yield the right of way", ["True", "False"], "False"),

  new Question("33. True or False: Standing during the last 10 seconds of a penalty is optional.", ["True", "False"], "False"),

  new Question("34. True or False: If a jammer false starts but yields advantage, they will not receive a penalty.", ["True", "False"], "True"),

  new Question("35. Gross misconduct includes which of the following?", ["A. Illegal interference in game play by skaters or support staff not involved in the jam", "B. Crashing into the penalty box and causing a chair to hit an NSO", "C.  Repetitive and excessive use of obscene language directed at an opponent", "D. All of the above"], "D. All of the above"),

  new Question("36. What kind of penalty would be issued in the following scenario?<br>A skater is called out on a penalty and refuses to leave the track.", ["A. Insubordination", "B. No penalty", "C. Expulsion"], "A. Insubordination"),

  new Question("37. Referees will whistle a jam dead if:", ["A.  There is an injured skater on the track who cannot get up", "B.  Green team’s jammer is called to the penalty box, and red team failed to field a jammer for that jam", "C.  Red team’s jammer has scored 50 points in the jam", "D. A and B only"], "D. A and B only"),

  new Question("38. True or False: After serving a penalty, a jammer who re-enters the track behind all in-play blockers but in front of the opposing jammer, receives a penalty.", ["True", "False"], "False"),

  new Question("39. True or False: A blocker who lines up for a jam but is knocked out of bounds just prior To the first whistle may not participate in that jam.", ["True", "False"], "False"),

  new Question("40. True or False: A skater who leaves the penalty box during a team timeout will receive an illegal procedure penalty.", ["True", "False"], "True"),

  new Question("41. Which of the following will result in a player fouling out of a game?", ["A. Accruing more than 5 trips to the penalty box in either period or more than 8 trips in a game", "B.  Accruing 7 trips to the penalty box in a game", "C. Accruing more than 5 trips to the penalty box in either period", "D. Using obscene or abusive language directed at an official"], "Accruing 7 trips to the penalty box in a game "),

  new Question("42. True or False: If a safety hazard on the track has forced a referee to whistle a jam dead after the time on the period clock has run out, but not before the jam clock has run out, the head referee may call for an additional jam.", ["True", "False"], "True"),
]

//Create quiz
var quiz = new Quiz(questions);


//Create UI
QuizUI.displayNext();
      
