class Paper{
    constructor(x,y,r){
        var options = {
            density:1.2,
            restitution:0.3,
            friction:2,
            isStatic:false
        }
        this.x = x
        this.y = y
        this.r = r
        this.body = Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body)
        this.image = loadImage("paper.png")
    }

        display() {
    
        var paperpos = this.body.position;

        push()
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER)
       // ellipse(0,0,this.r, this.r);
        image(this.image,-50,-50, 100, 100);
        pop()
    }



    }
