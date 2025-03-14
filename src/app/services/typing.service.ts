import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TypingService {
  async typeText(element: HTMLElement, text: string, speed = 50) {
    element.innerHTML = '';
    for (let char of text) {
      element.innerHTML += char;
      await new Promise(resolve => setTimeout(resolve, speed));
    }
  }
}
