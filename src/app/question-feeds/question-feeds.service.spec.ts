import { TestBed, inject } from '@angular/core/testing';

import { QuestionFeedsService } from './question-feeds.service';

describe('QuestionFeedsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionFeedsService]
    });
  });

  it('should be created', inject([QuestionFeedsService], (service: QuestionFeedsService) => {
    expect(service).toBeTruthy();
  }));
});
