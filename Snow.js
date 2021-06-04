class Snow{
    constructor(x,y,width,height){
        var options={
            density:1,
            friction:1,
            isStatic=false,
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
       
    }
    
}