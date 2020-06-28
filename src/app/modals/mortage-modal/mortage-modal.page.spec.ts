import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MortageModalPage } from './mortage-modal.page';

describe('MortageModalPage', () => {
  let component: MortageModalPage;
  let fixture: ComponentFixture<MortageModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortageModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MortageModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
