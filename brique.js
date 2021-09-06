//===============================================
//== BRIQUE =====================================
//===============================================

class classBrique
{
    constructor(id,x1,y1,x2,y2,c)
    {
       // console.log(id +" : "+ x +", "+ y );
        this.x1 = x1;
        this.y1 = y1;
        this.w = 40;
        this.h = 20;
        this.c = c;
        this.id = id;
        this.x2 = x2 ;
        this.y2 = y2 ;
        //this.t = t;

        this.createElement();
    }

    createElement()
    {
        let brique = document.createElement("div");
        brique.id = "brique" + this.id;
        brique.className = "brique b"+ this.c ;
        brique.style.position = "absolute";
        brique.style.left = this.x1 +"px";
        brique.style.top = this.y1 +"px";
        document.getElementById("arene").appendChild(brique);
    }   
}