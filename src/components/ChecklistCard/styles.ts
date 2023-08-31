import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { CaretRight } from 'phosphor-react-native';

export const Container = styled(TouchableOpacity)`
width: 100%;
  height: 146px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 6px;

  flex-direction: row;

  padding-left: 14px;
  margin-bottom: 14px;
  align-items: center;
  justify-content: left;
`;

export const SectionData = styled.View`
flex-direction: column;
margin-right: 50px;
`;

export const Icon = styled(CaretRight).attrs(({ theme }) => ({
    color: theme.COLORS.ORANGE,
    size: 32,
}))``