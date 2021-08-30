import {ReactNativeKeycloakProvider} from '@react-keycloak/native';
import {useKeycloak} from '@react-keycloak/native';
import keycloak from './keycloak';
import React, {useEffect} from 'react';

import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    keycloak.login();
  });

  return (
    <ReactNativeKeycloakProvider
      authClient={keycloak}
      initOptions={{
        redirectUri: 'myapp://Homepage',
        // if you need to customize "react-native-inappbrowser-reborn" View you can use the following attribute
        inAppBrowserOptions: {
          // For iOS check: https://github.com/proyecto26/react-native-inappbrowser#ios-options
          // For Android check: https://github.com/proyecto26/react-native-inappbrowser#android-options
        },
      }}></ReactNativeKeycloakProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
