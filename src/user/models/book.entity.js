export class Book{

  constructor(name, image){
    this.image= image;
    this.name = name;
  }


  getImage(){
    return this.image;
  }
  getName(){
    return this.name;
  }
}