import { useMemo, useState } from 'react'
import { Alert, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { AppNavigatorRoutesProps } from 'src/routes/app.routes'

import { useApp } from '@hooks/useApp'

import { Header } from "@components/Header"
import { Input } from "@components/Input"
import { Button } from "@components/Button"

import { Container, Form } from "./styles"
import { registerSchema } from '@schema/index';
import { RadioButtonProps, RadioGroup } from 'react-native-radio-buttons-group'
import { RadioButton } from '@components/RadioButton'

type FormDataProps = {
    name: string;
    farm: string;
    city: string;
    supervisor: string;
    type: string;
    milkAmount: number;
    cowsHead: number;
    hadSupervision: boolean;
}

export function Register() {
    const { register } = useApp();
    const [isLoading, setIsLoading] = useState(false);

    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        defaultValues: {
            name: '',
            city: '',
            cowsHead: 0,
            farm: '',
            milkAmount: 0,
            supervisor: '',
            type: '',
            hadSupervision: false,
        },
        resolver: yupResolver(registerSchema)
    });

    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function handleBackButton() {
        navigation.navigate('home');
    }

    async function handleForm(data: FormDataProps) {
        try {
            setIsLoading(true);
            await register(data).then(() => {
                navigation.goBack();
            })
        } catch (error) {
            Alert.alert('Não foi possível realizar o cadastro.Tente novamente.');
            setIsLoading(false);
        }

    }
    const [selectedId, setSelectedId] = useState<string | undefined>();


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
                        name="type"
                        defaultValue=''
                        render={({ field: { onChange, value } }) => (
                            <RadioButton title='Tipo' onChange={onChange} value={value} id='' />

                        )}
                    />
                    <Controller
                        control={control}
                        name='milkAmount'
                        render={({ field: { onChange, value } }) => (
                            <Input
                                title="Quantidade de Leite / mês"
                                onChangeText={onChange}
                                value={value.toString()}
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
                                value={value.toString()}
                                errorMessage={errors.cowsHead?.message}
                                onSubmitEditing={handleSubmit(handleForm)}
                                returnKeyType='send'
                            />
                        )}
                    />

                    <Button title="Cadastrar" onPress={handleSubmit(handleForm)} isLoading={isLoading} />
                </Form>
            </ScrollView>
        </Container>
    )
}