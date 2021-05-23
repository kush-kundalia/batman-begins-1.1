class droplet{
    constructor(x, y ,r){
        const options = {
            restitution: 0.2,
            friction : 0.3,
            density :0.3 ,
            isStatic : false,
            
          };
    this.body = Matter.Bodies.circle(x,y,r,options);
    Matter.World.add(world , this.body);
    
}

get(){
    const pos = this.body.position;
	const angle = this.body.angle;
	this.r = 20;
    push();
    translate(pos.x , pos.y);
    rotate(angle);
    fill(25,22,80);
    circle(0, 0, this.r);
    pop();
}
}