//===============================================
//== BRIQUE =====================================
//===============================================

class classBrique
{
    constructor(x,y,w,h,t)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.t = t;
    }

    updateXY2()
    {
        this.x2 = this.x + this.w ;
        this.y2 = this.y + this.h ;
    }
}