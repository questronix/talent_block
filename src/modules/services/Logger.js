export default class Logger {

  constructor(tag) {
    this.tag = tag;
  }

  log(url, action) {
    console.log(`INFO: ${this.tag}${action} Requesting to: ${url}`);
  }

  getTag() {
    return this.tag;
  }
}