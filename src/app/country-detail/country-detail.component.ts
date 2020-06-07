import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CountriesService } from '../countries.service';
import { Country } from '../country';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss'],
})
export class CountryDetailComponent implements OnInit {
  title = 'Country Details';
  country: Country;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private countryService: CountriesService
  ) {
    // ID(variable) taken from the app route module
    const countryId = this.route.snapshot.paramMap.get('id');
    this.countryService.countryDetail(countryId).subscribe((data) => {
    this.country = data;
  });
}

  goBack() {
    this.location.back();
  }

  ngOnInit(): void {
  }
}
