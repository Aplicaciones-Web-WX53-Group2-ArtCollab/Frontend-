
export class Book{

  constructor(name, image, author){
    this.name = name;
    this.image= image;
    this.author= author;

  }

  getName(){
    return this.name;
  }

  getImage(){
    return this.image;
  }

  getAuthor(){
    return this.author;
  }

}