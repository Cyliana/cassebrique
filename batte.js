//===============================================
//== BATTE ======================================
//===============================================

class classBatte
{
    name;
    w;
    y;
    x1;
    x2;
    ox;
    run;

    constructor()
    {
        this.name       = "batte";

        this.w          = 80 ;
        this.y          = 460 ;

        this.x1         = 0;
        this.x2         = this.x1 + this.w ;
        this.ox         = this.x1 ;
    }

    createElement()
    {
        let batte = document.createElement("div");
        batte.id = "batte";
        batte.className = "batte";
        batte.style.position = "absolute";
        batte.style.top = this.y + "px";
        batte.style.left = this.x1 + "px";
        document.getElementById("arene").appendChild(batte);
    }

    startListenMouse()
    {
        //console.log("startListenMove()");

        let bcr = parseInt(document.getElementById("arene").getBoundingClientRect().left);
            document.onmousemove = function (e) 
            
            { 
                if(jeu.demoMode == false)
                {
                    jeu.arene.batte.x1 = e.clientX- bcr - 40;
                    jeu.arene.batte.move();    
                }
            
            }
              
    }
            
    
    move() // la batte synchronise ses mouvements sur celui de la balle.
    {
        //console.log("batte.move");

        if(jeu.demoMode == true)
        {
            this.x1 = jeu.arene.balles[0].x - 40 ;
        }
        
        if(this.x1 < 0)
        {
            this.x1 = 0;
        }

        if(this.x1 > 520 - this.w)
        {
            this.x1 = 520 - this.w;
        }

        if(jeu.demoMode == false && jeu.stickMode == true)
        {
//          console.log("stickMode DANS MOVE() DE BALLE : " +jeu.stickMode)
            jeu.arene.balles[0].x = this.x1 + 40;
            jeu.arene.balles[0].y = this.y - 7;
            jeu.arene.balles[0].moveTo(jeu.arene.balles[0].x,jeu.arene.balles[0].y);
        }

        this.x2 = this.x1 + this.w;
        
        document.getElementById("batte").style.left = this.x1 + "px"; 



        // jeu.arene.balles[0].x = this.x1 +40 ;
        // document.getElementById("balle0").style.left = this.x1 + 40 + "px";
                
        //=======================================================================================      
    }





    go()
    {
        this.run = setInterval("jeu.arene.batte.move();",10);
    }
    
    stop()
    {
        clearInterval(this.run);
        this.y          = 460;
    }
    
    reset()
    {
        //console.log("reset de la batte");

        document.getElementById("batte").remove();
        this.createElement();
        this.startListenMouse();
    }
}

