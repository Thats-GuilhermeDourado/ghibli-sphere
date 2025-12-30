import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // Filme ativo controlado por Signal
  activeMovie = signal<any>({
    title: 'Raya and the Last Dragon', // Exemplo da imagem
    logoUrl: 'assets/logos/raya-logo.png',
    heroImage: 'assets/wallpapers/raya-bg.jpg',
    description: 'A Disney Original Film',
    matchScore: 98,
    year: 2021,
    genres: ['Animation', 'Action', 'Adventure']
  });
} 



