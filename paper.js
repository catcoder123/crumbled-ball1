class paper {
constructor(x,y,r){
this.x=x
this.y=y
this.r=r
this.body=Bodies.circle(this.x,this.y,this.r,{isStatic:false,restitution:0.3})
}
display(){
    var pos =this.body.position;
push()
translate(pos.x,pos.y)
rectMode(CENTER)
fill("red")
ellipse(0,0,this.r,this.r)
pop();
}


}