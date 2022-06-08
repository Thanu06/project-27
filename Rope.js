class Rope{
    constructor(body1, body2,xOffset)
    {
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:xOffset,y:0}
        }
        this.rope = Constraint.create(options);
        this.xOffset = xOffset;
        World.add(world, this.rope);
    }

    display()
    {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        
        var Anchor1X=pointA.x
        var Anchor1Y=pointA.y

        var Anchor2X=pointB.x+this.xoffset
        var Anchor2Y=pointB.y

        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

        stroke("black");
        strokeWeight(3);
    }
    
}
