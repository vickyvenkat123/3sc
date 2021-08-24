import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceResComponent } from './exce-res.component';

describe('ExceResComponent', () => {
  let component: ExceResComponent;
  let fixture: ComponentFixture<ExceResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExceResComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExceResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
