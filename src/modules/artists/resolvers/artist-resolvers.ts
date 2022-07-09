import { getFromIdsArray, transform, deleteMessage, setQuery } from '../../../common-handlers';
import { IArtist, Artist, Band } from '../services/artist-type';

export const artistResolvers = {
  Query: {
    artist: async (_, { id }: IArtist, { dataSources }): Promise<Artist> => {
      const res = await dataSources.artistAPI.getArtist(id);
      return transform(res);
    },
    artists: async (_, { offset, limit }, { dataSources }): Promise<Artist[]> => {
      const query = setQuery(offset, limit);
      const { items } = await dataSources.artistAPI.getAllArtists(query);
      return items.map((it: Artist) => transform(it));
    },
  },
  Artist: {
    bands: ({ bandsIds }: IArtist, __, { dataSources }): Promise<Band[]> => {
      return getFromIdsArray(bandsIds, dataSources.bandAPI, 'getBand');
    },
  },
  Mutation: {
    createArtist: async (_, artist: IArtist, { dataSources }): Promise<Artist> => {
      const res = await dataSources.artistAPI.createArtist(artist);
      return transform(res);
    },
    updateArtist: async (_, update: IArtist, { dataSources }): Promise<Artist> => {
      const res = await dataSources.artistAPI.updateArtist(update);
      return transform(res);
    },
    deleteArtist: async (_, { id }: IArtist, { dataSources }) => {
      await dataSources.artistAPI.deleteArtist(id);
      return deleteMessage;
    },
  },
};
