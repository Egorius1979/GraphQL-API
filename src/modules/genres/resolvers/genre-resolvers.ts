import { IGenre } from '../services/genre-type';
import { transform, deleteMessage } from '../../../common-handlers';

export const genreResolvers = {
  Query: {
    genre: async (_, { id }, { dataSources }): Promise<IGenre> => {
      const res = await dataSources.genreAPI.getGenre(id);
      return transform(res);
    },
    genres: async (_, __, { dataSources }): Promise<IGenre[]> => {
      const { items: res } = await dataSources.genreAPI.getAllGenres();
      console.log(res);

      return res.map((it: IGenre) => transform(it));
    },
  },
  Mutation: {
    createGenre: async (_, genre: IGenre, { dataSources }): Promise<IGenre> => {
      const res = await dataSources.genreAPI.createGenre(genre);
      return transform(res);
    },
    updateGenre: async (_, update: IGenre, { dataSources }): Promise<IGenre> => {
      const res = await dataSources.genreAPI.updateGenre(update);
      return transform(res);
    },
    deleteGenre: async (_, { id }: IGenre, { dataSources }) => {
      await dataSources.genreAPI.deleteGenre(id);
      return deleteMessage;
    },
  },
};
