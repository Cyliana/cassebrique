//===============================================
//== COMMUN =====================================
//===============================================


class classBoutons
{
    constructor(id)
    {
        this.name       = "boutons";

        this.id         = id;
    }

    createElement()
    {
        let button = document.createElement("button")
        button.id = this.id;
        document.getElementById("boutons").appendChild(button);

    }

    set(libelle, action)
    {
        document.getElementById(this.id).innerHTML = libelle;
        document.getElementById(this.id).onclick = action;
    }

    disable()
    {
        document.getElementById(this.id).setAttribute("disabled","disable");
    }

    enable()
    {
        document.getElementById(this.id).removeAttribute("disabled");
    }

}
 let btnStart;
 let btnQuit;
 let jeu;
 let log;
 let boutons;

function init()
{
    jeu = new classJeu();

    logo = document.createElement("img");
    logo.id = "logo";
    logo.setAttribute("src", "logo.svg");
    document.body.appendChild(logo);

    boutons = document.createElement("div");
    boutons.id = "boutons";
    document.getElementById("logo").after(boutons);

    btnStart = new classBoutons("btnStart");
    btnQuit  = new classBoutons("btnQuit");

    btnStart.createElement();
    btnQuit.createElement();

    btnStart.set("START", function(){jeu.start(); });
    btnQuit.set("QUIT", function(){jeu.quit(); });

}