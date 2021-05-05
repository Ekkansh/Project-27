class Rope {
    constructor(body1, point2){
        var options = {
            bodyA: body1,
            pointB: point2,
            stiffness: 0.04,
            length: 200,
        }
        this.pointB = point2
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        strokeWeight(8);
        stroke(82,38,15);
      //  line(bodyA.x-17, bodyA.y, pointB.x-10, pointB.y);
        //line(bodyA.x-17, bodyA.y, pointB.x+35, pointB.y);    
       }
}
