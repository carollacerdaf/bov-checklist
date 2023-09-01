import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled.View`
    flex-direction: column;
    margin-bottom: 0px;
    margin-top: 5px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
font-family: ${theme.FONT_FAMILY.BOLD};
font-size: ${theme.FONT_SIZE.SM}px;
color: ${theme.COLORS.GRAY_200};
margin-bottom: 2px;
margin-top: 2px;
`};
`;

export const InputText = styled(TextInput)`
flex:1;
min-height: 45px;
max-height: 50px;
border-radius: 6px;
padding-left: 16px;

${({ theme }) => css`
font-family: ${theme.FONT_FAMILY.REGULAR};
font-size: ${theme.FONT_SIZE.SM}px;
background-color: ${theme.COLORS.GRAY_100};
color: ${theme.COLORS.GRAY_200};
`};`;

export const ErrorText = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.RED};
`};`;