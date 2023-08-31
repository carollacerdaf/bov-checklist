import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Container, Icon, SectionData } from "./styles";
import { ListData } from '@components/ListData';

type Props = {
    name: string;
    farm: string;
    city: string;
    created_date: string;
    onPress: () => void;
}

export function ChecklistCard({ name, farm, city, created_date, onPress }: Props) {
    return (
        <Container onPress={onPress}>
            <SectionData>
                <ListData caption='Nome' title={name} />
                <ListData caption='Fazenda' title={farm} />
                <ListData caption='Cidade' title={city} />
                <ListData caption='Data de Criação' title={created_date} />
            </SectionData>
            <Icon />


        </Container>
    );
}