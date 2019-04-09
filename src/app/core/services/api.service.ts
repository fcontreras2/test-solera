import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { environment } from "@environments/environment";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(
    private http: HttpClient
  ) {}

  get(url, params = {}, options = {}): Observable<any> {
    return this.http.get(environment.apiUrl + url, {
      ...{ params },
      ...options,
      ...this.httpOptions
    });
  }

  post(url, body = {}, options = {}): Observable<any> {
    return this.http.post(environment.apiUrl + url, body, {
      ...this.httpOptions
    });
  }

  put(url, body = {}, options = {}): Observable<any> {
    return this.http.put(environment.apiUrl + url, body, {
      ...this.httpOptions
    });
  }
}
