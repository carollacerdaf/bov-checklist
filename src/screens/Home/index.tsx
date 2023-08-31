import { Header } from '@components/Header'
import { ChecklistCard } from '@components/ChecklistCard';

import { Container } from './styles'

export function Home() {
    return (
        <Container>
            <Header />
            <ChecklistCard />
            <ChecklistCard />
            <ChecklistCard />
        </Container>
    )
}