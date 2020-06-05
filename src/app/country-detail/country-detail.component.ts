import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CountriesService } from '../countries.service';
import { Country } from '../country';


@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {
  title = 'Country Details';
  countryDetail: any;
  @Input() country: Country;
  
  constructor(private route: ActivatedRoute, 
              private location: Location, 
              private countryService: CountriesService) { }

  ngOnInit(): void {
    this.getCountry();
  }

  getCountry(){
    const country = this.route.snapshot.paramMap.get('country');
    console.log(country);
    this.countryService.countryDetail(country).subscribe((country) =>{
      this.countryDetail = country;
    })
  }
}
