import { TestBed } from '@angular/core/testing';

import { MonAlertController } from './mon-alert-controller.service';

describe('MonAlertController', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonAlertController = TestBed.get(MonAlertController);
    expect(service).toBeTruthy();
  });
});
