import { Component, OnInit } from '@angular/core';
import { LandInfoService } from "../../land-info.service";
@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
})
export class RequestsPage implements OnInit {

  constructor(private landInfoService: LandInfoService) { }
  buyLandData:any = [];
  sellLandData:any  = [];
  
  ngOnInit() {
    let buyTs = [1593273988, 1555067238, 	1552367112, 1547557811, 1530118736]
    let sellTs = [1579061170, 1568868093, 1530118736]
    let bTIndex =0, sTIndex=0;
    let that = this;
    this.landInfoService.getJSON().subscribe((datas) => {
      let cur = 0;
      for (const data of datas) {
        cur++;
        console.log(data.Title_Deed);
        if (cur > 50 && cur < 56) {
          that.sellLandData['time'] = buyTs[bTIndex]
          bTIndex++;
          that.sellLandData.push(data)
        }
        if (cur > 1 && cur < 5) {
          if(cur === 3){
            console.log(data);
            
            data.Buyer.Name = "Mr. X";
            data.Title_Deed.Area = "001-নৈহাটী";
            data.Title_Deed.Sub_District = "Savar";
          }
          that.buyLandData['time'] = sellTs[sTIndex]
          sTIndex++;
          that.buyLandData.push(data)
        }
        if(cur > 56)
          break;
        
      }
    });
  }
  approveSell(){

  }

  approveBuy(){

  }

}
