import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 5px;
`;
export const Form = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    margin: 0 20px;
`;