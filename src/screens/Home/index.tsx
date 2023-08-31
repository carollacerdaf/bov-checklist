import { useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header'
import { ChecklistCard } from '@components/ChecklistCard';
import { Button } from '@components/Button';

import { Container } from './styles'
import { AppNavigatorRoutesProps } from 'src/routes/app.routes';

export function Home() {

    function formatDate(isodate: string): string {
        return new Date(isodate).toISOString().split('T')[0].split('-').reverse().join('/')
    }

    const [farmsData, setFarmsData] = useState([
        {
            "_id": 77777275,
            "type": "Antibiótico",
            "amount_of_milk_produced": "200",
            "farmer": {
                "name": "Marianos",
                "city": "São Paulo"
            },
            "from": {
                "name": "Mariano Silva"
            },
            "to": {
                "name": "Thiago Moraes"
            },
            "number_of_cows_head": "25",
            "had_supervision": true,
            "location": {
                "latitude": -23.5,
                "longitude": -46.6
            },
            "created_at": "2023-04-15T04:54:33.000Z",
            "updated_at": "2023-04-15T04:54:33.000Z",
            "__v": 0
        },
        {
            "_id": 20386748,
            "type": "BPA",
            "amount_of_milk_produced": "25",
            "farmer": {
                "city": "Campos do Jordão",
                "name": "Fazenoda do Paulo"
            },
            "from": {
                "name": "João Paulo"
            },
            "to": {
                "name": "Leonardo"
            },
            "number_of_cows_head": "2",
            "had_supervision": false,
            "location": {
                "latitude": 25.5,
                "longitude": 32.5
            },
            "created_at": "2023-04-16T15:04:48.000Z",
            "updated_at": "2023-04-16T15:04:48.000Z",
            "__v": 0
        }
    ]);

    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function handleDetailScreen() {
        navigation.navigate('details');
    }

    function handleRegisterScreen() {
        navigation.navigate('register');
    }
    return (
        <Container>
            <Header title='BOVChecklist'/>
            <FlatList
                data={farmsData}
                renderItem={({ item }) => (
                    <ChecklistCard name={item.from.name}
                        city={item.farmer.city}
                        farm={item.farmer.name}
                        created_date={formatDate(item.created_at)}
                        onPress={handleDetailScreen}
                    />
                )}
                keyExtractor={item => item.created_at}
                showsVerticalScrollIndicator={false}
                style={{ padding: 20 }}
            />
            <Button title="Cadastrar" onPress={handleRegisterScreen} />

        </Container>
    )
}