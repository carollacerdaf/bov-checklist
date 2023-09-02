import { useMemo, useState } from 'react'
import { Alert, ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
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
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useTheme } from 'styled-components'
import { Checkbox } from '@components/Checkbox'
import { ChecklistDTO } from '@dtos/ChecklistDTO'

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

type RouteParamsProps = {
    checklistItem: ChecklistDTO;
}

export function Register() {
    const [isLoading, setIsLoading] = useState(false);

    const { register, update } = useApp();
    const { COLORS } = useTheme();

    const route = useRoute();

    const { checklistItem } = route.params as RouteParamsProps;
    console.log(checklistItem);

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

    async function handleUpdate(checklistItem: ChecklistDTO) {
        try {
            setIsLoading(true);
            await update(checklistItem).then(() => {
                navigation.goBack();
            })
        } catch (error) {
            Alert.alert('Não foi possível realizar o cadastro.Tente novamente.');
            setIsLoading(false);
        }
    }


    return (
        <Container>
            <Header title='Cadastro' onPress={handleBackButton} showBackButton />
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
                                value={checklistItem ? checklistItem.to.name : value}
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
                                value={checklistItem ? checklistItem.farmer.name : value}
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
                                value={checklistItem ? checklistItem.farmer.city : value}
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
                                value={checklistItem ? checklistItem.from.name : value}
                                errorMessage={errors.supervisor?.message}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="hadSupervision"
                        render={({ field: { onChange, value } }) => (
                            <Checkbox text='Houve supervisão'
                                onPress={() => onChange(checklistItem ? checklistItem.had_supervision : value = true)} />

                        )}
                    />
                    <Controller
                        control={control}
                        name='milkAmount'
                        render={({ field: { onChange, value } }) => (
                            <Input
                                title="Quantidade de Leite / mês"
                                onChangeText={onChange}
                                value={checklistItem ? checklistItem.amount_of_milk_produced.toString() : value.toString()}
                                errorMessage={errors.milkAmount?.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="type"
                        defaultValue=''
                        render={({ field: { onChange, value } }) => (
                            <RadioButton title='Tipo' onChange={onChange}
                                value={checklistItem ? checklistItem.type : value} id='' />

                        )}
                    />

                    <Controller
                        control={control}
                        name='cowsHead'
                        render={({ field: { onChange, value } }) => (
                            <Input title="Quantidade de cabeça de gado"
                                onChangeText={onChange}
                                value={checklistItem ? checklistItem.number_of_cows_head.toString() : value.toString()}
                                errorMessage={errors.cowsHead?.message}
                                onSubmitEditing={handleSubmit(handleForm)}
                                returnKeyType='send'
                            />
                        )}
                    />

                    <Button title="Cadastrar" onPress={checklistItem ? () => handleUpdate(checklistItem) : handleSubmit(handleForm)} isLoading={isLoading} />
                </Form>
            </ScrollView>
        </Container>
    )
}