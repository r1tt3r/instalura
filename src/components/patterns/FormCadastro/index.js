import React from 'react';
import * as yup from 'yup';
import { Lottie } from '@crello/react-lottie';
import { Button } from '../../commons/Button';
import Loader from '../../commons/Loader';
import TextField from '../../forms/TextField';
import { Box } from '../../foundation/layout/Box';
import { Grid } from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import successAnimation from './animations/success.json';
import errorAnimation from './animations/error.json';
import { useForm } from '../../../infra/hooks/forms/useForm';
import registerService from '../../../services/register/registerService';

const formState = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

const registerSchema = yup.object().shape({
  username: yup.string().required('"Usuário" é obrigatório'),
  name: yup.string().required('"Nome" é obrigatório'),
});

function FormContent() {
  const [submissionStatus, setSubmissionStatus] = React.useState(
    formState.DEFAULT
  );

  const initialValues = {
    username: '',
    name: '',
  };

  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      form.setIsFormDisabled(true);
      form.setIsFormLoading(true);
      setSubmissionStatus(formState.LOADING);
      registerService
        .execute({
          username: values.username,
          name: values.name,
        })
        .catch(() => {
          setSubmissionStatus(formState.ERROR);
        })
        .finally(() => {
          form.setIsFormDisabled(false);
          form.setIsFormLoading(false);
          setSubmissionStatus(formState.DONE);
        });
    },
    async validateSchema(values) {
      return registerSchema.validate(values, { abortEarly: false });
    },
  });

  return (
    <>
      {submissionStatus === formState.LOADING ? <Loader /> : null}
      <form onSubmit={form.handleSubmit}>
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
            value={form.values.name}
            error={form.errors.name}
            onBlur={form.handleBlur}
            onChange={form.handleChange}
            isTouched={form.touched.name}
          />
        </div>

        <div>
          <TextField
            placeholder="Usuário"
            name="username"
            value={form.values.username}
            error={form.errors.username}
            onBlur={form.handleBlur}
            onChange={form.handleChange}
            isTouched={form.touched.username}
          />
        </div>

        <Button
          variant="primary.main"
          type="submit"
          disabled={form.isFormDisabled}
          fullWidth
        >
          Cadastrar
        </Button>
        {!form.isFormDisabled && submissionStatus === formState.DONE && (
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
              <Text fontWeight="600">{` ${form.values.username} `}</Text>
              foi cadastrado com sucesso em nossa plataforma, seja bem vindo(a)
              !
            </Text>
          </Box>
        )}

        {!form.isFormDisabled && submissionStatus === formState.ERROR && (
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
            {/* eslint-disable-next-line react/prop-types */}
            {modalProps.ButtonCloseModal}
          </div>
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
