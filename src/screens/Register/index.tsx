import { ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

import { AppNavigatorRoutesProps } from 'src/routes/app.routes'

import { Header } from "@components/Header"
import { Input } from "@components/Input"
import { Button } from "@components/Button"

import { Container, Form } from "./styles"

type FormDataProps = {
    name: string;
    farm: string;
    city: string;
    supervisor: string;
    type: string;
    milkAmount: string;
    cowsHead: string;
}

const registerSchema = yup.object({
    name: yup.string().required('Informe o nome'),
    farm: yup.string().required('Informe o nome da fazenda'),
    city: yup.string().required('Informe a cidade'),
    supervisor: yup.string().required('Informe o nome do(a) supervisor(a)'),
    type: yup.string().required('Informe o tipo'),
    milkAmount: yup.string().required('Informe a quantidade'),
    cowsHead: yup.string().required('Informe a quantidade'),
});

export function Register() {

    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        defaultValues: {
            name: 'Laura',
            city: 'Washington',
            cowsHead: '21',
            farm: 'WashingtonFarm',
            milkAmount: '100',
            supervisor: 'Carlos',
            type: 'Dropdown AQUI'
        },
        resolver: yupResolver(registerSchema)
    });

    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function handleBackButton() {
        navigation.navigate('home');
    }

    function handleForm(data: FormDataProps) {
        console.log(data);
    }

    return (
        <Container>
            <Header title='Cadastro' showBackButton onPress={handleBackButton} />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Form>
                    <Controller
                        control={control}
                        name='name'
                        render={({ field: { onChange, value } }) => (
                            <Input
                                title="Nome"
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name='farm'
                        render={({ field: { onChange, value } }) => (
                            <Input
                                title="Fazenda"
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name='city'
                        render={({ field: { onChange, value } }) => (
                            <Input
                                title="Cidade"
                                onChangeText={onChange}
                                value={value} />
                        )}
                    />

                    <Controller
                        control={control}
                        name='supervisor'
                        render={({ field: { onChange, value } }) => (
                            <Input
                                title="Supervisor"
                                onChangeText={onChange}
                                value={value} />
                        )}
                    />

                    <Controller
                        control={control}
                        name='type'
                        render={({ field: { onChange, value } }) => (
                            <Input
                                title="Tipo"
                                onChangeText={onChange}
                                value={value} />
                        )}
                    />

                    <Controller
                        control={control}
                        name='milkAmount'
                        render={({ field: { onChange, value } }) => (
                            <Input
                                title="Quantidade de Leite / mês"
                                onChangeText={onChange}
                                value={value} />
                        )}
                    />

                    <Controller
                        control={control}
                        name='cowsHead'
                        render={({ field: { onChange, value } }) => (
                            <Input title="Quantidade de cabeça de gado"
                                onChangeText={onChange}
                                value={value}
                                onSubmitEditing={handleSubmit(handleForm)}
                                returnKeyType='send'
                            />
                        )}
                    />

                    <Button title="Cadastrar" onPress={handleSubmit(handleForm)} />
                </Form>
            </ScrollView>
        </Container>
    )
}