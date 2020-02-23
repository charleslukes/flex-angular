import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSingleComponent } from './recipe-single.component';

describe('RecipeSingleComponent', () => {
  let component: RecipeSingleComponent;
  let fixture: ComponentFixture<RecipeSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
