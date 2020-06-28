import { Component, OnInit } from '@angular/core';
import { LandInfoService } from "../../land-info.service";
import { ModalController } from '@ionic/angular';
import { ApproveModalPage } from '../../modals/approve-modal/approve-modal.page';
import { Router } from "@angular/router";
@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
})
export class RequestsPage implements OnInit {

  constructor(private landInfoService: LandInfoService, public modalController: ModalController, private router: Router) { }
  buyLandData:any = [];
  sellLandData:any  = [];
  
  ngOnInit() {
    let user = "Y";
    let that = this;
    if(user ==="X"){
      let buyTs = [1593274988, 1555063238, 	1552364112, 1547547811, 1530138736]
      let sellTs = [1579062170, 1568867093, 1530128736]
      let bTIndex =0, sTIndex=0;
  
      this.landInfoService.getJSON().subscribe((datas) => {
        let cur = 0;
        for (const data of datas) {
          cur++;
          console.log(data.Title_Deed);
          if (cur > 60 && cur < 66) {
            data['time'] = buyTs[bTIndex]
            bTIndex++;
            that.sellLandData.push(data)
          }
          if (cur > 34 && cur < 36) {
            // if(cur === 3){
            //   console.log(data);
              
            //   data.Buyer.Name = "Mr. Y";
            //   data.Title_Deed.Area = "001-নৈহাটী";
            //   data.Title_Deed.Sub_District = "Savar";
            // }
            data['time'] = sellTs[sTIndex]
            sTIndex++;
            that.buyLandData.push(data)
          }
          if(cur > 66)
            break;
          
        }
      });
    }
    else{
      let buyTs = [1593273988, 1555067238, 	1552367112, 1547557811, 1530118736]
    let sellTs = [1579061170, 1568868093, 1530118736]
    let bTIndex =0, sTIndex=0;
    this.landInfoService.getJSON().subscribe((datas) => {
      let cur = 0;
      for (const data of datas) {
        cur++;
        console.log(data.Title_Deed);
        if (cur > 50 && cur < 56) {
          data['time'] = buyTs[bTIndex]
          bTIndex++;
          that.sellLandData.push(data)
        }
        if (cur > 3 && cur < 6) {
          if(cur === 4){
            console.log(data);
            
            data.Buyer.Name = "Mr. X";
            data.Title_Deed.Area = "001-নৈহাটী";
            data.Title_Deed.Sub_District = "Savar";
          }
          data['time'] = sellTs[sTIndex]
          sTIndex++;
          that.buyLandData.push(data)
        }
        if(cur > 56)
          break;
        
      }
    });
    }   
  }

  async approveSell(){
    const modal = await this.modalController.create({
      component: ApproveModalPage,
      componentProps: { 
        title: 'Sell Approved',
        body: 'Please proceed to the simple contract.'
      }
    });
    let that = this;
    modal.onDidDismiss().then(() => {
      that.router.navigate(['/', 'transaction', 'detail']);
    });
    return await modal.present();
  }

  async approveBuy(){
    const modal = await this.modalController.create({
      component: ApproveModalPage,
      componentProps: { 
        title: 'Buy Approved',
        body: 'Please proceed to the simple contract.'
      }
    });
    let that = this;
    modal.onDidDismiss().then(() => {
      console.log("Navigate...");
      that.router.navigate(['/', 'transaction', 'detail']);
    });
    return await modal.present();
  }

}
