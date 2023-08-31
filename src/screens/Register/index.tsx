import CheckBox from 'react-native-check-box'
import { useTheme } from 'styled-components/native'

import { Header } from "@components/Header"
import { Input } from "@components/Input"
import { Button } from "@components/Button"

import { Container } from "./styles"

export function Register() {
    const { COLORS } = useTheme();
    return (
        <Container>
            <Header />
            <Input title="Nome" />
            <Input title="Fazenda" />
            <Input title="Cidade" />
            <CheckBox tintColor={COLORS.ORANGE}/>
            <Button title="Cadastrar"/>
        </Container>
    )
}