import { ITrack } from '../services/track-type';
import { transform, getFromIdsArray, deleteMessage } from '../../../common-handlers';

export const trackResolvers = {
  Query: {
    track: async (_, { id }, { dataSources }): Promise<ITrack> => {
      const res = await dataSources.trackAPI.getTrack(id);
      return transform(res);
    },
    tracks: async (_, __, { dataSources }): Promise<ITrack[]> => {
      const { items: res } = await dataSources.trackAPI.getAllTracks();
      return res.map((it: ITrack) => transform(it));
    },
  },
  Track: {
    albums: ({ albumId }, __, { dataSources }) => {
      return getFromIdsArray([albumId], dataSources.albumAPI, 'getAlbum');
    },
    bands: ({ bandsIds }, __, { dataSources }) => {
      return getFromIdsArray(bandsIds, dataSources.bandAPI, 'getBand');
    },
    genres: ({ genresIds }, __, { dataSources }) => {
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
