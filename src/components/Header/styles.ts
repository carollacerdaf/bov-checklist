import styled, { css } from 'styled-components/native'
import { ArrowLeft } from 'phosphor-react-native'

export const Container = styled.View`
     width: 100%;
min-height: 60px;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
    background-color: ${({ theme }) => theme.COLORS.BLUE};
`;

export const Title = styled.Text`
${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.MD}px;
  font-family: ${theme.FONT_FAMILY.BOLD};;
  color: ${theme.COLORS.WHITE};
`};
  text-align: center;
  `;

export const BackButton = styled.TouchableOpacity`
    flex: 1;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
    color: theme.COLORS.ORANGE,
    size: 32,
}))`

`