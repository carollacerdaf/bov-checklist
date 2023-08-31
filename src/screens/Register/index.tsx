import { ScrollView } from 'react-native'
import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'

import { AppNavigatorRoutesProps } from 'src/routes/app.routes'

import { Header } from "@components/Header"
import { Input } from "@components/Input"
import { Button } from "@components/Button"

import { Container, Form } from "./styles"

export function Register() {
    const { COLORS } = useTheme();

    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function handleBackButton() {
        navigation.navigate('home');
    }

    return (
        <Container>
            <Header title='Cadastro' showBackButton onPress={handleBackButton}/>
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
                    <Button title="Cadastrar" onPress={() => {}} />
                </Form>
            </ScrollView>
        </Container>
    )
}