import styled, {css} from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled.View`
    flex-direction: column;
    margin-bottom: 10px;
    margin-top: 14px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
font-family: ${theme.FONT_FAMILY.BOLD};
font-size: ${theme.FONT_SIZE.SM}px;
color: ${theme.COLORS.GRAY_200};
margin-bottom: 4px;
`};
`;

export const InputText = styled(TextInput)`
flex:1;
min-height: 56px;
max-height: 56px;
border-radius: 6px;
padding: 16px;
margin-bottom: 4px;

${({ theme }) => css`
font-family: ${theme.FONT_FAMILY.REGULAR};
font-size: ${theme.FONT_SIZE.SM}px;
background-color: ${theme.COLORS.GRAY_100};
color: ${theme.COLORS.GRAY_200};
`};`;