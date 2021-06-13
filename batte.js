//===============================================
//== BATTE ======================================
//===============================================

class classBatte
{
    name;
    isMoving;
    w;
    y;
    x1;
    x2;
    ox;

    constructor()
    {
        this.name       = "batte";

        this.isMoving   = false;

        this.w          = 80 ;
        this.y          = 460 ;

        this.x1         = 0;
        this.x2         = this.x + this.w ;
        this.ox         = this.x1 ;
    }

    createElement()
    {
        let batte = document.createElement("div");
        batte.id = "batte";
        batte.className = "batte";
        batte.style.top = this.y + "px";
        batte.style.left = this.x1 + "px";
        document.getElementById("arene").appendChild(batte);
    }

    startListenMouse()
    {
        document.onmousemove = function(e) { jeu.arene.batte.move(e); } ;
    }

    move(e)
    {
        //console.log("x:" +e.clientX + " / " + e.clientY);
        let bcr = parseInt(document.getElementById("arene").getBoundingClientRect().left);
        this.x1 = e.clientX - bcr - 40;

        if(this.x1 <0)
        {
            this.x1 = 0 ;
        }
        
        if(this.x1 > 520 - this.w)
        {
            this.x1 = 520 -this.w ; 
        }

        this.x2 = this.x1 + this.w ;

        document.getElementById("batte").style.left = this.x1 + "px" ;
    }
}