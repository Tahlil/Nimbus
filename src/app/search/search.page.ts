import { Component, OnInit } from '@angular/core';
import { LandInfoService } from '../land-info.service';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modals/modal/modal.page';
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
  max:Number=100000;
  min:Number=10000;
  constructor(private landInfoService:LandInfoService, public modalController: ModalController) { }
  landData;
  selectedData= [];

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

  getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  clickFind(){
    this.selectedData = []
    // if (this.selectedDiv !== "" && this.selectedDis !== "" && this.selectedSubDis !== "" && this.selectedMouza !== ""){
      
      let lData:any
      for(lData of this.landData){
        if(this.selectedMouza.split('-')[1] === lData.Title_Deed.Area){
          console.log(lData.Title_Deed.Area);
          lData["minPrice"] = this.getRandomArbitrary(10000, 100000);
          lData["maxPrice"] = lData["minPrice"] + this.getRandomArbitrary(10000, 100000);
          this.selectedData.push(lData);
        }
          
      }
      this.searchInputGiven = true; 
    // }
  }

  filter(){
    let index = 0;
    for (const data of this.selectedData) {
      if(data.minPrice < this.min || data.maxPrice > this.max){
        this.selectedData.splice(index, 1);
      }
      index++;
    }
  }

  async openModal($event){
    $event.target.innerHTML = "Purchase Request Sent";
    $event.target.setAttribute("disabled", "disabled");
    $event.target.style.border = "3px solid #4CAF50"
    $event.target.style.color = "#4CAF50";
    const modal = await this.modalController.create({
      component: ModalPage,
    });
    return await modal.present();
  }

}
