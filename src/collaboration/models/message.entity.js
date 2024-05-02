export class Message {
  id;
  content;
  chat_id;
  isRead;
  isSend;

  constructor(id, content, chat_id, isRead, isSend) {
    this.id = id;
    this.content = content;
    this.chat_id = chat_id;
    this.isRead = isRead;
    this.isSend = isSend;
  }

  getId() {
    return this.id;
  }

  getContent() {
    return this.content;
  }

  getChatId() {
    return this.chat_id;
  }

  getIsRead() {
    return this.isRead;
  }

  getIsSend() {
    return this.isSend;
  }

  setId(id) {
    this.id = id;
  }

  setContent(content) {
    this.content = content;
  }

  setChatId(chat_id) {
    this.chat_id = chat_id;
  }

  setIsRead(isRead) {
    this.isRead = isRead;
  }

  setIsSend(isSend) {
    this.isSend = isSend;
  }
}