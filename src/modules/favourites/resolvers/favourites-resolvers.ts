import { IBody, IFavourite } from '../services/favourites-type';
import { transform, getFromIdsArray } from '../../../common-handlers';

export const favouriteResolvers = {
  Query: {
    favorites: async (_, __, { dataSources }): Promise<IFavourite[]> => {
      const { items: res } = await dataSources.favouriteAPI.getFavourites();
      return transform(res);
    },
  },
  Favourites: {
    bands: ({ bandsIds }, __, { dataSources }) => {
      return getFromIdsArray(bandsIds, dataSources.bandAPI, 'getBand');
    },
    genres: ({ genresIds }, __, { dataSources }) => {
      return getFromIdsArray(genresIds, dataSources.genreAPI, 'getGenre');
    },
    artists: ({ artistsIds }, __, { dataSources }) => {
      return getFromIdsArray(artistsIds, dataSources.artistAPI, 'getArtist');
    },
    tracks: ({ tracksIds }, __, { dataSources }) => {
      return getFromIdsArray(tracksIds, dataSources.trackAPI, 'getTrack');
    },
  },
  Mutation: {
    addTrackToFavourites: async (_, track: IBody, { dataSources }) => {
      const res = await dataSources.favouriteAPI.addFavourite(track);
      return transform(res);
    },
    addBandToFavourites: async (_, band: IBody, { dataSources }) => {
      const res = await dataSources.favouriteAPI.addFavourite(band);
      return transform(res);
    },
    addArtistToFavourites: async (_, artist: IBody, { dataSources }) => {
      const res = await dataSources.favouriteAPI.addFavourite(artist);
      return transform(res);
    },
    addGenreToFavourites: async (_, genre: IBody, { dataSources }) => {
      const res = await dataSources.favouriteAPI.addFavourite(genre);
      return transform(res);
    },
  },
};
