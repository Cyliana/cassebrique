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
        if(this.demoMode = true)
        {
            this.demoMode = false;
            clearInterval(jeu.arene.batte.go());
            this.start();
        }
      
        
        /*for( let i =0 ; i < 1 ; i++)
        {
            setTimeout("jeu.arene.balles["+i+"].go()",i * 3000);
        }*/
        
    } 

    demoStart()

    {
        jeu.arene.balles[0].go();
        jeu.arene.batte.go();
    }

    countDown()
    {
   
    }

}
























































