class classBalle
{
    constructor(id)
    {
        this.id = id;
        this.init();
    }

    init()
    {
        this.x = 240;
        this.y = 500;

        this.xs = 2;
        this.ys = 3;
    }

    move()
    {
        if(this.x < 7 || this.x > 510)
        {
            this.xs = this.xs * -1;
        }
        this.x = this.x + this.xs;
        
        if(this.y < 7 || this.y > 510)
        {
            this.ys = this.ys * -1;
        }
        this.y = this.y + this.ys;
        
        document.getElementById("balle"+this.id).style.left = (this.x - 7) + "px";
        document.getElementById("balle"+this.id).style.top  = (this.y - 7) + "px";
    }

    go()
    {
        this.move();
        this.run = setInterval("objBalle["+this.id+"].move();",20);
    }
}


function createBall()
    {
    objBalle = new Array(10);
    
    for(nbr=0;nbr<10;nbr++)
    {
        objBalle[nbr]= new classBalle(nbr);
    }

}



function init()
{
    document.getElementById("batte").style.left = "200px";
    document.getElementById("batte").style.top = "420px";
    
    for(i=0;i<10;i++)
    {
        setTimeout("objBalle["+i+"].go()",i*500);
    }

}