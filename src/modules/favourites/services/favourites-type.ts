export { Artist } from '../../artists/services/artist-type';
export { Band } from '../../bands/services/band-type';
export { Track } from '../../tracks/services/track-type';
export { IGenre } from '../../genres/services/genre-type';

export interface IFavourite {
  id: string;
  userId: string;
  bandsIds: string[];
  genresIds: string[];
  artistsIds: string[];
  tracksIds: string[];
}

export type Favourites = {
  id: number;
  userId: number;
  bands: object[];
  genres: object[];
  artists: object[];
  tracks: object[];
};
