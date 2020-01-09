import { TestBed } from '@angular/core/testing';

import { MonPopoverController } from './mon-popover-controller.service';

describe('MonPopoverController', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonPopoverController = TestBed.get(MonPopoverController);
    expect(service).toBeTruthy();
  });
});
