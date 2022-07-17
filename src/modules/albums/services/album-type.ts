export { Artist } from '../../artists/services/artist-type';
export { Band } from '../../bands/services/band-type';
export { Track } from '../../tracks/services/track-type';
export { IGenre } from '../../genres/services/genre-type';

export interface IAlbum {
  id: string;
  name: string;
  released: number;
  artistsIds: string[];
  bandsIds: string[];
  trackIds: string[];
  genresIds: string[];
  image: string;
}

export type Album = {
  id: string;
  name: string;
  released: number;
  artists: object[];
  bands: object[];
  tracks: object[];
  genres: object[];
  image: string;
};
