import { TouchableOpacityProps } from 'react-native'
import { Caption, Container, Section, Title, Icon } from "./styles";

type Props = TouchableOpacityProps;

export function ChecklistCard({ ...rest }: Props) {
    return (
        <Container {...rest}>
            <Section>
                <Caption>Nome:</Caption>
                <Title>João</Title>
            </Section>
            <Section>
                <Caption>Fazenda:</Caption>
                <Title>Marianos</Title>
            </Section>
            <Section>
                <Caption>Cidade:</Caption>
                <Title>São Paulo</Title>
            </Section>
            <Section>
                <Caption>Data de criação:</Caption>
                <Title>12/12/2020</Title>
            </Section>
            <Icon />
        </Container>
    );
}