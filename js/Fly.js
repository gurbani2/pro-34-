class Fly{
    constructor(bodyA , bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness : 0.5
        }
        
        this.fly = constraint.create(options)
        World.add(world , this.fly);
       }

 show(){
     var pos1 = this.fly.bodyA.position;
     var pos1 = this.fly.bodyB.position;
     stroke (0);
     strokeWeight (5);
     line (pos1.x , pos1.y , pos2.x , pos2.y);

 }      







}