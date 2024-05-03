export class Book {

  constructor(title = null, description = null, datePublish = null, type = null, id = null, imgUrl =  null, likes = null, views =  null) {
    this._title = title;
    this._description = description;
    this._datePublish = datePublish;
    this._type = type;
    this._id = id;
    this._imgUrl = imgUrl;
    this._likes=likes;
    this._views=views;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get datePublish() {
    return this._date_publish;
  }

  set date_publish(value) {
    this._date_publish = value;
  }

  get type() {
    return this._type;
  }

  set type(value) {
    this._type = value;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get imgUrl() {
    return this._imgUrl;
  }

  set imgUrl(value) {
    this._imgUrl = value;
  }

  get likes() {
    return this._likes;
  }

  set likes(value) {
    this._likes = value;
  }

  get views() {
    return this._views;
  }

  set views(value) {
    this._views = value;
  }
}