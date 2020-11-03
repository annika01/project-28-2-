class Stone{

    constructor(x,y,r){
    
    var options={
    isStatic: false,
    restitution: 0.2,
    friction:1,
    density:1.2
    
    }
    this.body= Bodies.circle (x,y,r,options)
    this.r= r
    this.image= loadImage("img/stone.png")
    World.add(world, this.body)
    
    }
     
    display(){
    var pos = this.body.position
    push ();
    translate(pos.x, pos.y )
    rotate(this.body.angle)
    imageMode(CENTER)
    ellipseMode(CENTER)
    image(this.image, 0,0,this.r*2, this.r*2)
    pop ();
    
    
    }
    
    
    }