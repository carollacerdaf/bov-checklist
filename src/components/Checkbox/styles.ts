import BouncyCheckbox from 'react-native-bouncy-checkbox';
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
     width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: left;
`;

export const Checkbox = styled(BouncyCheckbox).attrs(({ theme }) => ({
    size: 20,
    fillColor: theme.COLORS.BLACK,
    unfillColor: theme.COLORS.WHITE,
    iconStyle: { borderRadius: 0 },
}))`
  `;