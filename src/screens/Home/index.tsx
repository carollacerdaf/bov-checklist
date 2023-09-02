import { useState, useCallback } from 'react';
import { Alert, FlatList } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header'
import { ChecklistCard } from '@components/ChecklistCard';
import { Button } from '@components/Button';
import { ChecklistDTO } from '@dtos/ChecklistDTO';

import { Container } from './styles'
import { AppNavigatorRoutesProps } from 'src/routes/app.routes';
import { api } from '@service/api';
import { formatDate } from '@utils/DateFormat';
import { DetailsDTO } from '@dtos/DetailsDTO';
import { Loading } from '@components/Loading';

export function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [checklistsData, setChecklistsData] = useState<ChecklistDTO[]>([]);
    const [itemSelected, setItemSelected] = useState<ChecklistDTO>({} as ChecklistDTO);

    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function handleDetailScreen(checklistItemId: string) {
        navigation.navigate('details', { checklistItemId });
    }

    function handleRegisterScreen() {
        navigation.navigate('register', {
            title: 'Cadastro',
            buttonTitle: 'Cadastrar',
            checklistItem: {} as DetailsDTO
        });
    }

    async function fetchCheckLists() {
        try {
            setIsLoading(true);
            const response = await api.get('/v1/checkList');
            setChecklistsData(response.data);
        } catch (error) {
            Alert.alert('Não foi possível carregar as informações');
            setIsLoading(false);
        } finally {
            setIsLoading(false);
        }
    }

    useFocusEffect(useCallback(() => {
        fetchCheckLists();
    }, []));
    return (
        <Container>
            <Header title='BOVChecklist' />
            {isLoading ? <Loading /> :
                <FlatList
                    data={checklistsData}
                    renderItem={({ item }) => (
                        <ChecklistCard name={item.to.name}
                            city={item.farmer.city}
                            farm={item.farmer.name}
                            created_date={formatDate(item.created_at)}
                            onPress={() => handleDetailScreen(item._id)}
                        />
                    )}
                    keyExtractor={item => item._id}
                    showsVerticalScrollIndicator={false}
                    style={{ padding: 20 }}
                />
            }
            <Button title="Cadastrar" onPress={handleRegisterScreen} />

        </Container>
    )
}