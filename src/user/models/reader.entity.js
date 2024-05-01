export class Reader {
  constructor(id=null, name=null, username=null, email=null, password=null, type=null, imgURL=null, subscription_id=null) {
    this._id = id;
    this._name = name;
    this._username = username;
    this._email = email;
    this._password = password;
    this._type = type;
    this._imgURL = imgURL;
    this._subscription_id = subscription_id;
  }
}
