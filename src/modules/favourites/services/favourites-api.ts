import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

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
  async addFavourite(id: string) {
    return this.put('/add', id);
  }
}
