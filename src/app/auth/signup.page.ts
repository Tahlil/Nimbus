import { Component, OnInit } from '@angular/core';

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

@Component({
  selector: 'app-auth',
  templateUrl: './signup.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class SignUpPage implements OnInit {

  
  constructor() { }

  ngOnInit() {
    callImageLoader();
  }

}
