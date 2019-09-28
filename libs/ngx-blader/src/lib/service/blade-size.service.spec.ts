/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BladeSizeService } from './blade-size.service';

describe('Service: BladeSize', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BladeSizeService]
    });
  });

  it('should ...', inject([BladeSizeService], (service: BladeSizeService) => {
    expect(service).toBeTruthy();
  }));
});
