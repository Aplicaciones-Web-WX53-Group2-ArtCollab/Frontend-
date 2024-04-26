export class Book{

  constructor(name, image, author){
    this.name = name;
    this.image= image;
  }

  getName(){
    return this.name;
  }

  getImage(){
    return this.image;
  }
}