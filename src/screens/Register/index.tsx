import { Alert, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { AppNavigatorRoutesProps } from 'src/routes/app.routes'

import { Header } from "@components/Header"
import { Input } from "@components/Input"
import { Button } from "@components/Button"

import { AppError } from '@utils/AppError';

import { Container, Form } from "./styles"
import { api } from '@service/api';
import { registerSchema } from '@schema/index';

type FormDataProps = {
    name: string;
    farm: string;
    city: string;
    supervisor: string;
    type: string;
    milkAmount: string;
    cowsHead: string;
}

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

    async function handleForm(data: FormDataProps) {
        try {
            const response = await api.post('/v1/checkList', {
                "checklists": [
                    {
                        "_id": "1",
                        "type": "",
                        "amount_of_milk_produced": 300,
                        "number_of_cows_head": 17,
                        "had_supervision": true,
                        "farmer": {
                            "name": "Fazenda São Rock",
                            "city": "São Rock"
                        },
                        "from": {
                            "name": "Luciano Camargo"
                        },
                        "to": {
                            "name": "Fernando Siqueira"
                        },
                        "location": {
                            "latitude": -23.5,
                            "longitude": -46.6
                        },
                        "created_at": "2022-02-01T10:10:21.748Z",
                        "updated_at": "2022-02-01T10:10:21.748Z"
                    }
                ]
            });
        } catch (error) {
            const isAppError = error instanceof AppError;
            const title = isAppError ? error.message : 'Não foi possível realizar o cadastro. Tente mais tarde.'
            Alert.alert('Ocorreu um erro', title);

        }

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
                                errorMessage={errors.name?.message}
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
                                errorMessage={errors.farm?.message}
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
                                value={value}
                                errorMessage={errors.city?.message}

                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name='supervisor'
                        render={({ field: { onChange, value } }) => (
                            <Input
                                title="Supervisor"
                                onChangeText={onChange}
                                value={value}
                                errorMessage={errors.supervisor?.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name='type'
                        render={({ field: { onChange, value } }) => (
                            <Input
                                title="Tipo"
                                onChangeText={onChange}
                                value={value}
                                errorMessage={errors.type?.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name='milkAmount'
                        render={({ field: { onChange, value } }) => (
                            <Input
                                title="Quantidade de Leite / mês"
                                onChangeText={onChange}
                                value={value}
                                errorMessage={errors.milkAmount?.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name='cowsHead'
                        render={({ field: { onChange, value } }) => (
                            <Input title="Quantidade de cabeça de gado"
                                onChangeText={onChange}
                                value={value}
                                errorMessage={errors.cowsHead?.message}
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