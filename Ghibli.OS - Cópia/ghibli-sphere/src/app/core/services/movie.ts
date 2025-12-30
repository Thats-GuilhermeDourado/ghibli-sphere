import { Injectable, signal } from '@angular/core';
import { Movie } from '../models/movie.model'; // Lembra daquele model que criamos?

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // Lista de filmes Ghibli como um Signal
  private moviesList = signal<Movie[]>([
    {
      id: '1',
      title: 'Spirited Away',
      description: 'Chihiro wanders into a magical world where gods and spirits live.',
      year: 2001,
      matchScore: 99,
      genres: ['Fantasy', 'Adventure'],
      heroImage: 'https://images.alphacoders.com/605/605592.jpg',
      posterImage: 'https://image.tmdb.org/t/p/original/39wmItS9vSjsO6ABvHzIffWpXpZ.jpg',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Spirited_Away_logo.png/640px-Spirited_Away_logo.png'
    },
    {
      id: '2',
      title: 'My Neighbor Totoro',
      description: 'Two sisters move to the country with their father to be closer to their ill mother.',
      year: 1988,
      matchScore: 95,
      genres: ['Family', 'Fantasy'],
      heroImage: 'https://images.alphacoders.com/132/1321727.png',
      posterImage: 'https://image.tmdb.org/t/p/original/rtGvE4uSXDp6pBEMpSTUr2xdC3m.jpg'
    }
  ]);

  getMovies() {
    return this.moviesList.asReadonly();
  }
}