import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-approve-modal',
  templateUrl: './approve-modal.page.html',
  styleUrls: ['./approve-modal.page.scss'],
})
export class ApproveModalPage implements OnInit {
  title:string;
  body:string;
  
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    verifyBank();
  }

  
  dismiss() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

}
