import { Component, Input, OnInit } from '@angular/core';
import { Icountry } from 'src/app/shared/interface/data';

@Component({
  selector: 'app-country-data',
  templateUrl: './country-data.component.html',
  styleUrls: ['./country-data.component.scss']
})
export class CountryDataComponent implements OnInit {
  @Input() country! : Icountry;
  constructor() { }

  ngOnInit(): void {
  }

}
