import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { IBand } from './band-type';

export class BandAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.BANDS_URL;
  }
  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', this.context.token);
  }
  async getBand(bandId: string) {
    return this.get(`/${bandId}`);
  }
  async getAllBands(query: URLSearchParams) {
    return this.get('', query);
  }
  async createBand(band: IBand) {
    return this.post('', band);
  }
  async updateBand(band: IBand) {
    return this.put(`/${band.id}`, band);
  }
  async deleteBand(bandId: string) {
    return this.delete(`/${bandId}`);
  }
}
