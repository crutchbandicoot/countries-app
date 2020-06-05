import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Country } from '../country';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  showCountry: any;
  
  constructor(private countries: CountriesService){
     this.countries.getCountries().subscribe((data) => {
      this.showCountry=data;
    })
    this.showCountryDetail
  }

  ngOnInit(): void {
  }

  selectedCountry: Country;

  showCountryDetail(country){
    this.selectedCountry = country;

  }

}
