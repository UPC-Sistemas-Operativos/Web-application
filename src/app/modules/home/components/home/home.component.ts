import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  reviews = [
    { user: 'Ana', comment: '¡Me encanta mi perfume personalizado!', rating: 5 },
    { user: 'Carlos', comment: 'Buena calidad y fragancias duraderas.', rating: 4 },
    { user: 'María', comment: 'La experiencia de personalización fue increíble.', rating: 5 }
  ];

  getStars(rating: number) {
    return Array(rating).fill(0);
  }
}
