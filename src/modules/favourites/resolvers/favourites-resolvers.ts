import { transform, getFromIdsArray } from '../../../common-handlers';
import { IFavourite, Favourites, Band, IGenre, Artist, Track } from '../services/favourites-type';

export const favouriteResolvers = {
  Query: {
    favourites: async (_, __, { dataSources }): Promise<Favourites> => {
      const res = await dataSources.favouriteAPI.getFavourites();
      return transform(res);
    },
  },
  Favourites: {
    bands: ({ bandsIds }: IFavourite, __, { dataSources }): Promise<Band[]> => {
      return getFromIdsArray(bandsIds, dataSources.bandAPI, 'getBand');
    },
    genres: ({ genresIds }: IFavourite, __, { dataSources }): Promise<IGenre[]> => {
      return getFromIdsArray(genresIds, dataSources.genreAPI, 'getGenre');
    },
    artists: ({ artistsIds }: IFavourite, __, { dataSources }): Promise<Artist[]> => {
      return getFromIdsArray(artistsIds, dataSources.artistAPI, 'getArtist');
    },
    tracks: ({ tracksIds }: IFavourite, __, { dataSources }): Promise<Track[]> => {
      return getFromIdsArray(tracksIds, dataSources.trackAPI, 'getTrack');
    },
  },
  Mutation: {
    addTrackToFavourites: async (_, id: object, { dataSources }): Promise<Favourites> => {
      const res = await dataSources.favouriteAPI.addFavourite({ type: 'tracks', ...id });
      return transform(res);
    },
    addBandToFavourites: async (_, id: object, { dataSources }): Promise<Favourites> => {
      const res = await dataSources.favouriteAPI.addFavourite({ type: 'bands', ...id });
      return transform(res);
    },
    addArtistToFavourites: async (_, id: object, { dataSources }): Promise<Favourites> => {
      const res = await dataSources.favouriteAPI.addFavourite({ type: 'artists', ...id });
      return transform(res);
    },
    addGenreToFavourites: async (_, id: object, { dataSources }): Promise<Favourites> => {
      const res = await dataSources.favouriteAPI.addFavourite({ type: 'genres', ...id });
      return transform(res);
    },
  },
};
