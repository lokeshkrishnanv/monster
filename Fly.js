class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.0001,
            length: 10
        }
        this.pointB = pointB;
        this.fly = Constraint.create(options);
        World.add(world, this.fly);
    }

    throw(){
        this.fly.bodyA = null;
    }

    launch(){
        this.fly.bodyA = bodyA;
    }
}