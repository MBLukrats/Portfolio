import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioEdicionComponent } from './portfolio-edicion.component';

describe('PortfolioEdicionComponent', () => {
  let component: PortfolioEdicionComponent;
  let fixture: ComponentFixture<PortfolioEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioEdicionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
