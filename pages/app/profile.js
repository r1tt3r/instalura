import React from 'react';
import { authService } from '../../src/services/auth/authService';
import { useUserService } from '../../src/services/user/hook';

export default function ProfilePage() {
  const dados = useUserService.getProfilePage();
  console.log(dados);

  return (
    <div>
      Página de Profile!
      <img
        src="https://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif"
        alt="Nicolas Cage"
      />
    </div>
  );
}

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
