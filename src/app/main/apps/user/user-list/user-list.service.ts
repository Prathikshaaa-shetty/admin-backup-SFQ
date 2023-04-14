import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { environment } from "environments/environment";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class UserListService {
  public rows: any;

  readonly apiUrl: string = environment.apiUrl;

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) { }

  getUserList(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(this.apiUrl + "GetUserDetails").subscribe({
        next: (data) => {
          resolve(data);
        },
        error: (err) => {
          reject(err);
        },
      });
    });
  }
}
