//constructor
//access modifier

class Point2{
    private x:number;       //access modifier
    private y:number;

    constructor(x?:number,y?:number){
        this.x=x;
        this.y=y;
    }

    draw(){
        console.log('X:'+this.x,',Y:'+this.y);
    }
    
}

let point1=new Point2(1,2);

point1.draw();
