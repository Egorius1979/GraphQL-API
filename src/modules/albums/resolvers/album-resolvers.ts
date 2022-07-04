import { IAlbum } from '../services/album-type';
import { transform, getFromIdsArray, deleteMessage } from '../../../common-handlers';

export const albumResolvers = {
  Query: {
    album: async (_, { id }, { dataSources }): Promise<IAlbum> => {
      const res = await dataSources.albumAPI.getAlbum(id);
      return transform(res);
    },
    albums: async (_, __, { dataSources }): Promise<IAlbum[]> => {
      const { items: res } = await dataSources.albumAPI.getAllAlbums();
      return res.map((it: IAlbum) => transform(it));
    },
  },
  Album: {
    artists: ({ artistsIds }, __, { dataSources }) => {
      return getFromIdsArray(artistsIds, dataSources.artistAPI, 'getArtist');
    },
    bands: ({ bandsIds }, __, { dataSources }) => {
      return getFromIdsArray(bandsIds, dataSources.bandAPI, 'getBand');
    },
    tracks: ({ trackIds }, __, { dataSources }) => {
      return getFromIdsArray(trackIds, dataSources.trackAPI, 'getTrack');
    },
    genres: ({ genresIds }, __, { dataSources }) => {
      return getFromIdsArray(genresIds, dataSources.genreAPI, 'getGenre');
    },
  },
  Mutation: {
    createAlbum: async (_, album: IAlbum, { dataSources }): Promise<IAlbum> => {
      const res = await dataSources.albumAPI.createAlbum(album);
      return transform(res);
    },
    updateAlbum: async (_, update: IAlbum, { dataSources }): Promise<IAlbum> => {
      const res = await dataSources.albumAPI.updateAlbum(update);
      return transform(res);
    },
    deleteAlbum: async (_, { id }: IAlbum, { dataSources }) => {
      await dataSources.albumAPI.deleteAlbum(id);
      return deleteMessage;
    },
  },
};
