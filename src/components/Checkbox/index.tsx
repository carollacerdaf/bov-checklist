import { Container, Checkbox as ChBox } from "./styles";

type Props = {
    text: string,
    onPress: () => void,
}

export function Checkbox({ text, onPress }: Props) {
    return (
        <Container>
            <ChBox text={text}
                innerIconStyle={{ borderWidth: 2, borderRadius: 0 }}
                textStyle={{ textDecorationLine: 'none' }}
                onPress={onPress}
            />
        </Container>
    );
}