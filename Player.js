class Player {
    constructor( x , y ,  width , height , angle ) {
        this.x= x;
        this.y=y;
        this.width = width;
        this.height=height;
        this,angle=angle;
        this.player_image=loadImage("assets/player.png");
        this.player_base=loadImage("assets/base.png");
    }
    display(){
        push ()
        translate (this.y,this.x)
        rotate (this.angle)
        imageMode(CENTER)
        Image(this.player_image,0,0,this.width,this.height);
        pop();
        Image(this.player_base,70,20,200,200)
    }
}