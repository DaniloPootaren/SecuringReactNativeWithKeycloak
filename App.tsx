import {ReactNativeKeycloakProvider} from '@react-keycloak/native';
import keycloak from './keycloak';
import React from 'react';


import Routes from './routes';

const App = () => {

  return (
    <ReactNativeKeycloakProvider
      authClient={keycloak}
      initOptions={{
        redirectUri: 'myapp://Home',
        inAppBrowserOptions: {
        },
      }}>
      <Routes />
    </ReactNativeKeycloakProvider>
  );
};


export default App;
