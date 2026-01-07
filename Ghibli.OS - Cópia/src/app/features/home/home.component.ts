import { Component, signal, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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

  // Lista de filmes com todas as propriedades necessárias
  movies = signal([
    {
      title: 'Spirited Away',
      description: 'Chihiro wanders into a magical world where gods and spirits live.',
      heroImage: 'background/spiritedawayoverview1.jpg',
      thumbnail: 'thumbnails/chihiro.jpg',
      cardImage: 'thumbnails/thumb1.jpg',
      logoUrl: 'titles/spirited-away-logo.png',
      matchScore: 99,
      year: 2001,
      genres: ['Fantasy', 'Adventure'],
      duration: '2h 5m',
      rating: 'PG'
    },
    {
      title: 'Princess Mononoke',
      description: 'A young warrior searches for a cure for a deadly curse.',
      heroImage: 'background/mononoke.jpg',
      thumbnail: 'thumbnails/mononokeart.jpg',
      cardImage: 'thumbnails/thumb2.jpg',
      logoUrl: 'titles/Princess_Mononoke_Logo.png',
      matchScore: 95,
      year: 1997,
      genres: ['Action', 'Fantasy'],
      duration: '2h 14m',
      rating: 'PG-13'
    },
    {
      title: 'My Neighbor Totoro',
      description: 'Two sisters move to the countryside and discover magical creatures.',
      heroImage: 'background/totoro-bg.jpg',
      thumbnail: 'thumbnails/totoro-thumb.jpg',
      cardImage: 'thumbnails/thumb3.jpg',
      logoUrl: 'titles/totoro-logo.png',
      matchScore: 98,
      year: 1988,
      genres: ['Family', 'Fantasy'],
      duration: '1h 26m',
      rating: 'G'
    },
    {
      title: 'Howl\'s Moving Castle',
      description: 'A young woman is cursed by a witch and taken in by a wizard.',
      heroImage: 'background/howl-bg.jpg',
      thumbnail: 'thumbnails/howl-thumb.jpg',
      cardImage: 'thumbnails/thumb4.jpg',
      logoUrl: 'titles/howl-logo.png',
      matchScore: 94,
      year: 2004,
      genres: ['Fantasy', 'Romance'],
      duration: '1h 59m',
      rating: 'PG'
    },
    {
      title: 'Kiki\'s Delivery Service',
      description: 'A young witch starts a delivery service in a new town.',
      heroImage: 'background/kiki-bg.jpg',
      thumbnail: 'thumbnails/kiki-thumb.jpg',
      cardImage: 'thumbnails/thumb6.jpg',
      logoUrl: 'titles/kiki-logo.png',
      matchScore: 96,
      year: 1989,
      genres: ['Adventure', 'Family'],
      duration: '1h 42m',
      rating: 'G'
    },
    {
      title: 'Grave of the Fireflies',
      description: 'A heartbreaking story of two siblings during World War II.',
      heroImage: 'background/grave-fireflies.jpg',
      thumbnail: 'thumbnails/fireflies-thumb.jpg',
      cardImage: 'thumbnails/thumb7.png',
      logoUrl: 'titles/fireflies-logo.png',
      matchScore: 100,
      year: 1988,
      genres: ['Drama', 'War'],
      duration: '1h 29m',
      rating: 'PG-13'
    },
    {
      title: 'Ponyo',
      description: 'A goldfish princess becomes human after meeting a young boy.',
      heroImage: 'background/ponyo-bg.jpg',
      thumbnail: 'thumbnails/ponyo-thumb.jpg',
      cardImage: 'thumbnails/thumb8.jpg',
      logoUrl: 'titles/ponyo-logo.png',
      matchScore: 92,
      year: 2008,
      genres: ['Fantasy', 'Adventure'],
      duration: '1h 41m',
      rating: 'G'
    }
  ]);

  activeMovie = signal(this.movies()[0]);
  isTransitioning = signal(false);

  constructor() {
    // Define o avatar atual como selecionado inicialmente no modal
    this.selectedAvatar.set(this.userService.currentAvatar());
    this.preloadImages();
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

  // Adicione estas funções à sua classe HomeComponent:

// Gradientes premium estilo Disney+
private premiumGradients = [
  'linear-gradient(135deg, rgba(0, 212, 255, 0.3) 0%, rgba(9, 9, 121, 0.4) 35%, rgba(2, 0, 36, 0.7) 100%)',
  'linear-gradient(135deg, rgba(255, 0, 212, 0.3) 0%, rgba(121, 9, 98, 0.4) 35%, rgba(36, 0, 28, 0.7) 100%)',
  'linear-gradient(135deg, rgba(255, 212, 0, 0.3) 0%, rgba(121, 98, 9, 0.4) 35%, rgba(36, 28, 0, 0.7) 100%)',
  'linear-gradient(135deg, rgba(0, 255, 136, 0.3) 0%, rgba(9, 121, 78, 0.4) 35%, rgba(0, 36, 18, 0.7) 100%)',
  'linear-gradient(135deg, rgba(255, 136, 0, 0.3) 0%, rgba(121, 78, 9, 0.4) 35%, rgba(36, 18, 0, 0.7) 100%)',
  'linear-gradient(135deg, rgba(136, 0, 255, 0.3) 0%, rgba(78, 9, 121, 0.4) 35%, rgba(18, 0, 36, 0.7) 100%)',
  'linear-gradient(135deg, rgba(255, 0, 0, 0.3) 0%, rgba(121, 9, 9, 0.4) 35%, rgba(36, 0, 0, 0.7) 100%)'
];

private hoverColors = [
  'rgba(0, 212, 255, 0.15)',
  'rgba(255, 0, 212, 0.15)',
  'rgba(255, 212, 0, 0.15)',
  'rgba(0, 255, 136, 0.15)',
  'rgba(255, 136, 0, 0.15)',
  'rgba(136, 0, 255, 0.15)',
  'rgba(255, 0, 0, 0.15)'
];

getCardGradient(index: number): string {
  return this.premiumGradients[index % this.premiumGradients.length];
}

getHoverColor(index: number): string {
  return this.hoverColors[index % this.hoverColors.length];
}

getActiveIndex(): number {
  return this.movies().findIndex(m => m.title === this.activeMovie().title);
}

scrollCards(direction: number): void {
  const currentIndex = this.getActiveIndex();
  const newIndex = (currentIndex + direction + this.movies().length) % this.movies().length;
  this.selectMovie(this.movies()[newIndex]);
  
  // Scroll suave para o card
  setTimeout(() => {
    const container = document.querySelector('.premium-flexcards-container');
    const activeCard = document.querySelector('.premium-flexcard.active');
    if (container && activeCard) {
      activeCard.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, 100);
}
}
