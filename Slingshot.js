class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(myWorld, this.sling);
    }

    display(){
       
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("red");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
    
}