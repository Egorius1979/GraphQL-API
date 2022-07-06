import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { IArtist } from '../artist-type';

export class ArtistAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ARTISTS_URL;
  }
  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', this.context.token);
  }
  async getArtist(artistId: string) {
    return this.get(`/${artistId}`);
  }
  async getAllArtists(query: URLSearchParams) {
    return this.get('', query);
  }
  async createArtist(artist: IArtist) {
    return this.post('', artist);
  }
  async updateArtist(artist: IArtist) {
    return this.put(`/${artist.id}`, artist);
  }
  async deleteArtist(artistId: string) {
    return this.delete(`/${artistId}`);
  }
}
