import { Container, Title, InputText  } from './styles'

type Props = {
    title: string;
}

export function Input({title}: Props) {
    return(
        <Container>
            <Title>{title}</Title>
            <InputText />
        </Container>
    );
}