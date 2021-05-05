class Bob {
    constructor(_x, _y, _d){
        var options={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2,
        }
        this.body=Matter.Bodies.circle(_x, _y, _d, options);
        this.d = _d;
        World.add(world, this.body)
        
    }

    display(){
        fill("red");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.d, this.d);
        
    }
}