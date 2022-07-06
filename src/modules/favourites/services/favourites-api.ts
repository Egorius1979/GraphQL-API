import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { IBody } from '../favourites-type';

export class FavouriteAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.FAVOURITES_URL;
  }
  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', this.context.token);
  }
  async getFavourites() {
    return this.get('');
  }
  async addFavourite(body: IBody) {
    return this.put('/add', body);
  }
}
