import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { CaretRight } from 'phosphor-react-native';

export const Container = styled(TouchableOpacity)`
width: 100%;
  height: 146px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 6px;

  flex-direction: column;

  padding: 20px;
  margin: 20px 50px;
  align-items: left;
  `;

export const Section = styled.View`
  flex-direction: row;
  margin-bottom: 4px;
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

export const Icon = styled(CaretRight).attrs(({theme}) => ({
    color: theme.COLORS.ORANGE,
    size: 32,
}))`

`