import { TouchableOpacity, Alert } from "react-native";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";

import { AppNavigatorRoutesProps } from "src/routes/app.routes";

import { ListData } from "@components/ListData";
import { Header } from "@components/Header";
import { ChecklistDTO } from "@dtos/ChecklistDTO";

import { Container, ContainerData, Icon, Section } from "./styles";
import { api } from "@service/api";
import { useCallback, useState } from "react";
import { Loading } from "@components/Loading";
import { Map } from '@components/Map'
import { formatDate } from "@utils/DateFormat";
import { DetailsDTO } from "@dtos/DetailsDTO";

type RouteParamsProps = {
    checklistItemId: string;
}

export function Details() {
    const [checklistItem, setchecklistItem] = useState<DetailsDTO>({} as DetailsDTO);
    const [isLoading, setIsLoading] = useState(true);
    const navigation = useNavigation<AppNavigatorRoutesProps>();

    const route = useRoute();

    const { checklistItemId } = route.params as RouteParamsProps;

    function handleBackButton() {
        navigation.goBack();
    }

    async function fetchItemDetails() {
        try {
            setIsLoading(true);
            const response = await api.get(`/v1/checkList/${checklistItemId}`);
            setchecklistItem(response.data);
        } catch (error) {
            Alert.alert('Não foi possível carregar as informações');
        } finally {
            setIsLoading(false);

        }
    }

    function handleUpdateScreen(checklistItem: DetailsDTO) {
        navigation.navigate(
            'register', {
            checklistItem,
            buttonTitle: 'Atualizar',
            title: 'Atualização'
        });
    }

    useFocusEffect(useCallback(() => {
        fetchItemDetails();
    }, []));

    return (

        <Container>
            <Header title="Detalhes" showBackButton onPress={handleBackButton} />
            {isLoading ? <Loading /> :
                <>
                    <ContainerData>

                        <Section>
                            <ListData caption="Nome" title={checklistItem.to.name} />
                            <ListData caption="Fazenda" title={checklistItem.farmer.name} />
                            <ListData caption="Cidade" title={checklistItem.farmer.city} />
                            <ListData caption="Data de criação" title={formatDate(checklistItem.created_at)} />
                            <ListData caption="Tipo" title={checklistItem.type} />
                            <ListData caption="Quantidade de produtos de leite" title={checklistItem.amount_of_milk_produced.toString()} />
                            <ListData caption="Cabeça de gado" title={checklistItem.number_of_cows_head.toString()} />
                            <ListData caption="Supervisão" title={checklistItem.from.name} />
                        </Section>

                        <TouchableOpacity onPress={() => handleUpdateScreen(checklistItem)}>
                            <Icon />
                        </TouchableOpacity>
                    </ContainerData>
                    <Map latitude={checklistItem.location.latitude}
                        longitude={checklistItem.location.longitude} />
                </>
            }

        </Container>

    );
}