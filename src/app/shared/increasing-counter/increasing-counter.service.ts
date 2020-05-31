import { Injectable } from '@angular/core'
import { Subject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class IncreasingCounterService {
  private incCounterSubject = new Subject<boolean>()

  constructor() {}

  getStateIncreasingCounter(): Observable<boolean> {
    return this.incCounterSubject.asObservable()
  }

  setStateIncreasingCounter(state: boolean) {
    this.incCounterSubject.next(state)
  }
}
