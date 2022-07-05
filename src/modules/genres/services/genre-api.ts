import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { IGenre } from './genre-type';

export class GenreAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.GENRES_URL;
  }
  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }
  async getGenre(genreId: string) {
    return this.get(`/${genreId}`);
  }
  async getAllGenres(query) {
    return this.get('', query);
  }
  async createGenre(genre: IGenre) {
    return this.post('', genre);
  }
  async updateGenre(genre: IGenre) {
    return this.put(`/${genre.id}`, genre);
  }
  async deleteGenre(genreId: string) {
    return this.delete(`/${genreId}`);
  }
}
