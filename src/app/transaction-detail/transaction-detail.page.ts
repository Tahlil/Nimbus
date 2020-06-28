import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from "@angular/router";

import { CompleteModalPage } from '../modals/complete-modal/complete-modal.page';
function verifyBank(){
  var bankV = document.getElementById('bankV');
  bankV.onclick = function() {
    bankV.innerHTML = "Verifying..."
    bankV.setAttribute("disabled", "disabled");
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
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.page.html',
  styleUrls: ['./transaction-detail.page.scss'],
})
export class TransactionDetailPage implements OnInit {
  selectedDiv:string;
  constructor(public modalController: ModalController, private router: Router) { }

  checkDivSelect(){
    getBankImage(this.selectedDiv);
  }

  ngOnInit() {
    verifyBank();
  }

  async openModal(){
    let that = this;
      const modal = await this.modalController.create({
        component: CompleteModalPage,
        componentProps: { 
          title: 'Simple contract Status',
          body: 'Successfully added your information to the contract.'
        }
      });
      modal.onDidDismiss().then(() => {
        that.router.navigate(['/', 'option']);
      });
      setTimeout(async () => {
        return await modal.present();
      }, 2000);
      
  }

}
