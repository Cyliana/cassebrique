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

        //this.arene.mur.loadLevel(this.niveau);
        //this.arene.mur.createWall();
        //this.batte.createElement();
    }
    

    quit()
    {
       document.location.href= "https://www.google.fr/";
    }

    newGame()
    {

    } 

    demoStart()
    {

    }

    countDown()
    {
   
    }

}
























































