import { TouchableOpacityProps } from 'react-native'
import { Container, Title } from './styles'
import { Loading } from '@components/Loading';

type Props = TouchableOpacityProps & {
    title: string;
    onPress: () => void;
    isLoading?: boolean;
}

export function Button({ title, onPress, isLoading, ...rest }: Props) {
    return (
        <Container {...rest} onPress={onPress}>
            {isLoading ?
                <Loading /> :
                <Title>{title}</Title>}

        </Container>
    )
}