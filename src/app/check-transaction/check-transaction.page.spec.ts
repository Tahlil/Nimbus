import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckTransactionPage } from './check-transaction.page';

describe('CheckTransactionPage', () => {
  let component: CheckTransactionPage;
  let fixture: ComponentFixture<CheckTransactionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckTransactionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckTransactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
