//===============================================
//== BRIQUE =====================================
//===============================================

class classBrique
{
    constructor(id,x,y,c)
    {
       // console.log(id +" : "+ x +", "+ y );
        this.x = x;
        this.y = y;
        this.w = 40;
        this.h = 20;
        this.c = c;
        this.id = id;

        //this.t = t;

        this.createElement();
    }

    updateXY2()
    {
        this.x2 = this.x + this.w ;
        this.y2 = this.y + this.h ;
    }

    createElement()
    {
        let brique = document.createElement("div");
        brique.id = "brique" + this.id;
        brique.className = "brique b"+ this.c ;
        brique.style.position = "absolute";
        brique.style.left = this.x +"px";
        brique.style.top = this.y +"px";
        document.getElementById("arene").appendChild(brique);
    }   
}