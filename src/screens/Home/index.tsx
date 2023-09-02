import { useState, useContext, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header'
import { ChecklistCard } from '@components/ChecklistCard';
import { Button } from '@components/Button';
import { Loading } from '@components/Loading';

import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { formatDate } from '@utils/DateFormat';

import { AppContext } from '@contexts/AppContext';

import { Container } from './styles'
import { getChecklist } from '@storage/getChecklist';
import { api } from '@service/api';

export function Home() {
    const [isLoading, setIsLoading] = useState(false);

    const { items, updateData } = useContext(AppContext)


    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function handleDetailScreen(checklistItemId: string) {
        navigation.navigate('details', { checklistItemId });
    }

    function handleRegisterScreen() {
        navigation.navigate('register', {
            title: 'Cadastro',
            buttonTitle: 'Cadastrar'
        });
    }

    /*async function storageData() {
        try {
            const storedItems = await getChecklist();
            if (storedItems !== null) {
                setIsLoading(true);
                storedItems.map((item) => {
                    register(item)
                    console.log('item dto', item);
                })
            }
        } catch (error) {
            throw error;
        } finally {
            setIsLoading(false);
        }
    }*/

    useFocusEffect(() => {
        updateData();
    });

    return (
        <Container>
            <Header title='BOVChecklist' />
            {isLoading ? <Loading /> :
                <FlatList
                    data={items}
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