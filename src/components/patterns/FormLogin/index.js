import React from 'react';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import { Lottie } from '@crello/react-lottie';

import { Button } from '../../commons/Button';
import TextField from '../../forms/TextField';
import loginService from '../../../services/login/loginService';
import { useForm } from '../../../infra/hooks/forms/useForm';
import Text from '../../foundation/Text';
import loadingAnimation from './animations/loading.json';
import { Box } from '../../foundation/layout/Box';

const loginSchema = yup.object().shape({
  usuario: yup
    .string()
    .required('"Usuário" é obrigatório')
    .min(3, 'Preencha ao menos 3 caracteres'),
  senha: yup
    .string()
    .required('"Senha" é obrigatório')
    .min('8', 'Preencha ao menos 8 caracteres'),
});

export default function LoginForm() {
  const router = useRouter();
  const initialValues = {
    usuario: '',
    senha: '',
  };
  const [hasErrors, setHasErros] = React.useState({
    status: false,
    message: '',
  });

  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      form.setIsFormDisabled(true);
      form.setIsFormLoading(true);
      loginService
        .login({
          username: values.usuario,
          password: values.senha,
        })
        .then(() => {
          router.push('/app/feed');
        })
        .catch((err) =>
          setHasErros({ ...hasErrors, status: true, message: err })
        )
        .finally(() => {
          form.setIsFormDisabled(false);
          form.setIsFormLoading(false);
        });
    },
    async validateSchema(values) {
      return loginSchema.validate(values, { abortEarly: false });
    },
  });

  return (
    <form id="formCadastro" onSubmit={form.handleSubmit}>
      {hasErrors.status && (
        <Text tag="p" margin="0 0 20px 0" color="error.main">
          {String(hasErrors.message).replace('Error: ', '')}
        </Text>
      )}
      <TextField
        placeholder="Usuário"
        name="usuario"
        value={form.values.usuario}
        error={form.errors.usuario}
        onBlur={form.handleBlur}
        onChange={form.handleChange}
        isTouched={form.touched.usuario}
      />
      <TextField
        placeholder="Senha"
        name="senha"
        type="password"
        value={form.values.senha}
        error={form.errors.senha}
        onBlur={form.handleBlur}
        onChange={form.handleChange}
        isTouched={form.touched.senha}
      />
      <Button
        type="submit"
        variant="primary.main"
        margin={{
          xs: '0 auto',
          md: 'initial',
        }}
        fullWidth
        disabled={form.isFormDisabled}
      >
        {form.isFormLoading ? (
          <Box margin="auto" width="100px">
            <Lottie
              width="100px"
              height="20px"
              config={{
                animationData: loadingAnimation,
                loop: true,
                autoplay: true,
              }}
            />
          </Box>
        ) : (
          'Entrar'
        )}
      </Button>
      {/* {form.errors} */}
    </form>
  );
}
