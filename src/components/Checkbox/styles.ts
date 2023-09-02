import BouncyCheckbox from 'react-native-bouncy-checkbox';
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
     width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: left;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_200};
    `};
`;

export const Checkbox = styled(BouncyCheckbox).attrs(({ theme }) => ({
    size: 20,
    fillColor: theme.COLORS.BLACK,
    unfillColor: theme.COLORS.WHITE,
    iconStyle: { borderRadius: 0 },
}))`
  `;