import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('welcome') welcome: ElementRef;
  @ViewChild('to') to: ElementRef;
  constructor() {
    
  }

  ngAfterViewInit() {
    let that = this
    setTimeout(function() {
      that.welcome.nativeElement.classList.remove('hidden');

    },1000);
  }

}
