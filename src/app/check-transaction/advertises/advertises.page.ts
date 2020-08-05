import { Component, OnInit } from '@angular/core';
import { LandInfoService } from "../../land-info.service";
import { ModalController } from '@ionic/angular';
import { AdModalPage } from '../../modals/ad-modal/ad-modal.page';


import { CompleteModalPage } from '../../modals/complete-modal/complete-modal.page';


@Component({
  selector: 'app-advertises',
  templateUrl: './advertises.page.html',
  styleUrls: ['./advertises.page.scss'],
})
export class AdvertisesPage implements OnInit {
  advertises:any = [];
  constructor(private landInfoService: LandInfoService, public modalController: ModalController) { }

  ngOnInit() {
    let that = this;
    this.landInfoService.getJSON().subscribe((datas) => {
      let cur = 0;
      
      for (const data of datas) {
        cur++;         
          if(data && cur > 111 && cur<123)
            that.advertises.push(data);
          if (cur > 124) {
            break;
          }
        }
        // that.advertises.push({
        //   Deed_No: 548,
        //   Buyer: {
        //    Name:
        //   },
        //   timestamp: 1593277519/700*1000,
        //   Title_Deed: {
        //     Area: "001-নৈহাটী",
        //     Sub_District: "Savar",
        //     Mark: [
        //       {
        //         Mark_No: 208
        //       }
        //     ]
        //   },
          
        // });
        

    });
  }

  round(num){
    return Math.round(num);
  }

  async openCompleteModal(){
    const modal = await this.modalController.create({
      component: CompleteModalPage,
      componentProps: { 
        title: 'Advertise Status',
        body: 'Successfully added to advertisement.'
      }
    });
    return await modal.present();
  }

  async getLandList(){
    let that = this;
    const modal = await this.modalController.create({
      component: AdModalPage,
    });
    modal.onDidDismiss().then(() => {
      setTimeout(() => {
        that.openCompleteModal();
      }, 2000);
    });
    return await modal.present();
  }

}
