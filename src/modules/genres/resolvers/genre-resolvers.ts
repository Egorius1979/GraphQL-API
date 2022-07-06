import { transform, deleteMessage, setQuery } from '../../../common-handlers';
import { IGenre } from '../genre-type';

export const genreResolvers = {
  Query: {
    genre: async (_, { id }: IGenre, { dataSources }): Promise<IGenre> => {
      const res = await dataSources.genreAPI.getGenre(id);
      return transform(res);
    },
    genres: async (_, { offset, limit }, { dataSources }): Promise<IGenre[]> => {
      const query = setQuery(offset, limit);
      const { items: res } = await dataSources.genreAPI.getAllGenres(query);
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
