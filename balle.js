//===============================================
//== BALLES =====================================
//===============================================
class classPoint
{
    x;
    y;
    isIn;

    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.isIn = false;
    }
}

class classBall
{
    name;
    id;
    isMoving;
    fixed;
    xs;
    ys;
    i;
    dy;
    run;

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
        //console.log("jeu.arene.balles["+this.id+"].createElement()");

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

            let dy = this.y + this.ys;
            let dx = this.x + this.xs;

            jeu.arene.mur.briques.forEach(brique => 
            {  
                if(brique.c != '_')
                {
                    let collision = false;
                    let points = new Array(8);
                    
                    points[0] = new classPoint(dx    , dy -7);
                    points[1] = new classPoint(dx +5 , dy -5);
                    points[2] = new classPoint(dx +7 , dy   );
                    points[3] = new classPoint(dx +5 , dy +5);
                    points[4] = new classPoint(dx    , dy +7);
                    points[5] = new classPoint(dx -5 , dy +5);
                    points[6] = new classPoint(dx -7 , dy   );
                    points[7] = new classPoint(dx -5 , dy -5);
                    
                    //console.log("test");

                    //console.log(brique.x1+','+brique.y1+' / '+brique.x2+','+brique.y2);

                    for ( let i = 0 ; i < 8 ; i++)
                    {
                        if((points[i].x >= brique.x1 && points[i].x <= brique.x2) && (points[i].y >= brique.y1 && points[i].y <= brique.y2))
                        {
                            points[i].isIn = true;     

                            //console.log("isIn:" + points[i].isIn);
                        }
                    }
                   
                    // collision vertical
                    if((points[0].isIn && !points[4].isIn) ||(points[4].isIn && !points[0].isIn))
                    {
                        this.ys = this.ys * -1;
                        collision = true;

                        //console.log("collision vert:" + collision);
                    }

                    // collision horizontal
                    if((points[6].isIn && !points[2].isIn) || (points[2].isIn && !points[6].isIn))
                    {
                        this.xs = this.xs * -1;
                        collision = true;

                        //console.log("collision hor:" + collision);
                    }

                    // collision diagonale
                    if((points[1].isIn && !points[5].isIn) || (points[5].isIn && !points[1].isIn) || (points[7].isIn && !points[3].isIn) || (points[3].isIn && !points[7].isIn))
                    {
                        this.xs = this.xs * -1;
                        this.ys = this.ys * -1;
                        collision = true;

                        //console.log("collision diag:" + collision);
                    }


                    // condition de collision 
                    if(collision)
                    {
                        //this.parent.parent.playFX(7);
                        let el = document.getElementById("brique" + brique.id);
                        el.parentNode.removeChild(el);

                        brique.c = '_';

                        // this.parent.mur.total--;
                        // if(this.parent.mur.total == 0)
                        // {
                        //     //this.parent.parent.playFX(9);
                        //     this.parent.parent.niveau++;
                        //     this.parent.mur.loadLevel();
                        //     this.parent.mur.createWall();
                        // }
                    }

                }
                
            });

//=== COLLISION BORDS + BATTE ===========================================================

            if(dx < 7 || dx > 513)
            {
                this.xs = this.xs * -1;
                this.x  = (dx < 7) ? 7 : 513;
                //this.parent.parent.playFX(8);
            }
            else
            {
                this.x = dx;
            }

            // bord haut
            if(dy < 0)
            {
                this.ys = this.ys * -1;
                this.y  = (dy < 7) ? 7 : dy;
                //this.parent.parent.playFX(8);
            }
            else
            {
                if(dy > 520)
                {
                    //console.log('game over :'+dy);

                    this.stop();
                    this.reset();
                    jeu.arene.batte.reset()
                    jeu.arene.vies--;
                    document.getElementById("compteur").innerHTML = "Vies : " + jeu.arene.vies;
                    
                    if(jeu.arene.vies == 0)
                    { 
                        document.getElementById("msg").style.display = 'block';
                        document.getElementById("msg").style.fontSize = '64px';
                        document.getElementById("msg").innerHTML = 'GAME OVER!';
                        jeu.arene.vies = 3;
                        document.getElementById("compteur").innerHTML = "Vies : " + jeu.arene.vies;
                        setTimeout("document.getElementById('msg').style.display = 'none'",3000);
                        setTimeout("jeu.resetGame();",3000);
                    }
                }


                else
                {
                    // collision avec la batte
                    if((    dy > (jeu.arene.batte.y - 7)
                        &&  dy < (jeu.arene.batte.y + 10))
                        && (dx >= jeu.arene.batte.x1 && dx <= jeu.arene.batte.x2))
                    {
                        this.ys = this.ys * -1;
                        this.y  = jeu.arene.batte.y - 7;
                        //this.parent.parent.playFX(6);
                    }
                    else
                    {
                        this.y = dy;
                    }
                }
            }

            this.moveTo(this.x,this.y);

            this.isMoving = false;
        }
        else
        {
        // console.log("balle" + this.id + " is not moving");
        }
    }

    moveTo(x,y)
    {
        document.getElementById("balle"+this.id).style.left = (this.x - 7) + "px";
        document.getElementById("balle"+this.id).style.top  = (this.y - 7) + "px";
    }


    setOnClickEvent()
    {
        //console.log("setOnClickEvent();");

            document.getElementById("arene").onclick = function() // hors contexte => chemin complet
        {

            jeu.stickMode = false;
            jeu.arene.balles[0].stop();
            jeu.arene.balles[0].go();  

            //console.log("stickMode setonclick :" + jeu.stickMode);
        }
    }


    go()
    {
        console.log("balles.go()");
        {
            console.log("interval de go()");
            
            this.run = setInterval("jeu.arene.balles[0].move();",10);
        }
            
    } 

    stop()
    {
        clearInterval(this.run);
        this.x          = 250;
        this.y          = 445;
    }


    reset()
    {
        //console.log("reset de la balle");

        document.getElementById("balle0").remove();
        this.createElement();
        this.setOnClickEvent();
    }
}
  