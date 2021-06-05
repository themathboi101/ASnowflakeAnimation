class Snow{
    constructor(x,y,width,height){
        var options={
            density:1,
            friction:1,
            isStatic:false,
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("snow4.webp");
    }
       
        display(){
         var snowPos=this.body.position;
         push();
         translate(pos.x,pos.y);
         rectMode(CENTER);
         fill("white");
         rect(0,0,this.width,this.height);
        // this.body.addImage(this.image);
         pop();
       }
    }
    
