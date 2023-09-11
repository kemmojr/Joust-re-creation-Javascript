export class Player {
    constructor({playerNum, rightSprite, leftSprite, x, y}) {
        this.rightSprite = document.createElement('img');
        this.rightSprite.src = rightSprite;
        
        this.leftSprite = document.createElement('img');
        this.leftSprite.src = leftSprite

        this.x = x;
        this.y = y;

        this.width = 90*0.6;
        this.height = 120*0.6;
        
        this.speedX = 0;
        this.speedY = 0;

        this.speedValue = 4;
        this.jumpValue = 4;
        
        this.keyDown = "";
        this.keyUp = " ";

        this.moveDirectionX = playerNum === 1 ? 'right' : 'left'; 
        this.moveDirectionY = "";
        this.lastMoveDirection = "";

        this.score = 0;
    }

}


var rightSprite = "./player1Sprite1.png";

var leftSprite = "./player1Sprite2.png";