import { Component, OnInit } from "@angular/core";
import { LandInfoService } from "../../land-info.service";
import { ModalController } from '@ionic/angular';

import { MortageModalPage } from '../../modals/mortage-modal/mortage-modal.page';
@Component({
  selector: "app-my-transactions",
  templateUrl: "./my-transactions.page.html",
  styleUrls: ["./my-transactions.page.scss"],
})
export class MyTransactionsPage implements OnInit {
  landData = [];
  dataLoaded: Boolean = false;
  constructor(private landInfoService: LandInfoService, public modalController: ModalController) {
    this.landData = [];
    let that = this;
    let user = "X";
    this.dataLoaded = false;
    this.landInfoService.getJSON().subscribe((datas) => {
      let cur = 0;
      for (const data of datas) {
        cur++;
        if (user === "X") {
          if (cur === 33) {
            data["mortgage"] = true;
          } else {
            data["mortgage"] = false;
          }
         
          if(data && cur > 32 && cur<39)
            that.landData.push(data);
          if (cur > 39) {
            break;
          }
         
        }
        else{
          if (cur === 3) {
            data["mortgage"] = true;
          } else {
            data["mortgage"] = false;
          }
          if(cur === 4){           
            data.Deed_No = 548;
            data.Title_Deed.Area = "001-নৈহাটী";
          }
          if(data)
            that.landData.push(data);
          if (cur > 5) {
            break;
          }
        }
        
        
      }
      if (user === "X"){
        that.landData.push({
          Deed_No: 549,
          timestamp: 1593277519/700*1000,
          Title_Deed: {
            Area: "001-নৈহাটী",
            Sub_District: "Savar",
            Mark: [
              {
                Mark_No: 208
              }
            ]
          },
          
        });
      }
      that.dataLoaded = true;
    });
  }

  ngOnInit() {}


    
  checkMortage(hasMortgage) {
    if(hasMortgage)
      return hasMortgage.hasOwnProperty('mortgage') ? hasMortgage.mortgage : false;
    return false;
  }

  async mortgage(){
    const modal = await this.modalController.create({
      component: MortageModalPage,
    });
    return await modal.present();
  }

  getReport(){
    setTimeout(() => {
      window.open('../../../assets/NimbusDeed.pdf');
      
    }, 1000);
  }
  
}
