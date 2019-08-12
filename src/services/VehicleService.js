import Api from './Api';

const add = async (vehicle) => {
  const resp = (await Api.post('vehicle', vehicle));

  return resp;
};

const list = async () => {
  const resp = (await Api.get('vehicle'));

  return resp;
};

const remove = async (id) => {
  const resp = (await Api.delete(`vehicle/${id}`));

  return resp;
};

export default {
  add,
  list,
  remove,
};
