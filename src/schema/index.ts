import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

export const registerSchema = yup.object({
    name: yup.string().required('Informe o nome'),
    farm: yup.string().required('Informe o nome da fazenda'),
    city: yup.string().required('Informe a cidade'),
    supervisor: yup.string().required('Informe o nome do(a) supervisor(a)'),
    type: yup.string().required('Informe o tipo'),
    milkAmount: yup.number().required('Informe a quantidade'),
    cowsHead: yup.number().required('Informe a quantidade'),
    hadSupervision: yup.boolean().default(false),
});