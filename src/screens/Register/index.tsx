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
import { DetailsDTO } from '@dtos/DetailsDTO'

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
    checklistItem: DetailsDTO;
    title: string;
    buttonTitle: string;
}

export function Register() {
    const [isLoading, setIsLoading] = useState(false);

    const { register, update } = useApp();

    const route = useRoute();

    const { checklistItem, title, buttonTitle } = route.params as RouteParamsProps;
    
    const verifyCheckListItem = Object.keys(checklistItem).length === 0;
    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        defaultValues: {
            name: verifyCheckListItem ? '' : checklistItem.to.name,
            city: verifyCheckListItem ? '' : checklistItem.farmer.city,
            cowsHead: verifyCheckListItem ? 0 : checklistItem.number_of_cows_head,
            farm: verifyCheckListItem ? '' : checklistItem.farmer.name,
            milkAmount: verifyCheckListItem ? 0 : checklistItem.amount_of_milk_produced,
            supervisor: verifyCheckListItem ? '' : checklistItem.from.name,
            type: verifyCheckListItem ? '' : checklistItem.type,
            hadSupervision: verifyCheckListItem ? false : checklistItem.had_supervision,
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

    async function handleUpdate(data: FormDataProps) {
        try {
            setIsLoading(true);
            await update(checklistItem, data).then(() => {
                navigation.goBack();
            })
        } catch (error) {
            Alert.alert('Não foi possível realizar o cadastro.Tente novamente.');
            setIsLoading(false);
        }
    }


    return (
        <Container>
            <Header title={title} onPress={handleBackButton} showBackButton />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Form>
                    <Controller
                        control={control}
                        name='name'
                        defaultValue={''}
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
                        name="hadSupervision"
                        render={({ field: { onChange, value } }) => (
                            <Checkbox text='Houve supervisão'
                                onPress={() => onChange(value = true)} />

                        )}
                    />
                    <Controller
                        control={control}
                        name='milkAmount'
                        render={({ field: { onChange, value } }) => (
                            <Input
                                title="Quantidade de Leite / mês"
                                keyboardType='numeric'
                                onChangeText={onChange}
                                value={value.toString()}
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
                                value={value} id='' />

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
                                keyboardType='numeric'
                                returnKeyType='send'
                            />
                        )}
                    />

                    <Button title={buttonTitle} onPress={verifyCheckListItem ? handleSubmit(handleForm) : handleSubmit(handleUpdate)} isLoading={isLoading} />
                </Form>
            </ScrollView>
        </Container>
    )
}