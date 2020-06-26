import { Component, OnInit } from '@angular/core';

function verify(){
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
    verify()
  }

}
