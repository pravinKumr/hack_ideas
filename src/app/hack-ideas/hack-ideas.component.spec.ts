import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackIdeasComponent } from './hack-ideas.component';

describe('HackIdeasComponent', () => {
  let component: HackIdeasComponent;
  let fixture: ComponentFixture<HackIdeasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackIdeasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HackIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
