import { TextInputProps } from 'react-native'
import { Container, Title, InputText, ErrorText } from './styles'

type Props = TextInputProps & {
    title: string;
    errorMessage?: string;
}

export function Input({ title, errorMessage, ...rest }: Props) {
    return (
        <Container>
            <Title>{title}</Title>
            <InputText {...rest}/>
            <ErrorText>{errorMessage}</ErrorText>
        </Container>
    );
}