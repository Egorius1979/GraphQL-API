import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { IUser } from './user-type';

export class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.USERS_URL;
  }
  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `Bearer ${process.env.AUTH_TOKEN}`);
  }
  async regUser(newUser: IUser) {
    return this.post('/register', newUser);
  }
  async login(user: IUser) {
    return this.post(`/login`, user);
  }
  async getUser(userId: string) {
    return this.get(`/${userId}`);
  }
}
