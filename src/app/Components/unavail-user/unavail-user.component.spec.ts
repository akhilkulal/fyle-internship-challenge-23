import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnavailUserComponent } from './unavail-user.component';

describe('UnavailUserComponent', () => {
  let component: UnavailUserComponent;
  let fixture: ComponentFixture<UnavailUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnavailUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnavailUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
