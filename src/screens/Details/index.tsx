import { TouchableOpacity, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation } from "@react-navigation/native";

import { AppNavigatorRoutesProps } from "src/routes/app.routes";

import { ListData } from "@components/ListData";
import { Header } from "@components/Header";

import { Container, ContainerData, Icon, MapContainer, Section, StyledMapView } from "./styles";

type Props = {
    name: string;
    farm: string;
    city: string;
    created_date: string;
    type: string;
    milk_produced: string;
    cows_head: string;
    had_supervision: string;
    latitude: number;
    longitude: number;
    onPress: () => void;
}

export function Details() {

    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function handleBackButton() {
        navigation.goBack();
    }

    const initialRegion = {
        latitude: -23.5,
        longitude: -46.6,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    return (
        <Container>
            <Header title="Detalhes" showBackButton onPress={handleBackButton} />
            <ContainerData>
                <Section>
                    <ListData caption="Nome" title='' />
                    <ListData caption="Fazenda" title='' />
                    <ListData caption="Cidade" title='' />
                    <ListData caption="Data de criação" title='' />
                    <ListData caption="Tipo" title='' />
                    <ListData caption="Quantidade de produtos de leite" title='' />
                    <ListData caption="Cabeça de gado" title='' />
                    <ListData caption="Supervisão" title='' />
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