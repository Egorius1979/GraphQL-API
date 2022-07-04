export const transform = (item) => {
  try {
    if (!item) throw Error;
    if (Array.isArray(item.instruments)) {
      item.instruments = item.instruments?.length ? item.instruments.join(', ') : null;
    }
    if (!item.id) {
      item.id = item._id;
    }

    return item;
  } catch {
    console.log(`объект отсутствует в БД `);
  }
};

export const getFromIdsArray = async (idsArray: string[], api, getItem: string) => {
  let res;

  if (idsArray.length) {
    res = await Promise.all(idsArray.map((id: string) => api[getItem](id)));
    res = res.filter((it) => it);
    res.length ? res.map((item) => transform(item)) : null;
  }
  return res;
};

export const deleteMessage = {
  acknowledged: true,
  deletedCount: 1,
};
