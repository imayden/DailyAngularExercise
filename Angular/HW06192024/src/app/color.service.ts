import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ColorService {

  private colorSubject = new BehaviorSubject<string>('black');

  currentColor$ = this.colorSubject.asObservable();

  changeColor(color: string): void {
    this.colorSubject.next(color);
  }
}
