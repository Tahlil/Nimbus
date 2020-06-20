import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('welcome') welcome: ElementRef;
  constructor() {
    
  }

  ngAfterViewInit() {
    let that = this
    setTimeout(function() {
      console.log(that.welcome);
      that.welcome.nativeElement.classList.remove('hidden');
    },1000);
  }

}
