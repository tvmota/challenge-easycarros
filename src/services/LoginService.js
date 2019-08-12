import Api from './Api';

const login = async (authInfo) => {
  const resp = (await Api.post('auth', authInfo));

  return resp;
};

export default login;
