import { RNKeycloak } from '@react-keycloak/native';

// Setup Keycloak instance as needed
// Pass initialization options as required
const keycloak = new RNKeycloak({
  url: 'http://10.212.134.11:8080/auth',
  realm: 'Frontend',
  clientId: 'login-app',
});

export default keycloak;
