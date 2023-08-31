import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native'

export const Container = styled(TouchableOpacity)`
flex: 1;
min-height: 56px;
max-height: 56px;
background-color: ${({ theme }) => theme.COLORS.BLUE};
border-radius: 6px;
justify-content: center;
align-items : center;
margin: 10px 20px;
`;

export const Title = styled.Text`
${({ theme }) => css`
font-size: ${theme.FONT_SIZE.MD}px;
color: ${theme.COLORS.WHITE};
font-family: ${theme.FONT_FAMILY.BOLD};
`};
`;