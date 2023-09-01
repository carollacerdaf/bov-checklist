import { ActivityIndicator, TouchableOpacityProps } from 'react-native'
import { Container, Title } from './styles'
import { useTheme } from 'styled-components'

type Props = TouchableOpacityProps & {
    title: string;
    onPress: () => void;
    isLoading?: boolean;
}

export function Button({ title, onPress, isLoading, ...rest }: Props) {
    const {COLORS} = useTheme();
    return (
        <Container {...rest} onPress={onPress}>
            {isLoading ?
                <ActivityIndicator size="small" color={COLORS.WHITE} /> :
                <Title>{title}</Title>}

        </Container>
    )
}