export const transform = (person) => {
  // if (typeof person.instruments !== 'object') {
  // person.instruments = person.instruments?.length
  //   ? person.instruments.split(',')
  //   : [];
  // } else {
  person.instruments = person.instruments?.length
    ? person.instruments.join(', ')
    : '';
  person.id = person._id;
  // delete person._id;
  // }
  return person;
};

export const getFromIdsArray = async (idsArray: string[], api, getItem) => {
  let res;
  if (idsArray[0]) {
    res = await Promise.all(idsArray.map((id: string) => api[getItem](id)));
    return res.map((id) => transform(id));
  }

  return res || [];
};

export const deleteMessage = {
  acknowledged: true,
  deletedCount: 1,
};
