import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  localStorage;
  constructor() {
    this.localStorage = window.localStorage;
   }

  get(key) {
    let value = this.localStorage.getItem(key);
    if (value) {
      return this.getJson(value)
    }
    return null;
  }

  set(key, value) {
    this.localStorage.setItem(key, this.toJson(value))
  }

  private getJson(str) {
    let response = null;
    try {
        response = JSON.parse(str);
    } catch (e) {
        return str;
    }
    return response;
  }

  private toJson(value) {
    let response = null;
    try {
        response = JSON.stringify(value);
    } catch (e) {
        return value;
    }
    return response;
  }
}
