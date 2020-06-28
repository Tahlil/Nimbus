import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdModalPage } from './ad-modal.page';

describe('AdModalPage', () => {
  let component: AdModalPage;
  let fixture: ComponentFixture<AdModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
