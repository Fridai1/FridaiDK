import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternateHomepageComponent } from './alternate-homepage.component';

describe('AlternateHomepageComponent', () => {
  let component: AlternateHomepageComponent;
  let fixture: ComponentFixture<AlternateHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlternateHomepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlternateHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
