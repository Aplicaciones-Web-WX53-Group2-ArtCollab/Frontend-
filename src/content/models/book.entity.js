export class Book {

  constructor(title = null, description = null, type = null, imgUrl = null, genre = null, portfolioTitle = null, likes = 0, views = 0, portfolioDescription = null, portfolioQuantity= null, templateState = null) {
    this._title = title;
    this._description = description;
    this._type = type;
    this._imgUrl = imgUrl;
    this._genre = genre;
    this._portfolioTitle = portfolioTitle;
    this._likes = likes;
    this._views = views;
    this._portfolioDescription = portfolioDescription;
    this._portfolioQuantity = portfolioQuantity;
    this._templateState = templateState;
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

  get genre() {
    return this._genre;
  }

  set genre(value) {
    this._genre = value;
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

  get portfolioDescription() {
    return this._portfolioDescription;
  }

  set portfolioDescription(value) {
    this._portfolioDescription = value;
  }

  get portfolioQuantity() {
    return this._portfolioQuantity;
  }

  set portfolioQuantity(value) {
    this._portfolioQuantity = value;
  }

  get templateState() {
    return this._templateState;
  }

  set templateState(value) {
    this._templateState = value;
  }

  get portfolioTitle() {
    return this._portfolioTitle;
  }

  set portfolioTitle(value) {
    this._portfolioTitle = value;
  }
}