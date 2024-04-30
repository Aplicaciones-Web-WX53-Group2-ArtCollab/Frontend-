export class Portfolio {
  constructor(id=null, reader_id=null, create_at=null, title=null, description=null, quantity=null, images=null) {
    this._id = id;
    this._reader_id = reader_id;
    this._create_at = create_at;
    this._title = title;
    this._description = description;
    this._quantity = quantity;
    this._images = images;
  }
  get id() {
    return this._id;
  }

  get reader_id() {
    return this._reader_id;
  }

  get create_at() {
    return this._create_at;
  }

  get title() {
    return this._title;
  }

  get description() {
    return this._description;
  }


  get quantity() {
    return this._quantity;
  }

  get images() {
    return this._images;
  }

  set images(value) {
    this._images = value;
  }
}
