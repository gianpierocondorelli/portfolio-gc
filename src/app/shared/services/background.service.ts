import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  private backgroundSubject = new Subject<string>();

  constructor() { }

  public sendNewBackground(backgroundUrl: string) {
    this.backgroundSubject.next(backgroundUrl);
  }

  public getNewBackground(): Observable<string> {
    return this.backgroundSubject.asObservable();
  }
}
