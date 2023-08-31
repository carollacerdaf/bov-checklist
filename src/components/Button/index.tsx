import { TouchableOpacityProps } from 'react-native'
import { Container, Title } from './styles'

type Props = TouchableOpacityProps & {
    title: string;
    onPress: () => void;
}

export function Button({ title, onPress, ...rest }: Props) {
    return (
        <Container {...rest} onPress={onPress}>
            <Title>{title}</Title>
        </Container>
    )
}