import React from 'react';
import { Lottie } from '@crello/react-lottie';
import { Button } from '../../commons/Button';
import Loader from '../../commons/Loader';
import TextField from '../../forms/TextField';
import { Box } from '../../foundation/layout/Box';
import { Grid } from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import successAnimation from './animations/success.json';
import errorAnimation from './animations/error.json';

const formState = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [userInfo, setUserInfo] = React.useState({
    usuario: 'leandroritter1',
    name: 'Leandro Ritter',
  });
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(
    formState.DEFAULT
  );

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmissionStatus(formState.LOADING);
    setIsFormSubmited(true);
    fetch('https://instalura-api.vercel.app/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: userInfo.usuario,
        name: userInfo.name,
      }),
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
        throw new Error('Nao foi possivel cadastrar o usuario');
      })
      .then((respConvert) => {
        setSubmissionStatus(formState.DONE);
        console.log(respConvert);
      })
      .catch((error) => {
        setSubmissionStatus(formState.ERROR);
        console.log(error);
      });
  }

  const isFormInvalid =
    userInfo.usuario.length === 0 || userInfo.name.length === 0;

  return (
    <>
      {submissionStatus === formState.LOADING ? <Loader /> : null}
      <form onSubmit={handleSubmit}>
        <Text variant="title" tag="h1" color="tertiary.main">
          Pronto para saber da vida dos outros?
        </Text>
        <Text
          variant="paragraph1"
          tag="p"
          color="tertiary.light"
          marginBottom="32px"
        >
          Você está a um passo de saber tudoo que está rolando no bairro,
          complete seu cadastro agora!
        </Text>

        <div>
          <TextField
            placeholder="Nome"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <TextField
            placeholder="Usuário"
            name="usuario"
            value={userInfo.usuario}
            onChange={handleChange}
          />
        </div>

        <Button
          variant="primary.main"
          type="submit"
          disabled={isFormInvalid}
          fullWidth
        >
          Cadastrar
        </Button>
        {isFormSubmited && submissionStatus === formState.DONE && (
          <Box textAlign="center">
            <Lottie
              width="150px"
              height="150px"
              config={{
                animationData: successAnimation,
                loop: true,
                autoplay: true,
              }}
            />

            <Text>
              O usuário
              <Text fontWeight="600">{` ${userInfo.usuario} `}</Text>
              foi cadastrado com sucesso em nossa plataforma, seja bem vindo(a)
              !
            </Text>
          </Box>
        )}

        {isFormSubmited && submissionStatus === formState.ERROR && (
          <Box textAlign="center">
            <Lottie
              width="150px"
              height="150px"
              config={{
                animationData: errorAnimation,
                loop: true,
                autoplay: true,
              }}
            />

            <Text>
              Não foi possivel efetuar seu cadastro com os dados informados.
            </Text>
          </Box>
        )}
      </form>
    </>
  );
}

// eslint-disable-next-line react/prop-types
export default function FormCadastro({ modalProps }) {
  return (
    <Grid.Row marginLeft={0} marginRight={0} flex={1} justifyContent="flex-end">
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...modalProps}
        >
          <div
            className="closeModal"
            style={{
              position: 'absolute',
              top: '30px',
              right: '30px',
            }}
          >
            {modalProps.ButtonCloseModal}
          </div>
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
