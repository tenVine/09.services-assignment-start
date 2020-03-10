import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {

  activeCount = new EventEmitter<number>();
  inactiveCount = new EventEmitter<number>();

  constructor() { 
  }
}
