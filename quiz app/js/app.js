//Create questions

var questions = [
  new Question("1. True or False: Team A’s Jammer is not on the track prior to the jam-starting whistle. Team A is allowed to send a Jammer from its bench onto the track to play in the in-progress jam.", ["True", "False"], "False"),

  new Question("2. True or False: Skaters may legally re-enter the track in front of the opponent who forced them out of bounds, if the opponent went out of bounds at any point after the initiating block.", ["True", "False"], "True"),

  new Question("3. True or False: A cutting the track penalty will be issued for a skater who slides out of bounds and then back in bounds while still down.", ["True", "False"], "False"),

  new Question("4. If a blocker lines up with any part of their skate touching the ground behind the jammer line after the jam-starting whistle, the blocker:", ["A. Earns a False Start and must serve 30 seconds in the Penalty Box.", "B. Must skate clockwise until the Blocker has yielded to at least one Blocker from the opposing team.", "C. Can engage other Skaters immediately. Touching over the Jammer Line is considered No Impact/No Penalty.", "D. Must yield to all Skaters in proximity, including opposing Jammer, to avoid a False Start penalty."], "D. Must yield to all Skaters in proximity, including opposing Jammer, to avoid a False Start penalty."),

  new Question("5. Which part of the body is considered an illegal target zone?", ["Chest","Upper arm", "Hips", "Above the shoulder"], "Above the shoulder"),

  new Question("6. How many timeouts does each team have per game?", ["One", "Two", "Three", "Zero"], "Three"),

  new Question("7. Which of the following must a skater do when re-entering the track from the penalty box?", ["A. Re-enter at the front of the pack", "B. Skate onto the track immediately, regardless of where the pack is", "C. Re-enter behind all in-play Blockers", "D. None of the above"], "C. Re-enter behind all in-play Blockers"),

  new Question("8. Which of the following is a penalty?", ["Failure to Yield", "Too Many Skaters on the Track", "Improper Uniform", "Removing Required Safety Equipment", "All of the above"], "All of the above"),

  new Question("9. True or False: When initiating a block, a skater must be in bounds but may pick up momentum for the block from out of bounds prior to returning to the track", ["True", "False"], "False"),

  new Question("10. True or False: Using an impenetrable wall to impede an opponent is illegal.", ["True", "False"], "True"),

  new Question("11. When is a jammer considered part of the pack?", ["A. When the Jammer is within 20 feet (6 meters) of the pack (in play)", "When the Jammer is within 10 feet (3 meters) of the nearest pack Skater (in proximity)", "Never", "When the Jammer is in the pack, helping their Blocker with defense"], "Never"),

  new Question("12. True or False: A skater who is lead jammer can call off the jam while being removed from play due to a penalty.", ["True", "False"], "False"),

  new Question("13. What is the maximum number of skaters from one team that can be seated in the penalty box at one time?", ["Three", "Four", "Five", "Two"], "Three"),

  new Question("14. What happens when a jammer who has not been declared lead jammer successfully calls off the jam?", ["A. The jammer receives an illegal procedure penalty", "B. The captain receives an insubordination penalty", "C. Nothing"], "A. The jammer receives an illegal procedure penalty"),

  new Question("15. What is the referee whistle signal for a penalty?", ["A. No whistle signal", "B. Two rapid whistle blasts", "C. One long whistle blast", "D. Two long whistle blasts"], "C. One long whistle blast"),

  new Question("16. At most, how many seconds can elapse after the completion of a timeout, barring additional timeouts before the next jam begins?", ["Fifteen", "Twenty", "Thirty", "Sixty"], "Thirty"),

  new Question("17. True or False: A Jammer must stay in bounds to remain lead jammer", ["True", "False"], "False"),

  new Question("18. Helmet covers may be retrieved while skating in which direction?", ["A. Clockwise", "B. Counterclockwise", "C. Neither", "D. A and B"], "B. Counterclockwise"),

  new Question("19. What is the result of the following scenario? <br> Downed skater re-entering the track causes an opposing skater to stumble but not fall or lose relative position.", ["Legal Play", "Penalty", "Expulsion"], "Legal Play"),

  new Question("20. True or False: When a jammer's helmet cover falls to the ground, the pivot can pick it up to become the active jammer.", ["True", "False"], "False"),

  new Question("21. A legal star pass is completed when:", ["A. The helmet cover leaves the Jammer's helmet", "When the Jammer hands the helmet cover to the Pivot and the Pivot is in full possession", "After the Jammer passes or tosses the helmet cover to the Pivot and it is in the Pivot's hand, or when the Pivot picks up the Jammer helmet cover from the floor and puts it on their helmet", "When the Pivot is in possession of the Jammer helmet cover, in their hand or on their helmet, regardless of how it was transferred", "When the helmet cover is on the former Pivot's helmet with the stars visible"], "B. When the Jammer hands the helmet cover to the Pivot and the Pivot is in full possession"),

  new Question("22. True or False:<br> A skater, having gone out of bounds or straddling, who briefly and unintentionally completely returns to the track on one skate in their eofforsts to remain or return out of bounds is issued a cutting the track penalty", ["True", "False"], "True"),

  new Question("23. An airborne jammer jumping the apex hits an opponent's arm that is extended over the inside line. The contact causes the jammer to fall, and the opposing skater stays in bounds and upright. What penalties, if any, should be issued by officials?", ["A. The Jammer gets a penalty for initiating contact with both skates off the ground.", "B. The Blocker gets a penalty for blocking out of bounds.", "C. No penalty should be issued for either Skater - the illegal action was No Impact/No Penalty", "D. Both Skaters receive penalties"], "C. No penalty should be issued for either Skater - the illegal action was No Impact/No Penalty"),

  new Question("24. True or False: If a skater is illegally blocked outside of the engagement zone, they may legally counter-block.", ["True", "False"], "True"),

  new Question("25. A referee must give you a warning before issuing which types of penalties:", ["A. Failure to Return", "B. Multi-Player Blocks", "C. Use of Hands", "D. None of the above"], "D. None of the above"),

  new Question("26. What kind of penalty would be issued in the following scenario?<br>An upright skater re-enters the track from out of bounds in front of multiple in-bounds skaters during a no-pack scenario during a no pack scenario, resulting in having bettered their position.", ["Illegal Procedure", "Cutting the Track", "No Impact/No Penalty", "Thumbs Up"], "Cutting the Track"),

  new Question("27. True or False: Blockers who advance or chase the jammer out of the engagement zone are considered part of and belonging to point totals of the previous (just completed) scoring pass.", ["True", "False"], "True"),

  new Question("28. Which referees are allowed to expel a skater?", ["Any of the Referee staff", "Only the Jammer Referees", "Only the Head Referee", "The Jammer Referees and the Head Referee"], "Only the Head Referee"),

  new Question("29. If an official is not sure whether an action warrants a penalty or expulsion, it must be called as:", ["No Impact/No Penalty", "Penalty", "Explusion"], "No Impact/No Penalty"),

  new Question("30. Which of the following safety gear may be removed when seated in the penalty box?", ["Helmet", "Mouth guard", "Helmet and Mouth guard", "None of the Above"], "Mouth guard"),

  new Question("31. True or False: A penalized skater's teammates, managers and coaches may not at any time physically enter the designated penalty box area to communicate with the penalized skater", ["True", "False"], "True"),

  new Question("32. A jam gets called off for having too many skaters on the track, and the offending team did not field a pivot. As the referees are unsure who was the last blocker on the track, who gets the penalty?", ["Captain","Pivot","Closest Blocker to Referee who made the call","No one"], "Closest Blocker to Referee who made the call"),

  new Question("33. What Kind of penalty would be issued in the following scenario?<br>A skater initiates contact or engages an opponent before the first whistle, forcing the receiving opposing skater off balance, forward or sideways but does not cause them to lose their established starting position.", ["No Impact/No Penalty", "Illegal Procedure penalty", "Out of Play penalty"], "No Impact/No Penalty"),

  new Question("34. The engagement zone includes:", ["A. 20 feet (6 meters) behind the rearmost pack Skater and 20 feet (6 meters) in front of the foremost pack Skater", "B. 10 feet (3 meters) behind the rearmost pack Skater and 10 feet (3 meters) in front of the foremost pack Skater", "C. 20 feet (6 meters) in front of the foremost pack Skater and 10 feet (3 meters) behind the rearmost pack Skater"], "A. 20 feet (6 meters) behind the rearmost pack Skater and 20 feet (6 meters) in front of the foremost pack Skater"),

  new Question("35. Which of the following is a no pack situation?", ["A. 4 Green Blockers are more than 10 feet (3 meters) away from 4 Red Blockers", "B. 4 Green Blockers are more than 10 feet (3 meters) away from 3 Red Blockers, and 1 Red Blocker has been knocked out of bounds", "C. 3 Green Blockers and 1 Red Blocker are more than 10 feet (3 meters) from 3 Red Blockers and 1 Green Blocker", "D. All of the above"], "D. All of the above"),

  new Question("36. True or False: A blocker’s proximity to other blockers is measured by their fingertips.", ["True", "False"], "False"),

  new Question("37. For an in-bounds blocker to legally regain position in the pack after having fallen behind or recovering from a fall, a skater must:", ["A. Catch up to the back of the pack by skating within the track boundaries to be considered back in play", "B. Skate outside track boundaries to stay out of the way until they can easily get to the back of the pack", "C. Wait for the pack to come back around to enter from behind"], "A. A.  Catch up to the back of the pack by skating within the track boundaries to be considered back in play"),

  new Question("38. Which of the following is an example of a multi-player block?", ["A. 'Bowling' with a teammate by pushing them into an opponent", "B. Preventing an opponent from passing between blockers by holding each other’s clothing", "C. Grabbing or holding a teammate’s arm while blocking"], "C. Grabbing or holding a teammate's arm while blocking"),

  new Question("39. True or False: If a skater jumps, it is illegal to hit them while they are in the air.", ["True", "False"], "True"),

  new Question("40. True or False: If a skater re-enters the track from out of bounds in front of an opposing skater, bettering their position, they will not recieve a cutting the track penalty as long as they yield the right of way", ["True", "False"], "False"),

  new Question("41. True or False: Standing during the last 10 seconds of a penalty is optional.", ["True", "False"], "False"),

  new Question("42. True or False: If a jammer false starts but yields advantage, they will not receive a penalty.", ["True", "False"], "True"),

  new Question("43. Gross misconduct includes which of the following?", ["A. Illegal interference in game play by skaters or support staff not involved in the jam", "B. Crashing into the penalty box and causing a chair to hit an NSO", "C.  Repetitive and excessive use of obscene language directed at an opponent", "D. All of the above"], "D. All of the above"),

  new Question("44. What kind of penalty would be issued in the following scenario?<br>A skater is called out on a penalty and refuses to leave the track.", ["A. Insubordination", "B. No penalty", "C. Expulsion"], "A. Insubordination"),

  new Question("45. Referees will whistle a jam dead if:", ["A.  There is an injured skater on the track who cannot get up", "B.  Green team’s jammer is called to the penalty box, and red team failed to field a jammer for that jam", "C.  Red team’s jammer has scored 50 points in the jam", "D. A and B only"], "D. A and B only"),

  new Question("46. True or False: After serving a penalty, a jammer who re-enters the track behind all in-play blockers but in front of the opposing jammer, receives a penalty.", ["True", "False"], "False"),

  new Question("47. True or False: A blocker who lines up for a jam but is knocked out of bounds just prior To the first whistle may not participate in that jam.", ["True", "False"], "False"),

  new Question("48. True or False: A skater who leaves the penalty box during a team timeout will receive an illegal procedure penalty.", ["True", "False"], "True"),

  new Question("49. Which of the following will result in a player fouling out of a game?", ["A. Accruing more than 5 trips to the penalty box in either period or more than 8 trips in a game", "B.  Accruing 7 trips to the penalty box in a game", "C. Accruing more than 5 trips to the penalty box in either period", "D. Using obscene or abusive language directed at an official"], "Accruing 7 trips to the penalty box in a game "),

  new Question("50. True or False: If a safety hazard on the track has forced a referee to whistle a jam dead after the time on the period clock has run out, but not before the jam clock has run out, the head referee may call for an additional jam.", ["True", "False"], "True"),
]

//Create quiz
var quiz = new Quiz(questions);


//Create UI
QuizUI.displayNext();
      
