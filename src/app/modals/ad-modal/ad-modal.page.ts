import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LandInfoService } from "../../land-info.service";
function verifyBank(){
  var bankV = document.getElementById('bankV');
  bankV.onclick = function() {
    bankV.innerHTML = "Verifying..."
    // bankV.setAttribute("disabled", "disabled");
    document.getElementById('spinner2').style.visibility = "visible";
    setTimeout(() => {
      document.getElementById('spinner2').style.visibility = "hidden";
      document.getElementById('success-checkmark2').style.display = "block";
      document.getElementById('check-icon2').style.display = "block";
      bankV.innerHTML = "Verified !";
      bankV.style.background = "#fff";
      bankV.style.border = "3px solid #4CAF50"
      bankV.style.color = "#4CAF50";
    }, 3000);
  }
}

function getBankImage(selected){
  document.getElementById("bankLogo").setAttribute("src", "../../assets/img/" + selected+".png")
}
@Component({
  selector: 'app-ad-modal',
  templateUrl: './ad-modal.page.html',
  styleUrls: ['./ad-modal.page.scss'],
})
export class AdModalPage implements OnInit {
  landData = [];
  selectedDiv:string;
  constructor(private landInfoService: LandInfoService,private modalCtrl: ModalController) { }

  ngOnInit() {
    verifyBank();
    let that = this;
    this.landInfoService.getJSON().subscribe((datas) => {
      let cur = 0;
      for (const data of datas) {  
        //39
          if(data && cur > 32 && cur<36 && cur !== 34)
            that.landData.push(data);
          if (cur > 39) {
            break;
          }
          cur++;
      }
        // that.landData.push({
        //   timestamp: 1593277519/700*1000,
        //   Title_Deed: {
        //     Area: "001-নৈহাটী",
        //     Sub_District: "Savar",
        //     Mark: [
        //       {
        //         Mark_No: 208
        //       }
        //     ]
        //   }});
 
    });
  }

  dismiss() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  checkDivSelect(){
    getBankImage(this.selectedDiv);
  }

}
