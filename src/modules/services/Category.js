import axios from 'axios';
import Logger from './Logger';

export default class Category {
  
  constructor(baseUrl) {
    this.TAG = '[Category]';
    this.logger = new Logger(this.TAG);
    this.http = axios;
    this.baseUrl = baseUrl;
    console.log(this.constructor.name + ' constructed.');
  }

  add(data) {
    const ACTION = '[add]';
    let url = `${this.baseUrl}/`;
    this.logger.log(url, ACTION);

    return this.http.post(url, data);
  }

  findAll() {
    const ACTION = '[findAll]';
    let url = `${this.baseUrl}/`;
    this.logger.log(url, ACTION);

    return this.http.get(url);
  }

  find(id) {
    const ACTION = '[find]';
    let url = `${this.baseUrl}/${id}`;
    this.logger.log(url, ACTION);

    return this.http.get(url);
  }

  update(id, data) {
    const ACTION = '[update]';
    let url = `${this.baseUrl}/${id}`;
    this.logger.log(url, ACTION);

    return this.http.put(url, data);
  }

  remove(id) {
    const ACTION = '[remove]';
    let url = `${this.baseUrl}/${id}`;
    this.logger.log(url, ACTION);

    return this.http.delete(url);
  }

  getBaseUrl() {
    this.ACTION = '[getBaseUrl]';
    return this.baseUrl;
  }

}