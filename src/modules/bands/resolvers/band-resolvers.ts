import { IBand } from '../services/band-type';
import { transform, getFromIdsArray, deleteMessage } from '../../../common-handlers';

export const bandResolvers = {
  Query: {
    band: async (_, { id }, { dataSources }): Promise<IBand> => {
      const res = await dataSources.bandAPI.getBand(id);
      return transform(res);
    },
    bands: async (_, __, { dataSources }): Promise<IBand[]> => {
      const { items: res } = await dataSources.bandAPI.getAllBands();
      return res.map((it: IBand) => transform(it));
    },
  },
  Band: {
    genres: ({ genresIds }, __, { dataSources }) => {
      return getFromIdsArray(genresIds, dataSources.genreAPI, 'getGenre');
    },
  },
  Mutation: {
    createBand: async (_, band: IBand, { dataSources }): Promise<IBand> => {
      const res = await dataSources.bandAPI.createBand(band);
      return transform(res);
    },
    updateBand: async (_, update: IBand, { dataSources }): Promise<IBand> => {
      const res = await dataSources.bandAPI.updateBand(update);
      return transform(res);
    },
    deleteBand: async (_, { id }: IBand, { dataSources }) => {
      await dataSources.bandAPI.deleteBand(id);
      return deleteMessage;
    },
  },
};
