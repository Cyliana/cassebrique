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
        this.element.setAttribute("disabled",true);
    }

    enable()
    {
        this.element.setAttribute("disabled");
    }

}


function init()
{
    let jeu = new classJeu();

    let logo = document.createElement("img");
    logo.id = "logo";
    logo.setAttribute("src", "logo.svg");
    document.body.appendChild(logo);


    let boutons = document.createElement("div");
    boutons.id = "boutons";
    document.getElementById("logo").after(boutons);


    let btnStart = new classBoutons("btnStart");
    let btnQuit  = new classBoutons("btnQuit");

    btnStart.createElement();
    btnQuit.createElement();

    btnStart.set("START", function(){jeu.start(); });
    btnQuit.set("QUIT", function(){jeu.quit(); });

}