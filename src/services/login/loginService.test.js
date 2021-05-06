import loginService, { APP_TOKEN } from './loginService';

const token = 'token-fake';
async function HttpClientModule() {
  return {
    data: {
      token,
    },
  };
}
async function HttpClientModuleError() {
  return {
    data: {},
    err: {
      message: 'Failed to login',
    },
  };
}
const setCookieModule = jest.fn();

describe('loginService', () => {
  describe('login()', () => {
    describe('when user try login', () => {
      describe('and succeed', () => {
        test('store the token', async () => {
          const loginServiceResult = await loginService.login(
            { username: 'someusername', password: 'somepassword' },
            setCookieModule,
            HttpClientModule
          );

          const DAY_IN_SECONDS = 86400;
          expect(setCookieModule).toHaveBeenCalledWith(
            null,
            'APP_TOKEN',
            token,
            { path: '/', maxAge: DAY_IN_SECONDS * 7 }
          );

          expect(loginServiceResult).toEqual({ token });
        });
      });
      describe('and fails', () => {
        test('throws an error', async () => {
          await expect(
            loginService.login(
              { username: 'someusername', password: 'somepassword' },
              setCookieModule,
              HttpClientModuleError
            )
          ).rejects.toThrow('Failed to login');
        });
      });
    });
  });
  describe('logout()', () => {
    describe('when user try logout and succeed', () => {
      test('remove the token', async () => {
        const destroyCookieModule = jest.fn();

        loginService.logout(null, destroyCookieModule);
        expect(destroyCookieModule).toHaveBeenCalledTimes(1);
        expect(destroyCookieModule).toHaveBeenCalledWith(null, APP_TOKEN, {
          path: '/',
        });
      });
    });
  });
});
