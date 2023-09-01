import { TouchableOpacity, Alert } from "react-native";
import { PROVIDER_GOOGLE } from 'react-native-maps';
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";

import { AppNavigatorRoutesProps } from "src/routes/app.routes";

import { ListData } from "@components/ListData";
import { Header } from "@components/Header";
import { ChecklistDTO } from "@dtos/ChecklistDTO";

import { Container, ContainerData, Icon, MapContainer, Section, StyledMapView } from "./styles";
import { api } from "@service/api";
import { useCallback, useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { Loading } from "@components/Loading";

type RouteParamsProps = {
    checklistItemId: string;
}

export function Details() {
    const [checklistItem, setchecklistItem] = useState<ChecklistDTO>({} as ChecklistDTO);
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation<AppNavigatorRoutesProps>();

    const { COLORS } = useTheme();
    const route = useRoute();

    const { checklistItemId } = route.params as RouteParamsProps;

    function handleBackButton() {
        navigation.goBack();
    }

    async function fetchItemDetails() {
        try {
            setIsLoading(true);
            await api.get(`/v1/checkList/${checklistItemId}`)
                .then((response) => {
                    setchecklistItem(response.data);
                })

        } catch (error) {
            Alert.alert('Não foi possível carregar as informações');
        } finally {
            setIsLoading(false);

        }
    }

    const initialRegion = {
        latitude: -23.5,
        longitude: -46.6,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    useFocusEffect(useCallback(() => {
        fetchItemDetails();
    }, []));

    return (

        <Container>

            <Header title="Detalhes" showBackButton onPress={handleBackButton} />
            {isLoading ? <Loading  /> :
                <>
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
                </>
            }

        </Container>

    );
}