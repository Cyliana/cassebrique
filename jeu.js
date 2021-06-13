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
        this.arene.balles[0].createElement(0);
        this.arene.balles[1].createElement(1);
        this.arene.balles[2].createElement(2);

        // this.arene.balles[0].go();
        // this.arene.balles[1].go();
        // this.arene.balles[2].go();
        
    }
    

    quit()
    {
       document.location.href= "https://www.google.fr/";
    }

    newGame()
    {
        setTimeout("jeu.arene.balles[0].go()",0 * 500);
        setTimeout("jeu.arene.balles[1].go()",1 * 1500);
        setTimeout("jeu.arene.balles[2].go()",2 * 2000);
    } 

    demoStart()
    {

    }

    countDown()
    {
   
    }

}
























































