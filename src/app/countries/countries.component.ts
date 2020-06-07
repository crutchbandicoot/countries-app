import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  showCountry: any;
  constructor(private countries: CountriesService){
     this.countries.getCountries().subscribe((data) => {
      this.showCountry = data;
    });
  }

  ngOnInit(): void {
  }

}
