import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  isMinimised: boolean = true;

  toggleMinimised() {
    this.isMinimised = !this.isMinimised;
  }
}
