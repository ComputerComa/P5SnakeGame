function Snake(){
  this.x = 5*20;
  this.y = 5*20;
  this.xspeed = 1;
  this.yspeed = 0;
  this.currentDir = 1;
  /* Directions 
  UP -> 0
  LEFT - > 1
  DOWN -> 2
  RIGHT -> 3
  */
  this.tail = []
  this.tail.unshift(new bodySegment(this.x - 60,this.y,0,3))
  this.tail.unshift(new bodySegment(this.x - 40,this.y,0,3))
  this.tail.unshift(new bodySegment(this.x - 20,this.y,0,3))
  this.total = 10
  this.update = function() {
            var pID = this.CalculateBodyPiece(this.tail[0].dir,this.currentDir)
            this.tail.unshift(new bodySegment(this.x,this.y,pID,this.currentDir))

    while (this.tail.length > this.total){
        this.tail.pop()
    }
    



   
    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;
    this.x = int(constrain(this.x,0,width-scl))
    this.y = int(constrain(this.y,0,height-scl))
    this.eat(this.x,this.y)
    console.log(this.tail)

  }

  this.show = function(){
        fill(255)
    for (var i = 0; i < this.tail.length; i++){
         // rect(this.tail[i].x,this.tail[i].y,scl,scl)
         switch (this.tail[i].pid) {
            case 0:
                image(SnakeBodyMain,this.tail[i].x,this.tail[i].y,scl,scl)
                break
            case 1:
                image(SnakeBodyCorner1,this.tail[i].x,this.tail[i].y,scl,scl)  
                break;
            case 2:
                image(SnakeBodyCorner2,this.tail[i].x,this.tail[i].y,scl,scl)  
                break;
            case 3:
                image(SnakeBodyCorner3,this.tail[i].x,this.tail[i].y,scl,scl)  
                break;
            case 4:
                image(SnakeBodyCorner4,this.tail[i].x,this.tail[i].y,scl,scl)  
                break;
            default:
                break;
         }
       
    }
   // rect(this.x,this.y,scl,scl)

    switch (this.currentDir) {
        case 0:
            image(SnakeHeadUP,this.x,this.y,scl,scl)
            break;
        case 1:
            image(SnakeHeadRIGHT,this.x,this.y,scl,scl);
            break;
        case 2:
            image(SnakeHeadDOWN,this.x,this.y,scl,scl)
            break;
        case 3:
            image(SnakeHeadLEFT,this.x,this.y,scl,scl)
            break;
    }
   

  }

this.dir = function(d){
    this.currentDir = d
    switch (d) {
        case 0: //UP
            this.xspeed = 0;
            this.yspeed = -1;
            break;
        case 1: //RIGHT
            this.xspeed =1
            this.yspeed = 0
            break
        case 2: //DOWN
            this.xspeed = 0;
            this.yspeed = 1;
            break
        case 3: //LEFT
            this.xspeed = -1
            this.yspeed = 0;
            break;p
    }
}



    this.grow = function(){
        //this.total ++;
        chompSound.play()
    }

  
    

    this.eat = function(x,y){
        if (gamefood.checkEaten(x,y)){
            this.grow()
        }
    }

    this.CalculateBodyPiece = function(pDir,cDir){
        if (cDir == pDir){
            console.log(`CDIR ${cDir}, PDIR ${pDir} -> 0`)
            return 0
        } else 
        if ( cDir ==0 && pDir == 1){
            console.log(`CDIR ${cDir}, PDIR ${pDir} -> 4`)
            return 2
        }
        if ( cDir ==1 && pDir == 2){
            console.log(`CDIR ${cDir}, PDIR ${pDir} -> 4`)
            return 1
        }
        else {
        console.log(`CDIR ${cDir}, PDIR ${pDir} -> ?`)
        return 0 
        }



    }

}
