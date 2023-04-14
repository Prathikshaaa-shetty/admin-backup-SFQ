import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "environments/environment";

@Injectable({
  providedIn: "root",
})
export class FoodSupplierService {
  public rows: any;

  readonly apiUrl: string = environment.apiUrl;

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) { }

  getSupplierList(): Promise<any> {
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
