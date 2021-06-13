//===============================================
//== BALLES =====================================
//===============================================

class classBall
{
    constructor(id)
    {
        this.name       = "balle";  
        this.id         = id ;

        this.isMoving   = false ;

        this.fixed      = true ;
        
        this.x          = 250;
        this.y          = 440;

        this.xs         = 1 ;
        this.ys         = 2 ;
    }

    createElement()
    {
        console.log("jeu.arene.balles["+this.id+"].createElement()");

        let balle = document.createElement("div");
        balle.className = "balle";
        balle.style.position = "absolute";
        balle.style.left = this.x + "px";
        balle.id = "balle" + this.id;
        balle.style.top = this.y + "px";
        document.getElementById("arene").appendChild(balle);
    }

    move()
    {
        if(this.x <7 || this.x > 513)
        {
            this.xs = this.xs * -1;
        }
        this.x = this.x + this.xs

        if(this.y < 7 || this.y > 513)
        {
            this.ys = this.ys * -1;
        }
        this.y = this.y + this.ys;

        document.getElementById("balle"+this.id).style.left = (this.x - 7) + "px";
        document.getElementById("balle"+this.id).style.top  = (this.y - 7) + "px";
    
       
    }

    moveTo(x,y)
    {
        
    }

    setOnClickEvent()
    {

    }

    onClickAction(id)
    {

    }

    reset()
    {

    }

    go()
    {
        setInterval("jeu.arene.balles["+this.id+"].move();",20);    
    } 

    stop()
    {

    }

}

  