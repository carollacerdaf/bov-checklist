import { useMemo } from "react";
import { RadioButtonProps, RadioGroup } from "react-native-radio-buttons-group";

import { Container, ErrorText, Title } from "./styles";

type Props = RadioButtonProps & {
    onChange: () => void;
    value: string;
    title: string;
    errorMessage?: string;
}

export function RadioButton({ onChange, value, title, errorMessage }: Props) {
    const radioButtons: RadioButtonProps[] = useMemo(() => ([
        {
            id: 'BPA',
            label: 'BPA',
            value: 'BPA'
        },
        {
            id: 'Antibiótico',
            label: 'Antibiótico',
            value: 'Antibiótico'
        },
        {
            id: 'BPF',
            label: 'BPF',
            value: 'BPF'
        }
    ]), []);
    return (
        <Container>
            <Title>{title}</Title>
            <RadioGroup
                radioButtons={radioButtons}
                onPress={onChange}
                selectedId={value}
                layout="row"
            />
            <ErrorText>{errorMessage}</ErrorText>
        </Container>
    );
}