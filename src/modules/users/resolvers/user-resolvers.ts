import { IUser } from '../services/user-type';

export const userResolvers = {
  Query: {
    jwt: async (_, user: IUser, { dataSources }): Promise<string> => {
      const res = await dataSources.userApi.login(user);
      process.env.AUTH_TOKEN = res.jwt;
      return res;
    },

    user: async (_, { id }: IUser, { dataSources }): Promise<IUser> => {
      const res = await dataSources.userApi.getUser(id);
      res.id = res._id;
      delete res._id;
      return res;
    },
  },
  Mutation: {
    register: (_, user: IUser, { dataSources }): Promise<IUser> => {
      return dataSources.userApi.regUser(user);
    },
  },
};
