//access_modifier_constructor_param
//get and set property

class Point3{
   
    constructor(private _x?:number,private _y?:number){
    }

    draw(){
        console.log('X:'+this._x,',Y:'+this._y);
    }
    
    get x(){                         //properties
        return this.x;              
    }
    
    set x(val){
        if(val<0)
            throw new Error('value cannot be less than 0');
        
        this._x=val;
    }
}

let point3=new Point3(1,2);
let x = point3.x;
point3.x=10;

point3.draw();
