class Animal{
   public name:string;
constructor(thename:string){
 this.name =thename;
}
walk(distance : number){
    console.log("Hi,myname is" + this.name  +"and i'm walking"+ distance+"meter");
}

}
{
let myAnimal = new Animal("Tiger");
myAnimal.walk(10)
}


