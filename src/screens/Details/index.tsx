import { TouchableOpacity } from "react-native";

import { ListData } from "@components/ListData";
import { Header } from "@components/Header";

import { Container, ContainerData, Icon, Section } from "./styles";

type Props = {
    name: string;
    farm: string;
    city: string;
    created_date: string;
    type: string;
    milk_produced: string;
    cows_head: string;
    had_supervision: string;
    onPress: () => void;
}

export function Details({ name, farm, city, created_date, type,
    milk_produced, cows_head, had_supervision, onPress }: Props) {
    return (
        <Container>
            <Header />
            <ContainerData>
                <Section>
                    <ListData caption="Nome" title={name} />
                    <ListData caption="Fazenda" title={farm} />
                    <ListData caption="Cidade" title={city} />
                    <ListData caption="Data de criação" title={created_date} />
                    <ListData caption="Tipo" title={type} />
                    <ListData caption="Quantidade de produtos de leite" title={milk_produced} />
                    <ListData caption="Cabeça de gado" title={cows_head} />
                    <ListData caption="Supervisão" title={had_supervision} />
                </Section>
                <TouchableOpacity onPress={onPress}>
                    <Icon />
                </TouchableOpacity>
            </ContainerData>

        </Container>
    );
}