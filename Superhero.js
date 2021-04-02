class Superhero {
    constructor(x, y, width, height){
        var options = {
            'friction': 0,
            'density': 1,
            'restitution': 0,
            isStatic: false
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/super.png");
        World.add(world, this.body)
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}