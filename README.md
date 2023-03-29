# -Milestone-1-Snake-Game

[Milestone Day 1:HTML,CSS,JavaScript]                                              
Brianna Palmer 

Snake Game

[Basic Steps before beginning:
1. Set up HTML structure on the page where the game will be played
2. Define the width and height of the number of cells to determine the square that the snake will move through.
3. Define the directions and the initial position of the snake
4. Create an array to store the coordinates of the snakes cells
5. Make a function that will draw the snake on to the game using the coordinates in the array 
6. Make a function that will update the position of the snake one cell at a time.
7. Create a handle user input for changing the direction of the snake.
8. Add a function to detect when the snake fails, and to help create the boundaries for those failures.
9. Add the food so the snake can eat to grow and my personal favorite so that the snake changes color when it eats
10. Create a high score screen to show the player how many points they gained.]


concept : 
The snake only grows when it eats the food, 
Do not hit the walls, 
Do not let the snake eat itself, 
Do not go backwards, 
Each time you fail the game gets faster.

the plan:
1.colors 
background - black 
border - light blue
snake - every time the snake eats, the snake will change to that food's color. Default color = light blue
food - (yellow,green,pink,purple,red)

2. steps 
Let’s start with HTML first and get some of the  basics down like the game title and the rules.I will also create an html file named “snake.html”. 

Then I will import a font type into my CSS to make the words that appear act more like a game (thinking about that arcade style font or monospace font)

For the javascript portion I will be using functions and I will be using a for loop to help build the length of the snake as well as how big I want the game grid to be. I will also use if/else statements to determine how slow and fast the snake will travel before and after it fails.

I will add an eventListener to get the arrows to move up,down,left,right. Then using automatic movement I will have each arrow stop and start over when they hit the wall using setTimeout.

I will then create a .grid in CSS to create that wall from the last step and this will help us to create that light blue border to help keep our snake inside. We will use the flex wrap property next to move the divs to the next line.

Let’s now label our “.snake” and our “.food” in css. These will both be separate since they are both class selectors. 

Let’s define all of the variables. Now in JavaScript we will do this by saying “let grid = document.querySelector(“grid”);”, I will do this for all of the variables that we have created.

Now that I have the variables and eventListener we want to create a createBoard function. This will help style and display the game.

I will then create a startGame function, as well as a moveOutcome function, then a moveSnake function, a checkForHits function, the eatFood function, and a replay function. 

After all of these functions are all setup I can then set up controls. To do this step I will be using function control and then an if/else statement.

Lastly, before I finish, let's organize the code. I will do this by doing “Shift + Option + F”.



