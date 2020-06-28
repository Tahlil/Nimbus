import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompleteModalPage } from './complete-modal.page';

describe('CompleteModalPage', () => {
  let component: CompleteModalPage;
  let fixture: ComponentFixture<CompleteModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompleteModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
