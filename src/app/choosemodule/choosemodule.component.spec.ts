import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosemoduleComponent } from './choosemodule.component';

describe('ChoosemoduleComponent', () => {
  let component: ChoosemoduleComponent;
  let fixture: ComponentFixture<ChoosemoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosemoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosemoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


