import { setCookie, destroyCookie } from 'nookies';
import { isStagingEnv } from '../../infra/env/isStagingEnv';
import { HttpClient } from '../../infra/http/HttpClient';

export const APP_TOKEN = 'APP_TOKEN';

const BASE_URL = isStagingEnv
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  : 'https://instalura-api-git-master-omariosouto.vercel.app';

export const loginService = {
  async login({ username, password }) {
    return HttpClient(`${BASE_URL}/api/login`, {
      method: 'POST',
      body: {
        username,
        password,
      },
    }).then((respostaConvertida) => {
      const { token } = respostaConvertida.data;
      const DAY_IN_SECONDS = 86400;

      setCookie(null, APP_TOKEN, token, {
        path: '/',
        maxAge: DAY_IN_SECONDS * 7,
      });

      return {
        token,
      };
    });
  },
  async logout(ctx, destroyCookieModule = destroyCookie) {
    destroyCookieModule(ctx, APP_TOKEN, { path: '/' });
  },
};
