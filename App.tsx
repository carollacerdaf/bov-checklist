import { StatusBar, Text, View } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { ThemeProvider } from 'styled-components'

import theme from './src/theme'

import { Loading } from '@components/Loading';
import { Home } from '@screens/Home';
import { Details } from '@screens/Details';
import { Register } from '@screens/Register';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Register /> : <Loading />}
    </ThemeProvider>
  );
}