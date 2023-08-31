import { BackButton, BackIcon, Container, Title } from './styles'

type Props = {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {

    return (
        <Container>
            {
                showBackButton &&
                <BackButton onPress={() => {}}>
                    <BackIcon />
                </BackButton>
            }
            <Title>BovChecklist</Title>
        </Container>
    );
}