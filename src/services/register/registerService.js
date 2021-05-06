import { isStagingEnv } from '../../infra/env/isStagingEnv';
import { HttpClient } from '../../infra/http/HttpClient';

export const APP_TOKEN = 'APP_TOKEN';

const BASE_URL = isStagingEnv
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  : 'https://instalura-api-git-master-omariosouto.vercel.app';

const registerService = {
  async execute({ username, name }, HttpClientModule = HttpClient) {
    return HttpClientModule(`${BASE_URL}/api/users`, {
      method: 'POST',
      body: {
        username,
        name,
      },
    })
      .then((respostaConvertida) =>
        respostaConvertida.ok ? respostaConvertida.json() : null
      )
      .catch(() => {
        throw new Error('Nao foi possivel cadastrar o usuario');
      });
  },
};

export default registerService;
