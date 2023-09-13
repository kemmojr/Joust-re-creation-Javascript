export class Rectagle {
    constructor({x, y, topWidth, sideWidth, bottomWidth, topHeight, sideHeight, height}) {

        this.x = x;
        this.y = y;

        this.height = height;
        
        this.topWidth = 0;
        this.sideWidth = 0;
        this.bottomWidth = 0;
        this.topHeight = 0;
        this.sideHeight = 0;
    }

    generateHitboxes() {
        this.topRect = {
            topLeftX: this.x, 
            topLeftY: this.y, 
            topRightX: this.x + this.topWidth, 
            topBottomLeftY: this.y + (1/2)*this.height	
        };

        if (!this.sideWidth) {
            console.error('Side width not defined');
            return;
        } else if (!this.topHeight){
            console.error('Top Height not defined');
            return;
        } else if (!this.sideHeight){
            console.error('Side height not defined');
            return;
        }


        this.leftSideRect = {
            leftMiddleTopLeftX: this.x, 
            leftMiddleTopY: this.y + this.topHeight, 
            leftMiddleTopRightX: this.x + this.sideWidth, 
            leftMiddleBottomY: this.y + this.topHeight + this.sideHeight
        };


        this.rightSideRect = {
            rightMiddleTopLeftX: this.x + this.topWidth - this.sideWidth, 
            rightMiddleTopY: this.y + this.topHeight, 
            rightMiddleTopRightX: this.x + this.topWidth, 
            rightMiddleBottomY: this.y + this.topHeight + this.sideHeight
        };

        
        if (!this.topHeight){
            console.error('Top Height not defined');
            return;
        }
        

        this.bottomRect = {
            bottomTopLeftX: this.x + this.sideWidth, 
            bottomTopLeftY: this.y + (this.leftSideRect.leftMiddleBottomY - this.leftSideRect.leftMiddleTopY), 
            bottomTopRightX: this.x + this.topWidth - this.sideWidth, 
            bottomBottomLeftY: this.y + this.height
        };
    }
        
}