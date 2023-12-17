
import { SigIn } from './src/screens/Signin';
import {ThemeProvider} from 'styled-components/native';
import theme from './src/theme/';
import {useFonts,Roboto_400Regular,Roboto_700Bold} from '@expo-google-fonts/roboto';
import { Loading } from './src/components/Loading';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        style="light"
        backgroundColor="transparent"
        translucent={true}
       
      />
      <SigIn />
    </ThemeProvider>
  );
}

