import FeedScreen from '../../src/components/screens/app/FeedScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';
import { authService } from '../../src/services/auth/authService';

export default websitePageHOC(FeedScreen, {
  pageWrapperProps: {
    layoutProps: {
      loggedIn: true,
    },
    seoProps: {
      headTitle: 'Feed',
    },
  },
});

export async function getServerSideProps(ctx) {
  const auth = await authService(ctx);

  const hasActiveSession = await auth.hasActiveSession();
  if (hasActiveSession) {
    const session = await auth.getSession();

    return {
      props: {
        user: session,
      },
    };
  }

  // Redireciona se nao estiver logado
  ctx.res.writeHead(307, { location: '/login' });
  return ctx.res.end();
}
