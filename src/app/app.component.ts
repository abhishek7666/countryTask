import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Icountry } from './shared/interface/data';
import { CountriesService } from './shared/services/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  name : boolean  = true;
  capital : boolean =true;
  population : boolean = true;
  title = 'countryTask';
  countriesArray : Icountry[]=[]
  orignalArray : Icountry[]=[]
  constructor(private countriesService : CountriesService){}

  ngOnInit(): void {
    this.countriesArray = this.orignalArray = this.countriesService.getCountriesArray();
  }
  onclickName(){
    if(this.name){
      let sortName = this.countriesArray.sort((a:Icountry, b:Icountry)=>a.name > b.name ? 1 : -1)
      this.name = !this.name
    }else{
      let sortcountry = this.countriesArray.sort((a:Icountry, b:Icountry)=>a.name < b.name ? 1 : -1)
      this.name =!this.name
    }
  }
  onclickCapital(){
    if(this.capital){
      let capitalCountry = this.countriesArray.sort((a:Icountry,b:Icountry)=> a.capital > b.capital ? 1: -1).map(ele=> ele.capital ? ele.capital : ele.capital = 'NA')
      this.capital = !this.capital
    }else{
     let capitalArray = this.countriesArray.sort((a:Icountry,b:Icountry)=> a.capital < b.capital ? 1: -1).map(ele=> ele.capital ? ele.capital : ele.capital = 'NA')
      this .capital = !this.capital
    }
  }
  onclickPopulstion(){
    if(this.population){
      let populationCountry = this.countriesArray.sort((a:Icountry, b:Icountry)=> a.population > b.population ? 1: -1)
      this.population= !this.population
    }else{
      let populationArray = this.countriesArray.sort((a:Icountry, b:Icountry)=> a.population < b.population ? 1: -1)
      this.population= !this.population
    }
  }
  OnSearch(a:string){
    // console.log(a);
    let val = a.toLowerCase()
    if(a===''){
      this.countriesArray = this.orignalArray;
    }else{
      let arr = this.countriesArray.filter((ele)=> ele.capital.toLowerCase().includes(val) || ele.name.toLowerCase().includes(val) ||ele.languages.some(str => str.toLowerCase().includes(val)))
      this.countriesArray = arr;
    }
  }
}


