import { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";

import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { ListData } from "@components/ListData";
import { Header } from "@components/Header";
import { Map } from '@components/Map'
import { Loading } from "@components/Loading";

import { ChecklistDTO } from "@dtos/ChecklistDTO";
import { formatDate } from "@utils/DateFormat";

import { AppContext } from "@contexts/AppContext";

import { Container, ContainerData, Icon, Section } from "./styles";

type RouteParamsProps = {
    checklistItemId: string;
}

export function Details() {
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation<AppNavigatorRoutesProps>();

    const route = useRoute();


    const { checklistItemId } = route.params as RouteParamsProps;

    const { items, updateData } = useContext(AppContext)

    const checklistItemById: ChecklistDTO = items.find(item => item._id === checklistItemId) as ChecklistDTO;

    function handleBackButton() {
        navigation.goBack();
    }


    function handleUpdateScreen() {
        navigation.navigate(
            'register', {
            checklistItemId,
            buttonTitle: 'Atualizar',
            title: 'Atualização'
        });
    }

    useFocusEffect(() => {
        setIsLoading(true);
        updateData();
        setIsLoading(false);
    });

    return (

        <Container>
        {isLoading ? <Loading /> :
        <>
            <Header title="Detalhes" showBackButton onPress={handleBackButton} />
            <ContainerData>
                    <Section>
                        <ListData caption="Nome" title={checklistItemById.to.name} />
                        <ListData caption="Fazenda" title={checklistItemById.farmer.name} />
                        <ListData caption="Cidade" title={checklistItemById.farmer.city} />
                        <ListData caption="Data de criação" title={formatDate(checklistItemById.created_at)} />
                        <ListData caption="Tipo" title={checklistItemById.type} />
                        <ListData caption="Quantidade de produtos de leite" title={checklistItemById.amount_of_milk_produced.toString()} />
                        <ListData caption="Cabeça de gado" title={checklistItemById.number_of_cows_head.toString()} />
                        <ListData caption="Supervisão" title={checklistItemById.from.name} />
                    </Section>

                <TouchableOpacity onPress={handleUpdateScreen}>
                    <Icon />
                </TouchableOpacity>
            </ContainerData>
            <Map latitude={checklistItemById.location.latitude}
                longitude={checklistItemById.location.longitude} />
                </>
            }
        </Container>

    );
}