import { TouchableOpacity, StyleSheet, Alert } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation, useRoute } from "@react-navigation/native";

import { AppNavigatorRoutesProps } from "src/routes/app.routes";

import { ListData } from "@components/ListData";
import { Header } from "@components/Header";
import { ChecklistDTO } from "@dtos/ChecklistDTO";

import { Container, ContainerData, Icon, MapContainer, Section, StyledMapView } from "./styles";
import { api } from "@service/api";
import { useEffect, useState } from "react";

type RouteParams = {
    checklistItemId: string;
}

export function Details() {
    const [checklistItem, setchecklistItem] = useState<ChecklistDTO>({} as ChecklistDTO);

    const navigation = useNavigation<AppNavigatorRoutesProps>();
    const route = useRoute();
    const { checklistItemId } = route.params as RouteParams;

    function handleBackButton() {
        navigation.goBack();
    }

    async function fetchCheckItemById() {
        try {
            const response = await api.get(`/v1/checkList/${checklistItemId}`);
            setchecklistItem(response.data);
        } catch (error) {
            Alert.alert('Não foi possível carregar as informações');
        } 
    }

    const initialRegion = {
        latitude: -23.5,
        longitude: -46.6,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };


    useEffect(() => {
        fetchCheckItemById();
    }, [])
    return (
        <Container>
            <Header title="Detalhes" showBackButton onPress={handleBackButton} />
            <ContainerData>
                <Section>
                    <ListData caption="Nome" title={checklistItem.from.name} />
                    <ListData caption="Fazenda" title={checklistItem.farmer.name} />
                    <ListData caption="Cidade" title={checklistItem.farmer.city} />
                    <ListData caption="Data de criação" title={checklistItem.created_at} />
                    <ListData caption="Tipo" title={checklistItem.type} />
                    <ListData caption="Quantidade de produtos de leite" title={(checklistItem.amount_of_milk_produced).toString()} />
                    <ListData caption="Cabeça de gado" title={(checklistItem.number_of_cows_head).toString()} />
                    <ListData caption="Supervisão" title={checklistItem.to.name} />
                </Section>
                <TouchableOpacity>
                    <Icon />
                </TouchableOpacity>
            </ContainerData>
            <MapContainer>
                <ListData caption="Localização" />
                <StyledMapView
                    provider={PROVIDER_GOOGLE}
                    initialRegion={initialRegion}
                />
            </MapContainer>
        </Container>
    );
}