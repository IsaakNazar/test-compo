import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Profile} from "./interfaces/profile.interface";
import {Product} from "./interfaces/product.interface";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>('assets/json/profile.json');
  }

  getProduct(): Observable<Product> {
    return this.http.get<Product>('assets/json/product.json')
  }
}
