import { transform, getFromIdsArray } from '../../../common-handlers';
import { IFavourite } from '../favourites-type';

export const favouriteResolvers = {
  Query: {
    favourites: async (_, __, { dataSources }): Promise<IFavourite[]> => {
      const res = await dataSources.favouriteAPI.getFavourites();
      return transform(res);
    },
  },
  Favourites: {
    bands: ({ bandsIds }: IFavourite, __, { dataSources }) => {
      return getFromIdsArray(bandsIds, dataSources.bandAPI, 'getBand');
    },
    genres: ({ genresIds }: IFavourite, __, { dataSources }) => {
      return getFromIdsArray(genresIds, dataSources.genreAPI, 'getGenre');
    },
    artists: ({ artistsIds }: IFavourite, __, { dataSources }) => {
      return getFromIdsArray(artistsIds, dataSources.artistAPI, 'getArtist');
    },
    tracks: ({ tracksIds }: IFavourite, __, { dataSources }) => {
      return getFromIdsArray(tracksIds, dataSources.trackAPI, 'getTrack');
    },
  },
  Mutation: {
    addTrackToFavourites: async (_, id: object, { dataSources }): Promise<IFavourite> => {
      const res = await dataSources.favouriteAPI.addFavourite({ type: 'tracks', ...id });
      return transform(res);
    },
    addBandToFavourites: async (_, id: object, { dataSources }): Promise<IFavourite> => {
      const res = await dataSources.favouriteAPI.addFavourite({ type: 'bands', ...id });
      return transform(res);
    },
    addArtistToFavourites: async (_, id: object, { dataSources }): Promise<IFavourite> => {
      const res = await dataSources.favouriteAPI.addFavourite({ type: 'artists', ...id });
      return transform(res);
    },
    addGenreToFavourites: async (_, id: object, { dataSources }): Promise<IFavourite> => {
      const res = await dataSources.favouriteAPI.addFavourite({ type: 'genres', ...id });
      return transform(res);
    },
  },
};
