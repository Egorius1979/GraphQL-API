import { transform } from '../../../common-handlers';
import { IUser } from '../services/user-type';

export const userResolvers = {
  Query: {
    jwt: async (_, user: IUser, context): Promise<string> => {
      const res = await context.dataSources.userApi.login(user);
      return res;
    },

    user: async (_, { id }: IUser, { dataSources }): Promise<IUser> => {
      const res = await dataSources.userApi.getUser(id);
      return transform(res);
    },
  },
  Mutation: {
    register: async (_, user: IUser, { dataSources }): Promise<IUser> => {
      const res = await dataSources.userApi.regUser(user);
      return transform(res);
    },
  },
};
