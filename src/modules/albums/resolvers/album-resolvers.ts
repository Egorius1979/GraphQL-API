import { transform, getFromIdsArray, deleteMessage, setQuery } from '../../../common-handlers';
import { IAlbum } from '../services/album-type';

export const albumResolvers = {
  Query: {
    album: async (_, { id }, { dataSources }): Promise<IAlbum> => {
      const res = await dataSources.albumAPI.getAlbum(id);
      return transform(res);
    },
    albums: async (_, { offset, limit }, { dataSources }): Promise<IAlbum[]> => {
      try {
        const query = setQuery(offset, limit);
        const { items } = await dataSources.albumAPI.getAllAlbums(query);
        return items.map((it: IAlbum) => transform(it));
      } catch {}
    },
  },
  Album: {
    artists: ({ artistsIds }: IAlbum, __, { dataSources }) => {
      return getFromIdsArray(artistsIds, dataSources.artistAPI, 'getArtist');
    },
    bands: ({ bandsIds }: IAlbum, __, { dataSources }) => {
      return getFromIdsArray(bandsIds, dataSources.bandAPI, 'getBand');
    },
    tracks: ({ trackIds }: IAlbum, __, { dataSources }) => {
      return getFromIdsArray(trackIds, dataSources.trackAPI, 'getTrack');
    },
    genres: ({ genresIds }: IAlbum, __, { dataSources }) => {
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
