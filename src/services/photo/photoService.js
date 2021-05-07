import { HttpClient } from '../../infra/http/HttpClient';
import { isStagingEnv } from '../../infra/env/isStagingEnv';
import { authService } from '../auth/authService';

const BASE_URL = isStagingEnv
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  : 'https://instalura-api-git-master-omariosouto.vercel.app';

export const photoService = {
  async photo({ photoUrl, filter, description }, ctx) {
    const token = await authService(ctx).getToken();
    return HttpClient(`${BASE_URL}/api/posts`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        photoUrl,
        description,
        filter,
      },
    }).then((props) => {
      console.log(props);
      return {
        status: true,
      };
    });
  },
};
