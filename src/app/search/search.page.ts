import { Component, OnInit } from '@angular/core';
import { LandInfoService } from '../land-info.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  allInfoGiven:Boolean = false;
  searchInputGiven:Boolean = false;
  selectedDiv:string;
  selectedDis:string;
  selectedSubDis:string;
  selectedMouza:string;
  constructor(private landInfoService:LandInfoService) { }
  landData;

  ngOnInit() {
    this.selectedDiv= "";
    this.selectedDis= "";
    this.selectedSubDis= "";
    this.selectedMouza= "";
    let that = this;
    this.searchInputGiven= false;
    this.landInfoService.getJSON().subscribe(data => {
      that.landData = data;
  });
  }

  checkDivSelect(){
 
  }

  checkDisSelect(){
  
  }

  checkSubDisSelect(){  
    console.log(this.selectedSubDis);
  }

  checkMouzaSelect(){
    console.log("Changed...");   
    console.log(this.selectedMouza);
    
  }

  clickFind(){
    if (this.selectedDiv !== "" && this.selectedDis !== "" && this.selectedSubDis !== "" && this.selectedMouza !== ""){
      console.log(this.landData);
      this.searchInputGiven = true; 
    }
  }
}
