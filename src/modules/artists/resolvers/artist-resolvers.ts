import { getFromIdsArray, transform, deleteMessage, setQuery } from '../../../common-handlers';
import { IArtist } from '../services/artist-type';

export const artistResolvers = {
  Query: {
    artist: async (_, { id }: IArtist, { dataSources }): Promise<IArtist> => {
      const res = await dataSources.artistAPI.getArtist(id);
      return transform(res);
    },
    artists: async (_, { offset, limit }, { dataSources }) => {
      try {
        const query = setQuery(offset, limit);
        const { items } = await dataSources.artistAPI.getAllArtists(query);
        return items.map((it: IArtist) => transform(it));
      } catch {}
    },
  },
  Artist: {
    bands: ({ bandsIds }: IArtist, __, { dataSources }) => {
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
