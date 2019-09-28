/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BladeContainer } from './container.component';

describe('ContainerComponent', () => {
  let component: BladeContainer;
  let fixture: ComponentFixture<BladeContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BladeContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BladeContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
