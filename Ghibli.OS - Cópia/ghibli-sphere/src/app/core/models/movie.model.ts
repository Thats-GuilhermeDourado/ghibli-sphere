export interface Movie {
  id: string;
  title: string;
  description: string;
  year: number;
  matchScore: number;
  genres: string[];
  heroImage: string; // Imagem de fundo (Wallpaper)
  posterImage: string; // Imagem vertical do card
  logoUrl?: string; // Logo estilizada do filme (como na Imagem 1)
}