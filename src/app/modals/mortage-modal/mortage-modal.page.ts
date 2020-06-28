import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

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
  selector: 'app-mortage-modal',
  templateUrl: './mortage-modal.page.html',
  styleUrls: ['./mortage-modal.page.scss'],
})
export class MortageModalPage implements OnInit {
  selectedDiv:string;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    verifyBank();
  }

  dismiss() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  checkDivSelect(){
    getBankImage(this.selectedDiv);
  }

}
