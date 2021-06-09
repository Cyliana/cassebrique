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
        
        this.balles     = new Array(3);
        this.balles[0]  = new classBall(0);
        this.balles[1]  = new classBall(1);
        this.balles[2]  = new classBall(2);

        this.mur.parent = this;
        this.batte.parent = this;
        this.balles[0].parent = this;
        this.balles[1].parent = this;
        this.balles[2].parent = this;
    }

    createElement()
    {
        let arene = document.createElement("div");
        arene.id = "arene";
        document.body.appendChild(arene);
    }


    open()
    {
        
    }


    
    close()
    {

    }
}