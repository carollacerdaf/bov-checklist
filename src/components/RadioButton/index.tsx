import { useMemo } from "react";
import { RadioButtonProps, RadioGroup } from "react-native-radio-buttons-group";

import { Container, Title } from "./styles";

type Props = RadioButtonProps & {
    onChange: () => void;
    value: string;
    title: string;
}

export function RadioButton({ onChange, value, title }: Props) {
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
        </Container>
    );
}