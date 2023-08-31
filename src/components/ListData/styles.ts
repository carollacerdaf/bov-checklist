import styled, { css } from 'styled-components/native';

export const Section = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
  `;

export const Caption = styled.Text`
${({ theme }) => css`
font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.MD}px;
  color: ${theme.COLORS.GRAY_200};
`};
margin-right: 4px;
`;

export const Title = styled.Text`
${({ theme }) => css`
font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.MD}px;
  color: ${theme.COLORS.GRAY_200};
`};`;