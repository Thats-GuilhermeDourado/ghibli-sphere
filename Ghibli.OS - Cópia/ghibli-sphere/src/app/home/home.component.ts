import { Component, signal, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { UserService } from '../core/services/user.service';

register();

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Injeção do Serviço de Usuário
  public userService = inject(UserService);

  // Estados do Modal de Avatar
  isAvatarModalOpen = signal(false);
  selectedAvatar = signal<string>('');

  // Lista de avatares 
  availableAvatars = [
    'avatars/test.jpg',
    'avatars/avatar2.jpg',
    'avatars/avatar3.jpg',
    'avatars/avatar4.jpg',
  ];

  // Lista de filmes
  movies = signal([
    {
      title: 'Spirited Away',
      description: 'Chihiro wanders into a magical world where gods and spirits live.',
      heroImage: '/background/spiritedawayoverview1.jpg',
      thumbnail: '/thumbnails/chihiro.jpg',
      logoUrl: '/titles/spirited-away-logo.png',
      matchScore: 99,
      year: 2001,
      genres: ['Fantasy', 'Adventure'],
      duration: '2h 5m',
      rating: 'PG'
    },
    {
      title: 'Princess Mononoke',
      description: 'A young warrior searches for a cure for a deadly curse.',
      heroImage: '/background/mononoke.jpg',
      thumbnail: '/thumbnails/mononokeart.jpg',
      logoUrl: '/titles/Princess_Mononoke_Logo.png',
      matchScore: 95,
      year: 1997,
      genres: ['Action', 'Fantasy'],
      duration: '2h 14m',
      rating: 'PG-13'
    },
    {
      title: 'My Neighbor Totoro',
      description: 'Two sisters move to the countryside and discover magical creatures.',
      heroImage: '/background/totoro-bg.jpg',
      thumbnail: '/thumbnails/totoro-thumb.jpg',
      logoUrl: '/titles/totoro-logo.png',
      matchScore: 98,
      year: 1988,
      genres: ['Family', 'Fantasy'],
      duration: '1h 26m',
      rating: 'G'
    },
    {
      title: 'Howl\'s Moving Castle',
      description: 'A young woman is cursed by a witch and taken in by a wizard.',
      heroImage: '/background/howl-bg.jpg',
      thumbnail: '/thumbnails/howl-thumb.jpg',
      logoUrl: '/titles/howl-logo.png',
      matchScore: 94,
      year: 2004,
      genres: ['Fantasy', 'Romance'],
      duration: '1h 59m',
      rating: 'PG'
    },
    {
      title: 'Kiki\'s Delivery Service',
      description: 'A young witch starts a delivery service in a new town.',
      heroImage: '/background/kiki-bg.jpg',
      thumbnail: '/thumbnails/kiki-thumb.jpg',
      logoUrl: '/titles/kiki-logo.png',
      matchScore: 96,
      year: 1989,
      genres: ['Adventure', 'Family'],
      duration: '1h 42m',
      rating: 'G'
    }
  ]);

  activeMovie = signal(this.movies()[0]);
  isTransitioning = signal(false);

  ngOnInit() {
    this.preloadImages();
    // Define o avatar atual como selecionado inicialmente no modal
    this.selectedAvatar.set(this.userService.currentAvatar());
  }

  // FUNÇÕES DO MODAL
  openAvatarModal() {
    this.isAvatarModalOpen.set(true);
  }

  closeModal() {
    this.isAvatarModalOpen.set(false);
  }

  selectAvatar(path: string) {
    this.selectedAvatar.set(path);
  }

  confirmSelection() {
    this.userService.changeAvatar(this.selectedAvatar());
    this.closeModal();
  }

  preloadImages() {
    this.movies().forEach(movie => {
      const img1 = new Image();
      img1.src = movie.heroImage;
      
      if (movie.thumbnail) {
        const img2 = new Image();
        img2.src = movie.thumbnail;
      }
    });
  }

  selectMovie(movie: any) {
    if (this.isTransitioning() || movie.title === this.activeMovie().title) {
      return;
    }

    this.isTransitioning.set(true);
    
    // Efeito de transição
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      heroContent.classList.add('fading-out');
    }
    
    setTimeout(() => {
      this.activeMovie.set(movie);
      
      setTimeout(() => {
        if (heroContent) {
          heroContent.classList.remove('fading-out');
          heroContent.classList.add('fading-in');
        }
        
        setTimeout(() => {
          if (heroContent) {
            heroContent.classList.remove('fading-in');
          }
          this.isTransitioning.set(false);
        }, 500);
      }, 100);
    }, 300);
  }

  isActiveMovie(movie: any): boolean {
    return movie.title === this.activeMovie().title;
  }
}