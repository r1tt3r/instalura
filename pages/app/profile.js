import ProfileScreen from '../../src/components/screens/ProfileScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';
import { authService } from '../../src/services/auth/authService';

export default websitePageHOC(ProfileScreen, {
  pageWrapperProps: {
    layoutProps: {
      loggedIn: true,
    },
    seoProps: {
      headTitle: 'Profile',
    },
  },
});

export async function getServerSideProps(ctx) {
  const auth = await authService(ctx);

  const hasActiveSession = await auth.hasActiveSession();
  if (hasActiveSession) {
    const session = await auth.getSession();
    // const profilePage = await userService.getProfilePage(ctx);
    return {
      props: {
        user: session,
        // posts: profilePage.posts,
      },
    };
  }

  // Redireciona se nao estiver logado
  ctx.res.writeHead(307, { location: '/login' });
  return ctx.res.end();
}
