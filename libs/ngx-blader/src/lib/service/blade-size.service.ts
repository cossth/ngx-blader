import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BladeSizeService {

  private _containerHeight = 320;
  public get containerHeight() : number {
    return this._containerHeight;
  }
  public set containerHeight(v : number) {
    console.log(v);
    this._containerHeight = v;
  }


}
