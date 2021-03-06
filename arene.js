//===============================================
//== ARENE ======================================
//===============================================

class classArene
{
    constructor()
    {
        this.name       = "arene";

        this.w          = 0;
        this.h          = 0;

        this.mur        = new classMur();
        this.batte      = new classBatte();

        this.balles     = new Array();
        this.balles[0]  = new classBall(0);
        //this.balles[1]  = new classBall();
        //this.balles[2]  = new classBall();

        this.vies       = 3;
        
    }
    createElement()
    {
        let div = document.createElement("div");
        div.id = "arene";
        div.style.width = this.w;
        div.style.height = this.h;
        document.getElementById("logo").after(div);
        div.onclick = jeu.arene.batte.startListenMouse();

        let divc = document.createElement("div");
        divc.id = "compteur";
        divc.innerHTML = "Vies : " + this.vies;
        document.getElementById("arene").appendChild(divc);

    }

    open()
    {
        btnStart.disable();
        btnQuit.disable();

        btnStart.set("NEW GAME", function(){jeu.newGame();});
        btnQuit.set("HOME",function(){jeu.arene.close(); });

        document.getElementById("arene").style.display = "block" ;

        setTimeout('document.getElementById("arene").style.width = "520px";', 1000) ;
        setTimeout('document.getElementById("arene").style.height = "520px";', 3000) ;

        setTimeout('document.getElementById("arene").style.top = "50px";', 3000) ;
        setTimeout('document.getElementById("logo").style.top = "-300px";', 3000);

        setTimeout('btnStart.enable();',5000);
        setTimeout('btnQuit.enable();',5000);

    }
    
    close()
    {
        btnStart.disable();
        btnQuit.disable();

        btnStart.set("START", function(){jeu.start(); });
        btnQuit.set("QUIT",function(){jeu.quit(); });

        setTimeout('document.getElementById("arene").style.height = "0px";', 1000) ;

        setTimeout('document.getElementById("arene").style.top = "240px";', 1000) ;
        setTimeout('document.getElementById("logo").style.top = "0px";', 1000);

        setTimeout('document.getElementById("arene").style.width = "0px";', 3000) ;
        setTimeout('document.getElementById("arene").style.display = "none";', 5000) ;

        setTimeout('btnStart.enable();',5000);
        setTimeout('btnQuit.enable();',5000);
    }
}