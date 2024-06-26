export class Book {

  constructor(title = null, description = null, date_publish = null, type = null, id = null, imgUrl = null, genre = null) {
    this._title = title;
    this._description = description;
    this._datePublish = date_publish;
    this._type = type;
    this._id = id;
    this._imgUrl = imgUrl;
    this._genre = genre;
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

  get imgUrl() {
    return this._imgUrl;
  }

  set imgUrl(value) {
    this._imgUrl = value;
  }
}