export const transform = (item) => {
  try {
    if (!item) throw Error;
    item.id = item._id;
    return item;
  } catch {
    console.log('объект отсутствует в БД');
  }
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
        const member = members.find((it) => it.artistId === rec.id);
        const resultMember = {
          id: rec.id,
          firstName: rec.firstName,
          secondName: rec.secondName,
          middleName: rec.middleName,
          instrument: member.instrument,
          years: member.years,
        };
        return [...acc, resultMember];
      }, [])
    : null;
  return result;
};

export const setQuery = (offset, limit) => {
  return offset || limit ? { offset, limit } : null;
};

export const deleteMessage = {
  acknowledged: true,
  deletedCount: 1,
};
