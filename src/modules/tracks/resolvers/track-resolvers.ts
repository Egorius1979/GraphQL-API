import { transform, getFromIdsArray, deleteMessage, setQuery } from '../../../common-handlers';
import { ITrack, Track, Album, Band, IGenre } from '../services/track-type';

export const trackResolvers = {
  Query: {
    track: async (_, { id }: ITrack, { dataSources }): Promise<Track> => {
      const res = await dataSources.trackAPI.getTrack(id);
      return transform(res);
    },
    tracks: async (_, { offset, limit }, { dataSources }): Promise<Track[]> => {
      const query = setQuery(offset, limit);
      const { items: res } = await dataSources.trackAPI.getAllTracks(query);
      return res.map((it: Track) => transform(it));
    },
  },
  Track: {
    albums: ({ albumId }: ITrack, __, { dataSources }): Promise<Album[]> => {
      return getFromIdsArray([albumId], dataSources.albumAPI, 'getAlbum');
    },
    bands: ({ bandsIds }: ITrack, __, { dataSources }): Promise<Band[]> => {
      return getFromIdsArray(bandsIds, dataSources.bandAPI, 'getBand');
    },
    genres: ({ genresIds }: ITrack, __, { dataSources }): Promise<IGenre[]> => {
      return getFromIdsArray(genresIds, dataSources.genreAPI, 'getGenre');
    },
  },

  Mutation: {
    createTrack: async (_, track: ITrack, { dataSources }): Promise<Track> => {
      const res = await dataSources.trackAPI.createTrack(track);
      return transform(res);
    },
    updateTrack: async (_, update: ITrack, { dataSources }): Promise<Track> => {
      const res = await dataSources.trackAPI.updateTrack(update);
      return transform(res);
    },
    deleteTrack: async (_, { id }: ITrack, { dataSources }) => {
      await dataSources.trackAPI.deleteTrack(id);
      return deleteMessage;
    },
  },
};
