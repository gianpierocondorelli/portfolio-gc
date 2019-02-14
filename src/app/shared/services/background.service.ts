import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  private backgroundImgSubject = new Subject<string>();
  private backgroundColorSubject = new Subject<string>();

  constructor() { }

  public sendNewImgBackground(backgroundUrl: string) {
    this.backgroundImgSubject.next(backgroundUrl);
  }

  public getNewImgBackground(): Observable<string> {
    return this.backgroundImgSubject.asObservable();
  }

  public sendNewColorBackground(backgroundClass: string) {
    this.backgroundColorSubject.next(backgroundClass);
  }

  public getNewColorBackground(): Observable<string> {
    return this.backgroundColorSubject.asObservable();
  }
}
