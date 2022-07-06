import { transform, getFromIdsArray, deleteMessage, setQuery } from '../../../common-handlers';
import { ITrack } from '../services/track-type';

export const trackResolvers = {
  Query: {
    track: async (_, { id }: ITrack, { dataSources }): Promise<ITrack> => {
      const res = await dataSources.trackAPI.getTrack(id);
      return transform(res);
    },
    tracks: async (_, { offset, limit }, { dataSources }): Promise<ITrack[]> => {
      const query = setQuery(offset, limit);
      const { items: res } = await dataSources.trackAPI.getAllTracks(query);
      return res.map((it: ITrack) => transform(it));
    },
  },
  Track: {
    albums: ({ albumId }: ITrack, __, { dataSources }) => {
      return getFromIdsArray([albumId], dataSources.albumAPI, 'getAlbum');
    },
    bands: ({ bandsIds }: ITrack, __, { dataSources }) => {
      return getFromIdsArray(bandsIds, dataSources.bandAPI, 'getBand');
    },
    genres: ({ genresIds }: ITrack, __, { dataSources }) => {
      return getFromIdsArray(genresIds, dataSources.genreAPI, 'getGenre');
    },
  },

  Mutation: {
    createTrack: async (_, track: ITrack, { dataSources }): Promise<ITrack> => {
      const res = await dataSources.trackAPI.createTrack(track);
      return transform(res);
    },
    updateTrack: async (_, update: ITrack, { dataSources }): Promise<ITrack> => {
      const res = await dataSources.trackAPI.updateTrack(update);
      return transform(res);
    },
    deleteTrack: async (_, { id }: ITrack, { dataSources }) => {
      await dataSources.trackAPI.deleteTrack(id);
      return deleteMessage;
    },
  },
};
