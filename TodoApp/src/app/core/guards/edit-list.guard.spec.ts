import { TestBed } from '@angular/core/testing';

import { EditListGuard } from './edit-list.guard';

describe('EditListGuard', () => {
  let guard: EditListGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EditListGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
