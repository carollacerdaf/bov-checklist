import { Caption, Section, Title } from "./styles";

type Props = {
    caption: string;
    title: string;
}

export function ListData({ caption, title }: Props) {
    return (
        <Section>
            <Caption>{caption}:</Caption>
            <Title>{title}</Title>
        </Section>
    );
}