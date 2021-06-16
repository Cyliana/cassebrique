//===============================================
//== BALLES =====================================
//===============================================

class classBall
{
    name;
    id;
    isMoving;
    fixed;
    xs;
    ys;
    i;
    constructor(id)
    {
        this.name       = "balle";  
        this.id         = id ;

        this.isMoving   = false ;

        this.fixed      = true ;
        
        this.x          = 250;
        this.y          = 445;

        this.xs         = 1 ;
        this.ys         = 2 ;
    }

    createElement()
    {
        console.log("jeu.arene.balles["+this.id+"].createElement()");

        let balle = document.createElement("div");
        balle.id = "balle" + this.id;
        balle.className = "balle";
        balle.style.position = "absolute";
        balle.style.left = this.x + "px";
        balle.style.top = this.y + "px";
        document.getElementById("arene").appendChild(balle);
    }

    move()
    {

        if(this.isMoving == false)
        {
            this.isMoving = true;

                if(this.x < 7 || this.x > 513)
                {
                    this.xs = this.xs * -1;
                }
                this.x = this.x + this.xs;

                if(this.y < 7 || this.y > 513)
                {
                    this.ys = this.ys * -1;
                }

            this.y = this.y + this.ys; 

            this.moveTo(this.x, this.y);

            this.isMoving = false;


                if(this.y > 450 && this.x > jeu.arene.batte.x1 && this.x < jeu.arene.batte.x1 + 80)
                {
                    this.ys = this.ys * - 1 ;
                }
            

//== COLLISIONS AVEC LES BRIQUES ========================================================
            
                for( let i = 0 ; i < 234; i++)
                {
                    if(( this.x > jeu.arene.mur.briques[i].x1 && this.x < jeu.arene.mur.briques[i].x2) && (this.y > jeu.arene.mur.briques[i].y1 && this.y < jeu.arene.mur.briques[i].y2))
                    {
                        this.ys = this.ys * - 1 ;
                    }
                }
            
        }
    }

    moveTo(x,y)
    {
        document.getElementById("balle"+this.id).style.left = (this.x - 7) + "px";
        document.getElementById("balle"+this.id).style.top  = (this.y - 7) + "px";
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
        setInterval("jeu.arene.balles["+this.id+"].move();",10);    
    } 

    stop()
    {

    }

}

  