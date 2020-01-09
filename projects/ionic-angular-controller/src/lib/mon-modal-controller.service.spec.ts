import { TestBed } from '@angular/core/testing';

import { MonModalController } from './mon-modal-controller.service';

describe('MonModalController', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonModalController = TestBed.get(MonModalController);
    expect(service).toBeTruthy();
  });
});
