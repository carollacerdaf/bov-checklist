import { ScrollView } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Header } from "@components/Header"
import { Input } from "@components/Input"
import { Button } from "@components/Button"

import { Container, Form } from "./styles"

export function Register() {
    const { COLORS } = useTheme();
    return (
        <Container>
            <Header />
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
                <Form>
                    <Input title="Nome" />
                    <Input title="Fazenda" />
                    <Input title="Cidade" />
                    <Input title="Supervisor" />
                    <Input title="Tipo" />
                    <Input title="Quantidade de Leite / mês" />
                    <Input title="Quantidade de cabeça de gado" />
                    <Button title="Cadastrar" />
                </Form>
            </ScrollView>
        </Container>
    )
}