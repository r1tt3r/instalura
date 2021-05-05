import { authService } from './authService';

const expectedToken = 'token-fake';

const parseCookiesModule = jest.fn();
parseCookiesModule.mockImplementation(() => ({
  APP_TOKEN: 'token-fake',
}));

describe('authService', () => {
  describe('getToken()', () => {
    describe('when user try to get token', () => {
      it('must return a valid token', async () => {
        const auth = authService(null, parseCookiesModule);
        const token = await auth.getToken();

        expect(parseCookiesModule).toHaveBeenCalledTimes(1);
        expect(token).toBe(expectedToken);
      });
    });
  });

  const HttpClientModule = jest.fn();
  const loginServiceModule = {
    logout: jest.fn(),
  };
  describe('hasActiveSession()', () => {
    describe('when user try to authenticate', () => {
      it('return true when authentication succeeded', async () => {
        HttpClientModule.mockImplementationOnce(() =>
          Promise.resolve({
            data: {
              authenticated: true,
            },
          })
        );

        const auth = authService();
        const hasActiveSession = await auth.hasActiveSession(HttpClientModule);

        expect(HttpClientModule).toHaveBeenCalledTimes(1);
        expect(hasActiveSession).toBe(true);
      });

      it('return false when authentication fails and logout the user', async () => {
        HttpClientModule.mockImplementationOnce(() =>
          Promise.resolve({
            data: {
              authenticated: false,
            },
          })
        );

        const auth = authService();
        const hasActiveSession = await auth.hasActiveSession(
          HttpClientModule,
          loginServiceModule
        );

        expect(loginServiceModule.logout).toHaveBeenCalledTimes(1);
        expect(hasActiveSession).toBe(false);
      });
    });
  });

  describe('getSession()', () => {
    describe('when user is logged in', () => {
      it('return user session', async () => {
        const expectedUserData = {
          id: 1,
          username: 'someusername',
          role: ['user'],
        };
        const jwtModule = {
          decode: jest.fn(),
        };

        jwtModule.decode.mockImplementationOnce(() => ({
          user: {
            id: 1,
            username: 'someusername',
            role: ['user'],
          },
        }));

        const session = await authService(null, parseCookiesModule).getSession(
          jwtModule
        );

        expect(jwtModule.decode).toHaveBeenCalledTimes(1);
        expect(jwtModule.decode).toHaveBeenCalledWith(expectedToken);
        expect(session).toEqual(expectedUserData);
      });
    });
  });
});
