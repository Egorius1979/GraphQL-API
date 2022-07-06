export const transform = (item) => {
  if (item) {
    item.id = item._id;
  }

  return item || null;
};

export const getFromIdsArray = async (idsArray: string[] | [], api, getItem: string) => {
  let result = null;
  if (idsArray.length) {
    let resData = await Promise.all(idsArray.map((id: string) => api[getItem](id)));
    resData = resData.filter((it) => it);
    result = resData.length ? resData.map((item) => (item.id ? item : transform(item))) : null;
  }
  return result;
};

export const setMembers = (members, artists) => {
  const result = artists
    ? artists.reduce((acc, rec) => {
        const { instrument, years } = members.find((it) => it.artistId === rec.id);
        const { id, firstName, secondName, middleName } = rec;
        const resultMember = {
          id,
          firstName,
          secondName,
          middleName,
          instrument,
          years,
        };
        return [...acc, resultMember];
      }, [])
    : null;
  return result;
};

export const setQuery = (offset: number, limit: number): IQuery => {
  if (offset && limit) {
    return { offset, limit };
  }
  if (offset) {
    return { offset };
  }
  if (limit) {
    return { limit };
  }
};

export const deleteMessage = {
  acknowledged: true,
  deletedCount: 1,
};

export interface IQuery {
  offset?: number;
  limit?: number;
}
