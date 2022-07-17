export { Album } from '../../albums/services/album-type';
export { Band } from '../../bands/services/band-type';
export { IGenre } from '../../genres/services/genre-type';

export interface ITrack {
  id: string;
  title: string;
  albumId: string;
  bandsIds: string[];
  duration: number;
  released: number;
  genresIds: string[];
}

export type Track = {
  id: number;
  title: string;
  album: object;
  artists: object[];
  bands: object[];
  duration: number;
  released: number;
  genres: object[];
};
