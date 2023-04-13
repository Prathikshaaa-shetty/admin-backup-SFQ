import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ManagementService {

  readonly apiUrl:string = environment.apiUrl; 

  constructor(private http:HttpClient) { }

  getUserList():Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'GetUserDetails').subscribe({
        next: (data) => {
          resolve(data);
        },
        error:(err) => {
          reject(err);
        }
      })
    })
  }
}
