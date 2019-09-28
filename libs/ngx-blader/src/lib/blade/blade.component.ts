import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'blade',
  templateUrl: './blade.component.html',
  styleUrls: ['./blade.component.scss']
})
export class BladeComponent implements OnInit {
  @Input() icon: any;
  @Input() title = 'Blade Title';

  private _isMaximized = false;
  public get isMaximized(): boolean {
    return this._isMaximized;
  }
  public set isMaximized(v: boolean) {
    if (v) {
      this.elRef.nativeElement.classList.add('maximized');
    } else {
      this.elRef.nativeElement.classList.remove('maximized');
    }
    this._isMaximized = v;
  }

  constructor(private elRef: ElementRef) {}

  ngOnInit() {}
}
