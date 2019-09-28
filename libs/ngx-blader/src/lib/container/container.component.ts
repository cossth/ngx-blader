import { Component, OnInit, HostListener, HostBinding, ElementRef } from '@angular/core';
import { BladeSizeService } from '../service/blade-size.service';

@Component({
  selector: 'blade-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  providers: [BladeSizeService]
})
export class BladeContainer implements OnInit {
  @HostListener('resize', ['$event'])
  setHeight(e) {
    console.log(this.elref.nativeElement);
  }
  constructor(private __bss: BladeSizeService, private elref: ElementRef) {
    setTimeout(() => {
      console.log(elref.nativeElement.offsetHeight);
    }, 2000);
  }

  ngOnInit() {}
}
