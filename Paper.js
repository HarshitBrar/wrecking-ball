class Paper{
    constructor(x,y){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 3.2
        }
        this.body = Bodies.circle(x,y,30,options);
        

        World.add(myWorld,this.body);
    }
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0,0,30,30);
        pop()
    }
}