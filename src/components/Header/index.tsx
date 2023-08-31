import { BackButton, BackIcon, Container, Title } from './styles'

type Props = {
    showBackButton?: boolean;
    title: string;
    onPress?: () => void;
}

export function Header({ showBackButton = false, title, onPress }: Props) {

    return (
        <Container>
            {
                showBackButton &&
                <BackButton onPress={onPress}>
                    <BackIcon />
                </BackButton>
            }
            <Title>{title}</Title>
        </Container>
    );
}