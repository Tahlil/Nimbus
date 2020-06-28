import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfirmModalPage } from '../modals/confirm-modal/confirm-modal.page';
import { Router } from "@angular/router";

function verifyNID(){
  var nidV = document.getElementById('nidV');
  nidV.onclick = function() {
    nidV.innerHTML = "Verifying..."
    nidV.setAttribute("disabled", "disabled");
    document.getElementById('spinner').style.visibility = "visible";
    setTimeout(() => {
      document.getElementById('spinner').style.visibility = "hidden";
      document.getElementById('success-checkmark').style.display = "block";
      document.getElementById('check-icon').style.display = "block";
      nidV.innerHTML = "Verified !";
      nidV.style.background = "#fff";
      nidV.style.border = "3px solid #4CAF50"
      nidV.style.color = "#4CAF50";
    }, 3000);
  }
}

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

function callImageLoader() {
  var uploader = document.createElement('input'),
    image = document.getElementById('img-result');

  uploader.type = 'file';
  uploader.accept = 'image/*';

  image.onclick = function() {
    uploader.click();
  }

  uploader.onchange = function() {
    var reader = new FileReader();
    reader.onload = function(evt) {
      image.classList.remove('no-image');
      image.style.backgroundImage = 'url(' + evt.target.result + ')';
      var request = {
        itemtype: 'test 1',
        brand: 'test 2',
        images: [{
          data: evt.target.result
        }]
      };
      
     
      document.querySelector('.upload-result__content').innerHTML = JSON.stringify(request, null, '  ');
    }
    reader.readAsDataURL(uploader.files[0]);
  }
};

function getBankImage(selected){
  document.getElementById("bankLogo").setAttribute("src", "../../assets/img/" + selected+".png")
}

@Component({
  selector: 'app-auth',
  templateUrl: './signup.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class SignUpPage implements OnInit {
  selectedDiv:string;
  
  constructor(public modalController: ModalController, private router: Router) { }

  checkDivSelect(){
    getBankImage(this.selectedDiv);
  }

  ngOnInit() {
    callImageLoader();
    verifyNID();
    verifyBank();
  }

  async openModal(){
    const modal = await this.modalController.create({
      component: ConfirmModalPage,
    });
    let that = this;
    modal.onDidDismiss().then(() => {
      that.router.navigate(['/', 'home']);
    });
    return await modal.present();
  }

}
