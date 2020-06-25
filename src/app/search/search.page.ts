import { Component, OnInit } from '@angular/core';
import { LandInfoService } from '../land-info.service';
import { ModalController } from '@ionic/angular';
import { ModelPage } from '../model/model/model.page';
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

  clickFind(){
    this.selectedData = []
    if (this.selectedDiv !== "" && this.selectedDis !== "" && this.selectedSubDis !== "" && this.selectedMouza !== ""){
      console.log(this.landData);
      let lData:any
      for(lData of this.landData){
        if(this.selectedMouza.split('-')[1] === lData.Title_Deed.Area){
          console.log(lData.Title_Deed.Area);
          this.selectedData.push(lData)
        }
          
      }
      this.searchInputGiven = true; 
    }
  }

  async openModal(){
    const modal = await this.modalController.create({
      component: ModelPage,
    });
    return await modal.present();
  }

}
