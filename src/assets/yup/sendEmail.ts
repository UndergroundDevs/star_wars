import * as yup from 'yup';

export const formValidation = yup.object().shape({
  name: yup.string().required('Campo de nome não pode ser vazio'),
  email: yup.string().email('E-mail inválido').required('Campode de e-mail é obrigatório'),
  address: yup.string().required('Campo de endereço não pode ser vazio'),
  message: yup.string().required('Campo de mensagem não pode ser vazio'),
});
