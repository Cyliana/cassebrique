//===============================================
//== JEU ========================================
//===============================================
let dcpt = 3;

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
        this.stickMode   = false;

        this.run;
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
        //console.log("new.game");

        this.demoMode = false;
        

        clearInterval(jeu.arene.balles[0].run);
        document.getElementById("balle0").style.left = 250 + "px" ;
        document.getElementById("balle0").style.top = 445 + "px" ;

        clearInterval(jeu.arene.batte.run);
        document.getElementById("batte").style.left = 220 + "px" ;
        document.getElementById("batte").style.top = 460 + "px" ;

        this.arene.batte.startListenMouse(); // batte suit la souris
        
        this.countDown();    // enclanchement compte à rebours

        this.stickMode = true;

        setTimeout("jeu.arene.balles[0].setOnClickEvent();",3500); // lancement de la balle au clic
    } 

    demoStart()

    {
        setTimeout("jeu.arene.balles[0].go();",5000);
        setTimeout("jeu.arene.batte.go();",5000);
    }

    countDown()
    {
        this.arene.mur.resetWall(this.niveau);

        btnStart.disable();
        btnQuit.disable();

        let div = document.createElement("div");
        div.id = "msg";
        div.className = "msg";
        document.getElementById("arene").appendChild(div);

        setTimeout("document.getElementById('msg').innerHTML = dcpt; dcpt--;",1000);
        setTimeout("document.getElementById('msg').innerHTML = dcpt; dcpt--;",1500);
        setTimeout("document.getElementById('msg').innerHTML = dcpt; dcpt--;",2000);
        setTimeout("document.getElementById('msg').innerHTML = dcpt; dcpt--;",2500);
        setTimeout("document.getElementById('msg').innerHTML = 'GO!';",3000);
        setTimeout("document.getElementById('msg').style.display = 'none'",3500);
        dcpt = 3;

        setTimeout('btnStart.enable();',3500);
        setTimeout('btnQuit.enable();',3500);

    }

    resetGame()
    {
        //this.arene.mur.resetWall();
        this.arene.balles[0].reset();
        this.arene.batte.reset();
        this.newGame();

        //console.log("le jeu se relance");
    }
}