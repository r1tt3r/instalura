import { parseCookies } from 'nookies';
import jwt from 'jsonwebtoken';
import loginService, { APP_TOKEN } from '../login/loginService';
import { HttpClient } from '../../infra/http/HttpClient';
import { isStagingEnv } from '../../infra/env/isStagingEnv';

const BASE_URL = isStagingEnv
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  : 'https://instalura-api-git-master-omariosouto.vercel.app';

export const authService = (ctx, parseCookiesModule = parseCookies) => {
  const cookies = parseCookiesModule(ctx);
  const token = cookies[APP_TOKEN];

  return {
    async getToken() {
      return token;
    },
    async hasActiveSession(
      HttpClientModule = HttpClient,
      loginServiceModule = loginService
    ) {
      return HttpClientModule(`${BASE_URL}/api/auth`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(({ data }) => {
          if (data.authenticated) {
            return true;
          }
          loginServiceModule.logout(ctx);
          return false;
        })
        .catch(() => {
          loginServiceModule.logout(ctx);
          return false;
        });
    },
    async getSession(jwtModule = jwt) {
      const session = jwtModule.decode(token);
      return session.user;
    },
  };
};
