//===============================================
//== MUR ========================================
//===============================================

class classMur
{
    briques;

    constructor()
    {
        this.name       = "mur";

        this.w          = 13;
        this.h          = 18;
        this.level      = "";
    }

    loadLevel(niveau)
    {
       let xhr = new XMLHttpRequest();
       xhr.open("GET", "level" + niveau + ".txt", false);
       xhr.send(null);
       let map = xhr.responseText;
       
       for(let m = 0 ; m < map.length ; m++)
       {
           var c = map.substring(m, m + 1);

           if(c == "_" || ( c >= "0" && c <= "7"))
           {
               this.level += c ;
           }
       }
    }

    createWall()
    {

        this.briques = new Array(234);
        let i = 0;

        for( let y = 0 ; y < 18 ; y++)
        {
            for( let x = 0 ; x < 13 ; x++)
            {
                let x1 = x*40 ;
                let y1 = y*20 ;
                let x2 = x1 + 40;
                let y2 = y1 + 20 ; 
                this.briques[i] = new classBrique(i,x1,y1,x2,y2,this.level.substring(i, i + 1));     
                i++;
            }
        }
    }

    resetWall()
    {


        let el = document.getElementById("brique"+ brique.id);
        el.remove(el);
        
        this.brique.c = '_';


        this.loadLevel(niveau);
        this.createWall();
    }
    
}