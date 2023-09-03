import { useContext, useState } from 'react'
import { Alert, ScrollView } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigation, useRoute } from '@react-navigation/native'

import { useTheme } from 'styled-components/native';

import { AppNavigatorRoutesProps } from '@routes/app.routes'
import { useApp } from '@hooks/useApp'
import { ChecklistDTO } from '@dtos/ChecklistDTO'

import { AppContext } from '@contexts/AppContext'

import { Header } from "@components/Header"
import { Input } from "@components/Input"
import { Button } from "@components/Button"
import { RadioButton } from '@components/RadioButton'
import { Checkbox } from '@components/Checkbox'

import { registerSchema } from '@schema/index';

import { Container, Form } from "./styles"

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
    checklistItemId: string;
    title: string;
    buttonTitle: string;
}

export function Register() {
    const [isLoading, setIsLoading] = useState(false);

    const { register, update, deleteChecklistItem } = useApp();
    const { items } = useContext(AppContext)

    const route = useRoute();
    const { COLORS } = useTheme();

    const { checklistItemId, title, buttonTitle } = route.params as RouteParamsProps;

    const checklistItemById: ChecklistDTO = items.find(item =>
        item._id === checklistItemId) as ChecklistDTO;

    const verifyCheckListItem = checklistItemId === undefined;

    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        defaultValues: {
            name: verifyCheckListItem ? '' : checklistItemById.to.name,
            city: verifyCheckListItem ? '' : checklistItemById.farmer.city,
            cowsHead: verifyCheckListItem ? 0 : checklistItemById.number_of_cows_head,
            farm: verifyCheckListItem ? '' : checklistItemById.farmer.name,
            milkAmount: verifyCheckListItem ? 0 : checklistItemById.amount_of_milk_produced,
            supervisor: verifyCheckListItem ? '' : checklistItemById.from.name,
            type: verifyCheckListItem ? '' : checklistItemById.type,
            hadSupervision: verifyCheckListItem ? false : checklistItemById.had_supervision,
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

    function handleDelete() {
        try {
            Alert.alert('Remover', 'Deseja remover o grupo?', [
                { text: 'Não', style: 'cancel' },
                {
                    text: 'Sim', onPress: () =>
                        deleteChecklistItem(checklistItemId).then(() => {
                            navigation.navigate('home');
                        })
                }
            ])
        } catch (error) {
            Alert.alert('Não foi possível remover o item.')
        }
    }

    async function handleUpdate(data: FormDataProps) {
        try {
            setIsLoading(true);
            await update(checklistItemById, data).then(() => {
                navigation.goBack();
            })
        } catch (error) {
            Alert.alert('Não foi possível atualizar o item.Tente novamente.');
            setIsLoading(false);
        }
    }

    /*
    async function saveItem(item: ChecklistDTO) {
        const farmData = {
          _id: new Realm.BSON.ObjectId(),
          type: item.type,
          amount_of_milk_produced: item.amount_of_milk_produced,
          number_of_cows_head: item.number_of_cows_head,
          had_supervision: item.had_supervision,
          farmer: {
            name: item.farmer.name,
            city: item.farmer.city,
          },
          from: {
            name: item.from.name,
          },
          to: {
            name: item.to.name,
          },
          location: {
            latitude: item.location.latitude,
            longitude: item.location.longitude,
          },
          created_at: new Date().toString(),
          updated_at: new Date().toString(),
        };
        const realm = await getRealm();
      
        realm.write(()=>{
            realm.create('FarmData', farmData);
        })
      }

      async function handleAddRepository(){
        try {
          const response = await api.get('v1/checkList');
      
          response.data.map((item: ChecklistDTO)=>{
            saveItem(item);
          })
        } catch (error) {
            throw error;
        }
      }

      async function getData() {
        const realm = await getRealm();
      
        const data = realm.objects('FarmData');
        return data;
      }*/

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
                        render={({ field: { onChange, value } }) => (
                            <RadioButton title='Tipo' onChange={onChange}
                                errorMessage={errors.type?.message}
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

                    <Button title={buttonTitle} onPress={verifyCheckListItem ? handleSubmit(handleForm) :
                        handleSubmit(handleUpdate)} isLoading={isLoading} />
                    {!verifyCheckListItem ? <Button title='Remover Item' onPress={handleDelete}
                        style={{ backgroundColor: COLORS.RED }} /> : null}
                </Form>
            </ScrollView>
        </Container>
    )
}