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



class classBatte
{
    constructor()
    {
        this.init()
    }

    init()
    {
        this.x = 240;

        this.xs = 2;
    }

    move()
    {
        if(this.x < 40 || this.x > 479)
        {
            this.xs = this.xs * -1;
        }
        this.x = this.x + this.xs;

        document.getElementById("batte").style.left = (this.x - 40) + "px";
    }

    go()
    {
        this.move();
        this.run = setInterval("objBatte.move();",50);
    }


}



function createNewBatte()
{
    newBatte = document.createElement("div");
    newBatte.id = "batte";
    newBatte.className = "batte";
    newBatte.style.left = "240px";
    newBatte.style.top = "440px";
    document.getElementById("arene").appendChild(newBatte);
    
    
    objBatte = new classBatte;

    objBatte.go();

}


function createNewBalle()
{
    for(b=0;b<50;b++)
    {
        newBalle = document.createElement("div");
        newBalle.id = "balle"+b;
        newBalle.className = "balle";
        newBalle.style.left = "250 px";
        newBalle.style.top = "250 px";
        document.getElementById("arene").appendChild(newBalle);

    }

    objBalle = new Array(50);

    for(b=0;b<50;b++)
    {
        objBalle[b]= new classBalle(b);
    }

    for(i=0;i<50;i++)
    {
        setTimeout("objBalle["+i+"].go()",i*500);
    }
}

 

function init()
{
    createNewBalle();
    createNewBatte();  
    
}