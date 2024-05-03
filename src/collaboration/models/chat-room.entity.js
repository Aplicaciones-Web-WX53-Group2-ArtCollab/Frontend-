export class Chatroom {
  id;
   created_date;
   end_date;
  topic;
  active;

  constructor(id, created_date, end_date, topic, active) {
    this.id = id;
    this.created_date = created_date;
    this.end_date = end_date;
    this.topic = topic;
    this.active = active;
  }

  getId() {
    return this.id;
  }

  getCreatedDate() {
    return this.created_date;
  }

  getEndDate() {
    return this.end_date;
  }

  getTopic() {
    return this.topic;
  }

  getActive() {
    return this.active;
  }

  setId(id) {
    this.id = id;
  }

  setCreatedDate(created_date) {
    this.created_date = created_date;
  }

  setEndDate(end_date) {
    this.end_date = end_date;
  }

  setTopic(topic) {
    this.topic = topic;
  }

  setActive(active) {
    this.active = active;
  }
}