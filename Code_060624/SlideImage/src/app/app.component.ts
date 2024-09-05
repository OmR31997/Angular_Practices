import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SlideImage';
  images: string[] = ['https://m.media-amazon.com/images/I/51Xjv4IzydL._SY445_SX342_.jpg',
                    'https://m.media-amazon.com/images/I/41XVD5lLWXL._SY445_SX342_.jpg',
                    'https://m.media-amazon.com/images/I/71dNsRuYL7L._SY425_.jpg',
                    'https://m.media-amazon.com/images/I/41kRkqIt6aL._SY445_SX342_.jpg',
                    'https://m.media-amazon.com/images/I/71hwRCK50DL._SY425_.jpg',
                    'https://m.media-amazon.com/images/I/41J4aUqx7iL._SY445_SX342_.jpg',
                    'https://m.media-amazon.com/images/I/41Mg0r86zvL._SY445_SX342_.jpg',
                    'https://m.media-amazon.com/images/I/411WJR1RXgL._SY445_SX342_.jpg',
                    'https://m.media-amazon.com/images/I/61DKHdZ+x1L._SX342_SY445_.jpg',
                    'https://m.media-amazon.com/images/I/51YP7fM361S._SX342_SY445_.jpg'];
  currentIndex: number = 0;

  moveLeft(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  moveRight(): void {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    }
  }
}