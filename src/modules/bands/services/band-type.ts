export { IGenre } from '../../genres/services/genre-type';

export interface IBand {
  id: string;
  name: string;
  origin: string;
  members: IMember[];
  website: string;
  genresIds: string[];
}

interface IMember {
  artistId: string;
  instrument: String;
  years: [String];
}

export type Band = {
  id: number;
  name: string;
  origin: string;
  members: object[];
  website: string;
  genres: object[];
};
