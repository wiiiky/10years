import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionFeedsComponent } from './question-feeds.component';

describe('QuestionFeedsComponent', () => {
  let component: QuestionFeedsComponent;
  let fixture: ComponentFixture<QuestionFeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionFeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
