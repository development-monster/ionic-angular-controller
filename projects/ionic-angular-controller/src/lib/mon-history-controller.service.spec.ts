import { TestBed } from '@angular/core/testing';

import { MonHistoryController } from './mon-history-controller.service';

describe('MonHistoryController', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonHistoryController = TestBed.get(MonHistoryController);
    expect(service).toBeTruthy();
  });
});
