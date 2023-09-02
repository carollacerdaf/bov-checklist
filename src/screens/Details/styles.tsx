import MapView from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context'
import { NotePencil } from 'phosphor-react-native';
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ContainerData = styled.View`
    margin: 10px 20px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    flex-direction: row;
`;

export const Section = styled.View`
    padding: 20px;
`;

export const Icon = styled(NotePencil).attrs(({ theme }) => ({
    color: theme.COLORS.BLUE,
    size: 32,
}))`
margin-top: 14px ;
`