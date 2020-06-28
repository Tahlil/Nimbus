import { Component, OnInit } from '@angular/core';
import { LandInfoService } from "../../land-info.service";
import { ModalController } from '@ionic/angular';
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

    });
  }

}
