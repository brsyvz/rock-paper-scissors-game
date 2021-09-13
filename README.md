Live: https://brsyvz.github.io/rock-paper-scissors-game/
### Contents:
1 - [About](#about)\
2 - [Game logic](#gl)\
3 - [Learning outcomes](#la)

---
<img src="https://user-images.githubusercontent.com/55483569/132996070-2395a763-39b0-40e3-9f32-0e233ddcfda3.png">
<h2 id="about">About</h2>

- This project is an implementation of a classic game known as "Rock Paper Scissors".

- In this game, you will be trying to beat a computer that makes a random pick.

- After clicking any of the circle images from the left side (player side), the game starts.
If you reach a score "5" you will win the game and the same counts for the computer side.
<br>
<h2 id="gl">Game Logic</h2>

#### Pseudocode:

1 - listen for click event on rock, paper, scissors icons.

1.1 - If the player clicks on any icons, get player's selection and assign it into a variable and call the "play" function.
  
1.2 - "play" function calls playRound function and checks if there is a winner.
  
1.3 - PlayRound function takes playerSelection and computerSelection to check which selection wins over other by using condition statements and increases player or computer score by one. Example: if(playerSelection === "paper" && computerSelection === "rock"); --> playerScore += 1;
  
2 - The game repeats the steps above until one side gets 5 points.

<br>
<img src="https://user-images.githubusercontent.com/55483569/132996075-3fde8803-45ea-49c2-9ed4-3ec11d99d36e.png">

<h2 id="la">Learning Outcomes</h2>

<b>Completing this project made me practice on some of the things which I learned from tutorials.</b>

- Using functions
- Calling function inside other function
- Assigning function call to the variable.
- Passing variables as a function parameter.
- Using of Math.random method on an array
- using setTimeout method.
- Manipulating HTML element's content and styles by using conditions.
- Event listeners.
- user-select:; property
- pointer-events:; property
- :nth-child() { } selector.

