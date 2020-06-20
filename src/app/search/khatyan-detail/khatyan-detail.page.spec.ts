import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhatyanDetailPage } from './khatyan-detail.page';

describe('KhatyanDetailPage', () => {
  let component: KhatyanDetailPage;
  let fixture: ComponentFixture<KhatyanDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhatyanDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhatyanDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
