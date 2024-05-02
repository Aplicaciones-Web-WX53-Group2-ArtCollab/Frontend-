export class Chat {
  id;
  chatRoom_id;
  title;
  created_at;
  constructor(id, chatRoom_id, title, created_at) {
    this.id = id;
    this.chatRoom_id = chatRoom_id;
    this.title = title;
    this.created_at = created_at;
  }

  getId() {
    return this.id;
  }

  getChatRoomId() {
    return this.chatRoom_id;
  }

  getTitle() {
    return this.title;
  }

  getCreatedAt() {
    return this.created_at;
  }

  setId(id) {
    this.id = id;
  }

  setChatRoomId(chatRoom_id) {
    this.chatRoom_id = chatRoom_id;
  }

  setTitle(title) {
    this.title = title;
  }

  setCreatedAt(created_at) {
    this.created_at = created_at;
  }
}