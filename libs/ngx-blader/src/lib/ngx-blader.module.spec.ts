import { async, TestBed } from '@angular/core/testing';
import { NgxBladerModule } from './ngx-blader.module';

describe('NgxBladerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxBladerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgxBladerModule).toBeDefined();
  });
});
