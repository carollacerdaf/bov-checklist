import MapView from 'react-native-maps';
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
padding: 20px;
`;
export const LocationContainer = styled.View`
margin-left: 10px;
`;

export const StyledMapView = styled(MapView)`
width: 100%;
height: 100%;
`;

export const Title = styled.Text`
${({ theme }) => css`
font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.MD}px;
  color: ${theme.COLORS.GRAY_200};
`};`;