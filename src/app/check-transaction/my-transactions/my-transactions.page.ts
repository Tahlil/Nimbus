import { Component, OnInit } from "@angular/core";
import { LandInfoService } from "../../land-info.service";
@Component({
  selector: "app-my-transactions",
  templateUrl: "./my-transactions.page.html",
  styleUrls: ["./my-transactions.page.scss"],
})
export class MyTransactionsPage implements OnInit {
  landData = [];
  dataLoaded: Boolean = false;
  constructor(private landInfoService: LandInfoService) {
    this.landData = [];
    let that = this;
    this.dataLoaded = false;
    this.landInfoService.getJSON().subscribe((datas) => {
      let cur = 0;
      for (const data of datas) {
        cur++;
        console.log(data.Title_Deed);
        if (cur === 3) {
          data["mortgage"] = true;
        } else {
          data["mortgage"] = false;
        }
        if(data)
          that.landData.push(data);
        if (cur > 5) {
          break;
        }
        
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

  mortgage(){

  }
}
