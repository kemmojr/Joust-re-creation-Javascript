import { Player } from "../src/Player.js";
import { Rectagle } from "./Rectangle.js";
import { modal } from "./modal.js";

const leftArrow = 37;
const upArrow = 38;
const rightArrow = 39;
const downArrow = 40;

window.addEventListener('load', () => {
	modal();
});

var canvas = document.getElementById("gameCanvas"); //define the variable canvas which holds the variables stored in the gameCanvas id
		var context = canvas.getContext("2d"); //defines context - this is something which is used to draw to the canvas

		
		var joustBackground = document.createElement("img");
		joustBackground.src = "../img/joustBackground.png"

        //Player one object as player class
        const PlayerOne = new Player({
            playerNum: 1,
            rightSprite: '../img/player1Sprite1.png',
            leftSprite: '../img/player1Sprite2.png',
            x: 300,
            y: 600
        });

        const PlayerTwo = new Player({
            playerNum: 2,
            rightSprite: '../img/player2Sprite1.png',
            leftSprite: '../img/player2Sprite2.png',
            x: 700,
            y: 600
        });


		var rect = []
		rect[0] = new Rectagle({
			x: 0,
            y: 380, 
            topWidth: 225, 
            height: 30,
		});

        rect[0].sideWidth = rect[0].topWidth*(1/10);
        rect[0].bottomWidth = rect[0].topWidth - (rect[0].sideWidth*2);
        rect[0].topHeight = rect[0].height*(1/10);
        rect[0].sideHeight = rect[0].height - rect[0].topHeight;

		rect[0].generateHitboxes();
		
		//further defining aspects of the rectangle - basing them off of the original rectangle so that if I change the values found in the original rectangle then it will change the rest of the values accordingly

		rect[0].topRect = {
			"topLeftX" : rect[0].x, 
			"topLeftY" : rect[0].y, 
			"topRightX" : rect[0].x + rect[0].topWidth, 
			"topBottomLeftY" : rect[0].y + (1/2)*rect[0].height	
		};

		rect[0].leftSideRect = {
			"leftMiddleTopLeftX" : rect[0].x, 
			"leftMiddleTopY" : rect[0].y + rect[0].topHeight, 
			"leftMiddleTopRightX" : rect[0].x + rect[0].sideWidth, 
			"leftMiddleBottomY" : rect[0].y + rect[0].topHeight + rect[0].sideHeight
		};
		rect[0].rightSideRect = {
			"rightMiddleTopLeftX" : rect[0].x + rect[0].topWidth - rect[0].sideWidth, 
			"rightMiddleTopY" : rect[0].y + rect[0].topHeight, 
			"rightMiddleTopRightX" : rect[0].x + rect[0].topWidth, 
			"rightMiddleBottomY" : rect[0].y + rect[0].topHeight + rect[0].sideHeight
		};

		rect[0].bottomRect = {
			"bottomTopLeftX" : rect[0].x + rect[0].sideWidth, 
			"bottomTopLeftY" : rect[0].y + (rect[0].leftSideRect.leftMiddleBottomY - rect[0].leftSideRect.leftMiddleTopY), 
			"bottomTopRightX" : rect[0].x + rect[0].topWidth - rect[0].sideWidth, 
			"bottomBottomLeftY" : rect[0].y + rect[0].height
		};
		rect[1]= {
			"x" : 300 , "y" : 215, "topWidth" : 350, "height" : 30
		};
		//defining the rect[1] object which within it holds the propterties listed above
		rect[1].sideWidth = rect[1].topWidth*(1/10);
		rect[1].bottomWidth = rect[1].topWidth - (rect[1].sideWidth*2);
		rect[1].topHeight = rect[1].height*(1/10);
		rect[1].sideHeight = rect[1].height - rect[1].topHeight;
		//further defining aspects of the rectangle - basing them off of the original rectangle so that if I change the values found in the original rectangle then it will change the rest of the values accordingly

		rect[1].topRect = {
			"topLeftX" : rect[1].x, 
			"topLeftY" : rect[1].y, 
			"topRightX" : rect[1].x + rect[1].topWidth, 
			"topBottomLeftY" : rect[1].y + (1/2)*rect[1].height	
		};

		rect[1].leftSideRect = {
			"leftMiddleTopLeftX" : rect[1].x, 
			"leftMiddleTopY" : rect[1].y + rect[1].topHeight, 
			"leftMiddleTopRightX" : rect[1].x + rect[1].sideWidth, 
			"leftMiddleBottomY" : rect[1].y + rect[1].topHeight + rect[1].sideHeight
		};
		rect[1].rightSideRect = {
			"rightMiddleTopLeftX" : rect[1].x + rect[1].topWidth - rect[1].sideWidth, 
			"rightMiddleTopY" : rect[1].y + rect[1].topHeight, 
			"rightMiddleTopRightX" : rect[1].x + rect[1].topWidth, 
			"rightMiddleBottomY" : rect[1].y + rect[1].topHeight + rect[1].sideHeight
		};

		rect[1].bottomRect = {
			"bottomTopLeftX" : rect[1].x + rect[1].sideWidth, 
			"bottomTopLeftY" : rect[1].y + (rect[1].leftSideRect.leftMiddleBottomY - rect[1].leftSideRect.leftMiddleTopY), 
			"bottomTopRightX" : rect[1].x + rect[1].topWidth - rect[1].sideWidth, 
			"bottomBottomLeftY" : rect[1].y + rect[1].height
		};
		rect[2]= {
			"x" : 0 , "y" : 180, "topWidth" : 110, "height" : 30
		};
		//defining the rect[1] object which within it holds the propterties listed above
		rect[2].sideWidth = rect[2].topWidth*(1/10);
		rect[2].bottomWidth = rect[2].topWidth - (rect[2].sideWidth*2);
		rect[2].topHeight = rect[2].height*(1/10);
		rect[2].sideHeight = rect[2].height - rect[2].topHeight;
		//further defining aspects of the recta1gle - basing them off of the original recta1gle so that if I change the values found in the original recta1gle then it will change the rest of the values accordingly

		rect[2].topRect = {
			"topLeftX" : rect[2].x, 
			"topLeftY" : rect[2].y, 
			"topRightX" : rect[2].x + rect[2].topWidth, 
			"topBottomLeftY" : rect[2].y + (1/2)*rect[2].height	
		};

		rect[2].leftSideRect = {
			"leftMiddleTopLeftX" : rect[2].x, 
			"leftMiddleTopY" : rect[2].y + rect[2].topHeight, 
			"leftMiddleTopRightX" : rect[2].x + rect[2].sideWidth, 
			"leftMiddleBottomY" : rect[2].y + rect[2].topHeight + rect[2].sideHeight
		};
		rect[2].rightSideRect = {
			"rightMiddleTopLeftX" : rect[2].x + rect[2].topWidth - rect[2].sideWidth, 
			"rightMiddleTopY" : rect[2].y + rect[2].topHeight, 
			"rightMiddleTopRightX" : rect[2].x + rect[2].topWidth, 
			"rightMiddleBottomY" : rect[2].y + rect[2].topHeight + rect[2].sideHeight
		};

		rect[2].bottomRect = {
			"bottomTopLeftX" : rect[2].x + rect[2].sideWidth, 
			"bottomTopLeftY" : rect[2].y + (rect[2].leftSideRect.leftMiddleBottomY - rect[2].leftSideRect.leftMiddleTopY), 
			"bottomTopRightX" : rect[2].x + rect[2].topWidth - rect[2].sideWidth, 
			"bottomBottomLeftY" : rect[2].y + rect[2].height
		};
		rect[3]= {
			"x" : 940 , "y" : 380, "topWidth" : 225, "height" : 30
		};
		//defining the rect[2] object and the the 4 hitbox rectangles which are objets themselves which within it holds the propterties listed above
		rect[3].sideWidth = rect[3].topWidth*(1/10);
		rect[3].bottomWidth = rect[3].topWidth - (rect[3].sideWidth*2);
		rect[3].topHeight = rect[3].height*(1/10);
		rect[3].sideHeight = rect[3].height - rect[3].topHeight;
		//further defining aspects of the rectangle - basing them off of the original rectangle so that if I change the values found in the original rectangle then it will change the rest of the values accordingly

		rect[3].topRect = {
			"topLeftX" : rect[3].x, 
			"topLeftY" : rect[3].y, 
			"topRightX" : rect[3].x + rect[3].topWidth, 
			"topBottomLeftY" : rect[3].y + (1/2)*rect[3].height	
		};

		rect[3].leftSideRect = {
			"leftMiddleTopLeftX" : rect[3].x, 
			"leftMiddleTopY" : rect[3].y + rect[3].topHeight, 
			"leftMiddleTopRightX" : rect[3].x + rect[3].sideWidth, 
			"leftMiddleBottomY" : rect[3].y + rect[3].topHeight + rect[3].sideHeight
		};
		rect[3].rightSideRect = {
			"rightMiddleTopLeftX" : rect[3].x + rect[3].topWidth - rect[3].sideWidth, 
			"rightMiddleTopY" : rect[3].y + rect[3].topHeight, 
			"rightMiddleTopRightX" : rect[3].x + rect[3].topWidth, 
			"rightMiddleBottomY" : rect[3].y + rect[3].topHeight + rect[3].sideHeight
		};

		rect[3].bottomRect = {
			"bottomTopLeftX" : rect[3].x + rect[3].sideWidth, 
			"bottomTopLeftY" : rect[3].y + (rect[3].leftSideRect.leftMiddleBottomY - rect[3].leftSideRect.leftMiddleTopY), 
			"bottomTopRightX" : rect[3].x + rect[3].topWidth - rect[3].sideWidth, 
			"bottomBottomLeftY" : rect[3].y + rect[3].height
		};
		rect[4]= {
			"x" : 930 , "y" : 180, "topWidth" : 350, "height" : 30
		};
		//defining the rect[1] object which within it holds the propterties listed above
		rect[4].sideWidth = rect[4].topWidth*(1/10);
		rect[4].bottomWidth = rect[4].topWidth - (rect[4].sideWidth*2);
		rect[4].topHeight = rect[4].height*(1/10);
		rect[4].sideHeight = rect[4].height - rect[4].topHeight;
		//further defining aspects of the recta4gle - basing them off of the original recta4gle so that if I change the values found in the original recta4gle then it will change the rest of the values accordingly

		rect[4].topRect = {
			"topLeftX" : rect[4].x, 
			"topLeftY" : rect[4].y, 
			"topRightX" : rect[4].x + rect[4].topWidth, 
			"topBottomLeftY" : rect[4].y + (4/2)*rect[4].height	
		};

		rect[4].leftSideRect = {
			"leftMiddleTopLeftX" : rect[4].x, 
			"leftMiddleTopY" : rect[4].y + rect[4].topHeight, 
			"leftMiddleTopRightX" : rect[4].x + rect[4].sideWidth, 
			"leftMiddleBottomY" : rect[4].y + rect[4].topHeight + rect[4].sideHeight
		};
		rect[4].rightSideRect = {
			"rightMiddleTopLeftX" : rect[4].x + rect[4].topWidth - rect[4].sideWidth, 
			"rightMiddleTopY" : rect[4].y + rect[4].topHeight, 
			"rightMiddleTopRightX" : rect[4].x + rect[4].topWidth, 
			"rightMiddleBottomY" : rect[4].y + rect[4].topHeight + rect[4].sideHeight
		};

		rect[4].bottomRect = {
			"bottomTopLeftX" : rect[4].x + rect[4].sideWidth, 
			"bottomTopLeftY" : rect[4].y + (rect[4].leftSideRect.leftMiddleBottomY - rect[4].leftSideRect.leftMiddleTopY), 
			"bottomTopRightX" : rect[4].x + rect[4].topWidth - rect[4].sideWidth, 
			"bottomBottomLeftY" : rect[4].y + rect[4].height
		};
		rect[5]= {
			"x" : 740 , "y" : 355, "topWidth" : 200, "height" : 35
		};
		//defining the rect[1] object which within it holds the propterties listed above
		rect[5].sideWidth = rect[5].topWidth*(1/10);
		rect[5].bottomWidth = rect[5].topWidth - (rect[5].sideWidth*2);
		rect[5].topHeight = rect[5].height*(1/10);
		rect[5].sideHeight = rect[5].height - rect[5].topHeight;
		//further defining aspects of the recta1gle - basing them off of the original recta1gle so that if I change the values found in the original recta1gle then it will change the rest of the values accordingly

		rect[5].topRect = {
			"topLeftX" : rect[5].x, 
			"topLeftY" : rect[5].y, 
			"topRightX" : rect[5].x + rect[5].topWidth, 
			"topBottomLeftY" : rect[5].y + (1/2)*rect[5].height	
		};

		rect[5].leftSideRect = {
			"leftMiddleTopLeftX" : rect[5].x, 
			"leftMiddleTopY" : rect[5].y + rect[5].topHeight, 
			"leftMiddleTopRightX" : rect[5].x + rect[5].sideWidth, 
			"leftMiddleBottomY" : rect[5].y + rect[5].topHeight + rect[5].sideHeight
		};
		rect[5].rightSideRect = {
			"rightMiddleTopLeftX" : rect[5].x + rect[5].topWidth - rect[5].sideWidth, 
			"rightMiddleTopY" : rect[5].y + rect[5].topHeight, 
			"rightMiddleTopRightX" : rect[5].x + rect[5].topWidth, 
			"rightMiddleBottomY" : rect[5].y + rect[5].topHeight + rect[5].sideHeight
		};

		rect[5].bottomRect = {
			"bottomTopLeftX" : rect[5].x + rect[5].sideWidth, 
			"bottomTopLeftY" : rect[5].y + (rect[5].leftSideRect.leftMiddleBottomY - rect[5].leftSideRect.leftMiddleTopY), 
			"bottomTopRightX" : rect[5].x + rect[5].topWidth - rect[5].sideWidth, 
			"bottomBottomLeftY" : rect[5].y + rect[5].height
		};
		rect[6]= {
			"x" : 375 , "y" : 455, "topWidth" : 245, "height" : 30
		};
		//defining the rect[1] object which within it holds the propterties listed above
		rect[6].sideWidth = rect[6].topWidth*(1/10);
		rect[6].bottomWidth = rect[6].topWidth - (rect[6].sideWidth*2);
		rect[6].topHeight = rect[6].height*(1/10);
		rect[6].sideHeight = rect[6].height - rect[6].topHeight;
		//further defining aspects of the recta1gle - basing them off of the original recta1gle so that if I change the values found in the original recta1gle then it will change the rest of the values accordingly

		rect[6].topRect = {
			"topLeftX" : rect[6].x, 
			"topLeftY" : rect[6].y, 
			"topRightX" : rect[6].x + rect[6].topWidth, 
			"topBottomLeftY" : rect[6].y + (1/2)*rect[6].height	
		};

		rect[6].leftSideRect = {
			"leftMiddleTopLeftX" : rect[6].x, 
			"leftMiddleTopY" : rect[6].y + rect[6].topHeight, 
			"leftMiddleTopRightX" : rect[6].x + rect[6].sideWidth, 
			"leftMiddleBottomY" : rect[6].y + rect[6].topHeight + rect[6].sideHeight
		};
		rect[6].rightSideRect = {
			"rightMiddleTopLeftX" : rect[6].x + rect[6].topWidth - rect[6].sideWidth, 
			"rightMiddleTopY" : rect[6].y + rect[6].topHeight, 
			"rightMiddleTopRightX" : rect[6].x + rect[6].topWidth, 
			"rightMiddleBottomY" : rect[6].y + rect[6].topHeight + rect[6].sideHeight
		};

		rect[6].bottomRect = {
			"bottomTopLeftX" : rect[6].x + rect[6].sideWidth, 
			"bottomTopLeftY" : rect[6].y + (rect[6].leftSideRect.leftMiddleBottomY - rect[6].leftSideRect.leftMiddleTopY), 
			"bottomTopRightX" : rect[6].x + rect[6].topWidth - rect[6].sideWidth, 
			"bottomBottomLeftY" : rect[6].y + rect[6].height
		};
		//defining the 4 different hitboxes for the one rectangle. These hitboxes correspond to the 4 sides of the rectangle and are used in the collisions calculations. The reason for the 4 rectangles is because it means that I can have that when a point collides with, say, the leftSideRect then it will allways push the player backwards to the left.
		var spawnPoint = []
		spawnPoint[0] = {
			"x" : 465, "y" : 600
		}
		spawnPoint[1] = {
			"x" : 68, "y" : 308 
		}
		spawnPoint[2] = {
			"x" : 404, "y" : 132
		}
		spawnPoint[3] = {
			"x" : 848, "y" : 283 
		}
		var numberOfSpawnPoints = 4

		//This code defines all of the spawn points which are used and randomly selected to spawn the players back into the game when they die and respawn

		var grounded;
		//player 1 physics variables
		var time1 = 0;
		var initialVelocity1 = 0;

		//player2 physics variables
		var time2 = 0;
		var initialVelocity2 = 0;
		//defining more variables which are used in the physics calculations

		var i = setInterval(function(){
			time1 += 0.5;
			time2 += 0.5;
		},10)
		//a function which updates every 10 milliseconds which will add 0.5 to the timer - this is used in the physics calculations

		var clearPlayer1 = false
		var clearPlayer2 = false
		
		function update(){
			
			document.onkeydown = keydown;
			document.onkeyup = keyup;
			//defines the event when a key on the keyboard is pressed down then trigger the function keydown and vise versa for when a key is let go of for the keyup function

			function keydown(e){
				if (e.key == "d"){
					PlayerOne.speedX += PlayerOne.speedValue;
					PlayerOne.keyDown = "d";
					PlayerOne.moveDirectionX = "right";
					PlayerOne.lastMoveDirection = "x";
					//This if statement, which shares the same structure to all of the others found in this function, checks if the d key is being pressed and then change the player1's horizontal speed to make them move faster in the right direction. 
				}
				if (e.key == "a"){
					PlayerOne.speedX -= PlayerOne.speedValue;
					PlayerOne.keyDown = "a";
					PlayerOne.moveDirectionX = "left";
					PlayerOne.lastMoveDirection = "x";
					//Same as previously mentioned with the last if statement but for going left instead of right
				}
				if (e.key == "w"){
					if (PlayerOne.keyDown == ""){
						initialVelocity1 = PlayerOne.speedY*0.75 + PlayerOne.jumpValue;
						PlayerOne.keyDown = "w"
						time1 = 0
						//This if statement also checks if a key is down, in this case the r or flap key for player 1 and then it makes the player "jump" up with a portion of the players previous horizontal velocity added to the jump
					}					
				}
				//The rest of these if statements do the same thing as done with player 1 but for player 2 such as:
				if (e.key == 'ArrowRight'){
					PlayerTwo.speedX += PlayerTwo.speedValue;
					PlayerTwo.keyDown = "d";
					PlayerTwo.moveDirectionX = "right";
					PlayerTwo.lastMoveDirection = "x";
					//move right
				}
				if (e.key == 'ArrowLeft'){
					PlayerTwo.speedX -= PlayerTwo.speedValue;
					PlayerTwo.keyDown = "a";
					PlayerTwo.moveDirectionX = "left";
					PlayerTwo.lastMoveDirection = "x";
					//move left
				}
				if (e.key == 'ArrowUp'){
					if (PlayerTwo.keyDown == ""){
						initialVelocity2 = PlayerTwo.speedY*0.75 + PlayerTwo.jumpValue;
						PlayerTwo.keyDown = 'ArrowRight'
						time2 = 0
					}			
					//flap (jump)		

				}
			} 

			function keyup(e){
				if (e.key === "d" || e.key === "a" || e.key === "w" || e.key === "s" || e.key === 'ArrowRight' || e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === "k"){
					PlayerTwo.keyDown = "";
					PlayerOne.keyDown = "";
					//This function simply varifies whether or not the keys that have been previously pressed have been let go of, thus allowing the player to press them again for an effect
				}
			}

			//more player 1 variables
			PlayerOne.topLeftX = PlayerOne.x + (PlayerOne.width/(15/2));
			PlayerOne.topRightX = PlayerOne.x + PlayerOne.width - (PlayerOne.width/(15/2));
			PlayerOne.topLeftY = PlayerOne.y;
			PlayerOne.bottomLeftY = PlayerOne.y + PlayerOne.height;
			PlayerOne.middleY = PlayerOne.y + (1/2)*PlayerOne.height;
			PlayerOne.middleX = PlayerOne.x + (1/2)*PlayerOne.width;
			//This is further defining player 1 variables which will be used in the collisions function, these are all based off of the original player 1 variables and they change with them. They all relate to the things mentioned.

			//more player 2 variables
			PlayerTwo.topLeftX = PlayerTwo.x + (PlayerTwo.width/(15/2));
			PlayerTwo.topRightX = PlayerTwo.x + PlayerTwo.width - (PlayerTwo.width/(15/2));
			PlayerTwo.topLeftY = PlayerTwo.y;
			PlayerTwo.bottomLeftY = PlayerTwo.y + PlayerTwo.height;
			PlayerTwo.middleY = PlayerTwo.y + (1/2)*PlayerTwo.height;
			PlayerTwo.middleX = PlayerTwo.x + (1/2)*PlayerTwo.width;
			//These variables all relate to player 2 and are the same as the ones previously defined above for player 1

			

			function physics(){
				var gravity = -0.15
				//player 1 physics equation
				var velocityY1 = initialVelocity1 + (gravity*time1)
				PlayerOne.y -= velocityY1

				//player 2 physics equation
				var velocityY2 = initialVelocity2 + (gravity*time2)
				PlayerTwo.y -= velocityY2

				//These two gravity equations are the same for both player 1 and player 2 and they both simply take the players initial velocity (which changes with the jumping) and apply it and gravity multiplied by time to the players velocity in the Y direction which is then applied to the player's y values (with -= to apply it the the normal way because y values are reversed with javascript)
			}

			physics();

			grounded = false //This variable was just used for testing to make sure that collisions were working
			collisions();

			function collisions(){
				var bottomPlatformWidth = 105 //How high from the bottom of the canvas the bottom platform is
				if ((PlayerOne.y + PlayerOne.height) >= (canvas.height - bottomPlatformWidth)){
					PlayerOne.y = (canvas.height - bottomPlatformWidth) - PlayerOne.height;
					//check if the player is below the bottom platform and if they are then make them higher up to the point where they are not falling
				}
				if (PlayerOne.y < 0){
					PlayerOne.y = 0;
					initialVelocity1 = -initialVelocity1*0.5;
					time1 = 0
					//if the player is going up over the top of the screen make them bounce back down
				}

				if (PlayerOne.x > canvas.width){
					PlayerOne.x = 0;
					//if the player goes off of the side of the screen on the right side move them onto the other (left) side of the screen
				}
				if (PlayerOne.x < 0){
					PlayerOne.x = canvas.width;
					//same as previous but for the left hand side of the screen
				}

				//These next statements are the same as the previous but for player 2
				if ((PlayerTwo.y + PlayerTwo.height) >= (canvas.height - bottomPlatformWidth)){
					PlayerTwo.y = (canvas.height - bottomPlatformWidth) - PlayerTwo.height;
					//stop on bottom platform
				}
				if (PlayerTwo.y < 0){
					PlayerTwo.y = 0;
					initialVelocity2 = -initialVelocity2*0.5;
					time1 = 0
					//bounce on roof
				}

				if (PlayerTwo.x > canvas.width){
					PlayerTwo.x = 0;
					//move to left side of screen when off of the screen for the right side
				}
				if (PlayerTwo.x < 0){
					PlayerTwo.x = canvas.width;
					//same as previous but for left to right
				}


				player1Hitbox();
				player2Hitbox();
				function player1Hitbox(){
					for (i = 0; i <= 6;i++){
						//This for loop repeats for each of the different rectangles whic the player can collide with, minimising the amount of code neeeded for collisions because I dont need to rewrite it.

						//Top rect hitbox
						if (rect[i].topRect.topLeftX <= PlayerOne.middleX && 
							PlayerOne.middleX <= rect[i].topRect.topRightX && 
							rect[i].topRect.topLeftY <= PlayerOne.bottomLeftY && 
							PlayerOne.bottomLeftY <= rect[i].topRect.topBottomLeftY){
							PlayerOne.speedY = 0;
							PlayerOne.y = rect[i].topRect.topLeftY - PlayerOne.height - 0.1
							grounded = true;
							time1 = 0;
							initialVelocity1 = 0
							//If the middle of the player is colliding with the top of the rectangle with their bottom then make them stop falling and set the timer to 0
						}


						
						//middle left rect hitbox
						if (rect[i].leftSideRect.leftMiddleTopLeftX <= PlayerOne.topRightX && 
							PlayerOne.topRightX <= rect[i].leftSideRect.leftMiddleTopRightX && 
							rect[i].leftSideRect.leftMiddleTopY <= PlayerOne.middleY && 
							PlayerOne.middleY <= rect[i].leftSideRect.leftMiddleBottomY){
							PlayerOne.speedX = 0
							PlayerOne.x -= 10
							//if the player is colliding with the left hand side of the hitbox on the left side rect hitbox then push them backwards to the left and make them stop moving in that direction
						}

						//middle right rect hitbox
						if (rect[i].rightSideRect.rightMiddleTopLeftX <= PlayerOne.topLeftX && 
							PlayerOne.topLeftX <= rect[i].rightSideRect.rightMiddleTopRightX && 
							rect[i].rightSideRect.rightMiddleTopY <= PlayerOne.middleY && 
							PlayerOne.middleY <= rect[i].rightSideRect.rightMiddleBottomY){
							PlayerOne.speedX = 0
							PlayerOne.x += 10
							//same as mentioned above but for the right hand side hitbox
						
						}

						//bottom rect hitbox
						if (rect[i].bottomRect.bottomTopLeftX <= PlayerOne.middleX && 
							PlayerOne.middleX <= rect[i].bottomRect.bottomTopRightX && 
							rect[i].bottomRect.bottomTopLeftY <= PlayerOne.topLeftY && 
							PlayerOne.topLeftY <= rect[i].bottomRect.bottomBottomLeftY){
							PlayerOne.speedY = 0;
							initialVelocity1 = 0;
							PlayerOne.y = rect[i].bottomRect.bottomBottomLeftY + 10 
							//This checks to see if the player is colliding with the bottom of the box and if they are then push them downwards and make them stop moving upwards which is done by making the player initial velocity = 0

						}
					}

					if (PlayerTwo.topLeftX <= PlayerOne.topRightX &&
						PlayerOne.topLeftX <= PlayerTwo.topRightX &&
						PlayerTwo.topLeftY <= PlayerOne.bottomLeftY &&
						PlayerOne.topLeftY <= PlayerTwo.bottomLeftY){
						if (PlayerOne.y < PlayerTwo.y){
							PlayerTwo.x = 0;
							PlayerTwo.y = 605;
							PlayerTwo.speedX = 0;
							clearPlayer2 = true;
							var deathLog2 = 0;
							deathLog2 += 1;
							PlayerOne.score += 150
							var a = setInterval(function(){
								PlayerTwo.speedX = 0;
								initialVelocity2 = 0;

							},10);

							if (deathLog2 == 1){
								var y = setTimeout(function(){
									var x = Math.floor(Math.random()*numberOfSpawnPoints);
									PlayerTwo.x = spawnPoint[x].x;
									PlayerTwo.y = spawnPoint[x].y;
									clearPlayer2 = false;
									clearInterval(a);
								},3000)
							}
							
						}
						if (PlayerTwo.y < PlayerOne.y){
							clearPlayer1 = true
							PlayerOne.x = 0;
							PlayerOne.y = 605;
							PlayerOne.speedX = 0;
							var deathLog1 = 0;
							deathLog1 += 1;
							PlayerTwo.score += 150
							var a = setInterval(function(){
								PlayerOne.speedX = 0;
								initialVelocity1 = 0;

							},10);
							if (deathLog1 == 1){
								var y = setTimeout(function(){
									var x = Math.floor(Math.random()*numberOfSpawnPoints);
									PlayerOne.x = spawnPoint[x].x;
									PlayerOne.y = spawnPoint[x].y;
									clearPlayer1 = false;
									clearInterval(a);
								},3000)
							//This code checks to see if the two players are collding and if they are then eliminate the player with the lowest y value, removing them from the screen and giving the other player points for this
							}
						}
					}
				}

				function player2Hitbox(){
					//This function is the exact same as the player 1 hitbox however it doesn't check if the players are colldinng as that has already been done
					for (i=0; i<=6; i++){
						//Top rect hitbox
						if (rect[i].topRect.topLeftX <= PlayerTwo.middleX && 
							PlayerTwo.middleX <= rect[i].topRect.topRightX && 
							rect[i].topRect.topLeftY <= PlayerTwo.bottomLeftY && 
							PlayerTwo.bottomLeftY <= rect[i].topRect.topBottomLeftY){
							PlayerTwo.speedY = 0;
							PlayerTwo.y = rect[i].topRect.topLeftY - PlayerTwo.height - 0.1
							grounded = true;
							time2 = 0;
							initialVelocity2 = 0
						}


						
						//middle left rect hitbox
						if (rect[i].leftSideRect.leftMiddleTopLeftX <= PlayerTwo.topRightX && 
							PlayerTwo.topRightX <= rect[i].leftSideRect.leftMiddleTopRightX && 
							rect[i].leftSideRect.leftMiddleTopY <= PlayerTwo.middleY && 
							PlayerTwo.middleY <= rect[i].leftSideRect.leftMiddleBottomY){
							PlayerTwo.speedX = 0
							PlayerTwo.x -= 10
						}

						//middle right rect hitbox
						if (rect[i].rightSideRect.rightMiddleTopLeftX <= PlayerTwo.topLeftX && 
							PlayerTwo.topLeftX <= rect[i].rightSideRect.rightMiddleTopRightX && 
							rect[i].rightSideRect.rightMiddleTopY <= PlayerTwo.middleY && 
							PlayerTwo.middleY <= rect[i].rightSideRect.rightMiddleBottomY){
							PlayerTwo.speedX = 0
							PlayerTwo.x += 10
						
						}

						//bottom rect hitbox
						if (rect[i].bottomRect.bottomTopLeftX <= PlayerTwo.middleX && 
							PlayerTwo.middleX <= rect[i].bottomRect.bottomTopRightX && 
							rect[i].bottomRect.bottomTopLeftY <= PlayerTwo.topLeftY && 
							PlayerTwo.topLeftY <= rect[i].bottomRect.bottomBottomLeftY){
							PlayerTwo.speedY = 0;
							initialVelocity2 = 0;
							PlayerTwo.y = rect[i].bottomRect.bottomBottomLeftY + 10 //rect1.bottomRect.bottomLeftY + 0.1

						}
					}
				}
					



				

			}
			function intBetween() {
			    var maxSpeed = 3;
			    //player 1 max and min speed
			    if (PlayerOne.speedX<-(maxSpeed*PlayerOne.speedValue)){PlayerOne.speedX=-(maxSpeed*PlayerOne.speedValue)};
			    if (PlayerOne.speedX>maxSpeed*PlayerOne.speedValue){PlayerOne.speedX=maxSpeed*PlayerOne.speedValue};
			    //player 2 max and min speed
			    if (PlayerTwo.speedX<-(maxSpeed*PlayerTwo.speedValue)){PlayerTwo.speedX=-(maxSpeed*PlayerTwo.speedValue)};
			    if (PlayerTwo.speedX>maxSpeed*PlayerTwo.speedValue){PlayerTwo.speedX=maxSpeed*PlayerTwo.speedValue};

			    //This code just checks what speed the players are going and checks to make sure the player isn;t going too fast in the left or right direction and if they are then their speed is adjusted to meet the range that is allowed
			}
			intBetween();
		}

		function draw(){
			//This code deals with drawing to the screen
			

			context.fillStyle = 'rgb(0, 0, 0)';
			//context.fillRect(0, 0, canvas.width, canvas.height);
			//This was code that originally used to draw the background
			context.drawImage(joustBackground,0,0,canvas.width,canvas.height);
			//This is the replacement code for drawing the background, drawing the joust background that was taken from the original game

			//draw the player1 sprite
			if (clearPlayer1 == false){
				if (PlayerOne.moveDirectionX == "right"){
					context.drawImage(PlayerOne.rightSprite, PlayerOne.x, PlayerOne.y, PlayerOne.width, PlayerOne.height);
				}
				if (PlayerOne.moveDirectionX == "left"){
					context.drawImage(PlayerOne.leftSprite, PlayerOne.x, PlayerOne.y, PlayerOne.width, PlayerOne.height);
				}
				//This code checks what direction the player is moving and adjusts and draws their image to the screen in the direction that they are going
			}
				
			

			//draw the player 2 sprite
			if (clearPlayer2 == false){
				if (PlayerTwo.moveDirectionX == "right"){
					context.drawImage(PlayerTwo.rightSprite, PlayerTwo.x, PlayerTwo.y, PlayerTwo.width, PlayerTwo.height);
				}
				if (PlayerTwo.moveDirectionX == "left"){
					context.drawImage(PlayerTwo.leftSprite, PlayerTwo.x, PlayerTwo.y, PlayerTwo.width, PlayerTwo.height);
				}
				//This code draws the player 2 to the screen in the same way as done with player 1
			}

			context.fillStyle = 'rgb(255, 255, 255)'
			//context.fillRect(rect[0].x, rect[0].y, rect[0].topWidth, rect[0].height);


			PlayerOne.x += PlayerOne.speedX;
			PlayerOne.y += PlayerOne.speedY;


			PlayerTwo.x += PlayerTwo.speedX;
			PlayerTwo.y += PlayerTwo.speedY;
			
			//This code changes the player 1 and 2 x and y values based off of how they are meant to be changed by the speed (direction that they are going)

			context.font = "24px sans-serif"; 
			context.fillStyle = "rgb(255, 255, 255)"; 
			context.fillText("Player 1: " + PlayerOne.score, 300, 632);
			context.fillText("Player 2: " + PlayerTwo.score, 600, 632);
			//This code draws the player 1 and 2 scores to the screen
			
		}

		function GameLoop()
		{
			update();
			draw();
			
			requestAnimationFrame(GameLoop); // ask the browser to call the gameloop function again every frame, making all of the functions inside of it repeat every frame
		}
		
		GameLoop();
