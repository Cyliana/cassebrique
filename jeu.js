//===============================================
//== JEU ========================================
//===============================================

class classJeu
{
    constructor()
    {
        this.name        = "jeu";

        this.niveau      = 0;
        this.temps       = 0;
        this.score       = 0;
        this.vie         = 3;
        this.difficulte  = 0;   

        this.demoMode    = true;
    }

    start()
    {
      
        this.arene          = new classArene();
        this.arene.parent   = this;
        this.arene.createElement();
        this.arene.open();

        this.arene.mur.loadLevel(this.niveau);
        this.arene.mur.createWall();
        this.arene.batte.createElement();
        this.arene.balles[0].createElement();
        //this.arene.balles[1].createElement();
        //this.arene.balles[2].createElement();
        this.demoStart();
    }
    

    quit()
    {
       document.location.href= "https://www.google.fr/";
    }

    newGame()
    {        
        console.log("new.game");

        this.demoMode = false;
        clearInterval(jeu.arene.batte.run);
        jeu.arene.batte.startListenMouse();
        jeu.countDown();
        
        /*for( let i =0 ; i < 1 ; i++)
            {
                setTimeout("jeu.arene.balles["+i+"].go()",i * 3000);
            }
        */
    } 

    demoStart()

    {
        jeu.arene.balles[0].go();
        jeu.arene.batte.go();
    }

    countDown()
    {
        /*let div = document.createElement("div");
        div.id = "msg";
        div.className = "msg";
        document.getElementById("arene").appendChild(div);


        var timeleft = 3;
        var downloadTimer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(downloadTimer);
        }
        document.getElementById("msg").value = 3 - timeleft;
        timeleft -= 1;
        }, 1000);*/
    }

}
























































