export async function HttpClient(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  }).then((respostaDoServer) => {
    const contentType = respostaDoServer.headers.get('content-type');

    if (respostaDoServer.ok) {
      if (contentType !== null) {
        return respostaDoServer.json();
      }
      return respostaDoServer.text();
    }

    throw new Error(
      'Falha em pegar os dados do servidor, por favor tente mais tarde.'
    );
  });
}
