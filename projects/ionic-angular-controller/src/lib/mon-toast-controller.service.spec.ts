import { TestBed } from '@angular/core/testing';

import { MonToastController } from './mon-toast-controller.service';

describe('MonToastController', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonToastController = TestBed.get(MonToastController);
    expect(service).toBeTruthy();
  });
});
