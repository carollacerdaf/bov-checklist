import styled, {css} from 'styled-components/native'

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
        margin-bottom: 2px;
    `};
`;