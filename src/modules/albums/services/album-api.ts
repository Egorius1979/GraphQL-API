import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { IAlbum } from './album-type';

export class AlbumAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ALBUMS_URL;
  }
  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', this.context.token);
  }
  async getAlbum(albumId: string) {
    return this.get(`/${albumId}`);
  }
  async getAllAlbums(query: URLSearchParams) {
    return this.get('', query);
  }
  async createAlbum(album: IAlbum) {
    return this.post('', album);
  }
  async updateAlbum(album: IAlbum) {
    return this.put(`/${album.id}`, album);
  }
  async deleteAlbum(albumId: string) {
    return this.delete(`/${albumId}`);
  }
}
