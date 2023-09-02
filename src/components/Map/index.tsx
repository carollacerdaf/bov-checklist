import { Platform } from "react-native";
import { ListData } from "@components/ListData";
import { Container, LocationContainer, StyledMapView, Title } from "./styles";
import { PROVIDER_GOOGLE } from "react-native-maps";

type Props = {
    latitude: number,
    longitude: number,
}

export function Map({ latitude, longitude }: Props) {
    return (
        <Container>
            <ListData caption="Localização" />
            {Platform.OS === 'android' ?
                <StyledMapView
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: latitude,
                        longitude: longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                /> :
                <LocationContainer>
                    <ListData caption="Latitude" title={latitude.toString()} />
                    <ListData caption="Longitude" title={longitude.toString()} />
                </LocationContainer>
            }
        </Container>
    );
}