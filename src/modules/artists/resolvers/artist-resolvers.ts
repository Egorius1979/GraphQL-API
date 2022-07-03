import { IArtist } from '../services/artist-type';
import { getFromIdsArray, transform, deleteMessage } from '../../../common-handlers';

export const artistResolvers = {
  Query: {
    artist: async (_, { id }, { dataSources }): Promise<IArtist> => {
      const res = await dataSources.artistAPI.getArtist(id);
      return transform(res);
    },
    artists: async (_, __, { dataSources }): Promise<IArtist[]> => {
      const { items: res } = await dataSources.artistAPI.getAllArtists();
      res.map((it) => transform(it));
      return res;
    },
  },
  Artist: {
    bands: ({ bandsIds }, __, { dataSources }) => {
      return getFromIdsArray(bandsIds, dataSources.bandAPI, 'getBand');
    },
  },
  Mutation: {
    createArtist: async (_, artist: IArtist, { dataSources }): Promise<IArtist> => {
      const res = await dataSources.artistAPI.createArtist(artist);
      return transform(res);
    },
    updateArtist: async (_, update: IArtist, { dataSources }): Promise<IArtist> => {
      const res = await dataSources.artistAPI.updateArtist(update);
      return transform(res);
    },
    deleteArtist: async (_, { id }: IArtist, { dataSources }) => {
      await dataSources.artistAPI.deleteArtist(id);
      return deleteMessage;
    },
  },
};
