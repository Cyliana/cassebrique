//===============================================
//== MUR ========================================
//===============================================

class classMur
{
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

        let briques = new Array();
        let i = 0;

        for( let y = 0 ; y < 18 ; y++)
        {
            for( let x = 0 ; x < 13 ; x++)
            {
                briques[i] = new classBrique(i,x*40,y*20,this.level.substring(i, i + 1));     
                i++;
            }
        }
    }

    resetWall()
    {
        
    }
}