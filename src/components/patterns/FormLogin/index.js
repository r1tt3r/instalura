import React from 'react';
import { useRouter } from 'next/router';
import * as yup from 'yup';

import { Button } from '../../commons/Button';
import TextField from '../../forms/TextField';
import { loginService } from '../../../services/login/loginService';
import { useForm } from '../../../infra/hooks/forms/useForm';

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

  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      loginService
        .login({
          username: values.usuario,
          password: values.senha,
        })
        .then(() => router.push('/app/profile'));
    },
    async validateSchema(values) {
      return loginSchema.validate(values, { abortEarly: false });
    },
  });

  return (
    <form id="formCadastro" onSubmit={form.handleSubmit}>
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
        Entrar
      </Button>
      {/* {form.errors} */}
    </form>
  );
}
