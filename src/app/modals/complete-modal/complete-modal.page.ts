import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-complete-modal',
  templateUrl: './complete-modal.page.html',
  styleUrls: ['./complete-modal.page.scss'],
})
export class CompleteModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

}
