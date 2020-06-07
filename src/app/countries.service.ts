import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from './country';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) {}

  getCountries(){
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }

  countryDetail(name: any): Observable<Country>{
    return this.http.get<Country>(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`);
  }
}
