function food(){
var cols = floor(width/scl)
var rows = floor(height/scl)
this.x = floor(random(cols)) * scl;
this.y = floor(random(rows)) * scl;
this.eaten = true;

this.spawnFood = function(){
var cols = floor(width/scl)
var rows = floor(height/scl)
this.x = floor(random(cols)) * scl;
this.y = floor(random(rows)) * scl;
}
this.showFood  = function(){
    fill(2550,0,0)
   // rect(this.x,this.y,scl,scl)
   image(foodImage,this.x,this.y,scl,scl)
    this.eaten = false
}

this.checkEaten = function(x,y){
    if (x == this.x && y == this.y){
        this.eaten = true
        return true
    } else 
    {
        return false
    }
}
this.update = function(){
    if (this.eaten == true){
        this.spawnFood()
        this.showFood()
    } else {
        this.showFood()
    }
}
}