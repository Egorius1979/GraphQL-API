import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { ITrack } from './track-type';

export class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.TRACKS_URL;
  }
  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }
  async getTrack(trackId: string) {
    return this.get(`/${trackId}`);
  }
  async getAllTracks() {
    return this.get('');
  }
  async createTrack(track: ITrack) {
    return this.post('', track);
  }
  async updateTrack(track: ITrack) {
    return this.put(`/${track.id}`, track);
  }
  async deleteTrack(trackId: string) {
    return this.delete(`/${trackId}`);
  }
}
