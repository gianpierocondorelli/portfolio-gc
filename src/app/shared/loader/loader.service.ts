import { Injectable } from '@angular/core'
import { Subject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loaderSubject = new Subject<boolean>()

  constructor() {}

  sendNewLoaderStatus(status: boolean) {
    this.loaderSubject.next(status)
  }

  getLoaderStatus(): Observable<boolean> {
    return this.loaderSubject.asObservable()
  }
}
