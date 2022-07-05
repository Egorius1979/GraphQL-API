export interface IBand {
  id: string;
  name: string;
  origin: string;
  membersId: IMember[];
  website: string;
  genresIds: string[];
}

interface IMember {
  artistId: string;
  instrument: String;
  years: [String];
}
