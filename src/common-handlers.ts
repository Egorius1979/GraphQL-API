export const transform = (item) => {
  if (Array.isArray(item.instruments)) {
    item.instruments = item.instruments?.length ? item.instruments.join(', ') : null;
  }
  item.id = item._id;

  return item;
};

export const getFromIdsArray = async (idsArray: string[], api, getItem: string) => {
  let res;

  if (idsArray?.length) {
    res = await Promise.all(idsArray.map((id: string) => api[getItem](id)));
    res.map((id) => transform(id));
  }
  return res || null;
};

export const deleteMessage = {
  acknowledged: true,
  deletedCount: 1,
};
