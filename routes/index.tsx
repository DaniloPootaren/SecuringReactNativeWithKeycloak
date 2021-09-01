import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useKeycloak} from '@react-keycloak/native';

import PROTECTED from './protected'
import PUBLIC from './public'
import {Route} from './type'
import {linking} from './linking'



const Stack = createNativeStackNavigator();

const Routes = () => {
  const {keycloak, initialized} = useKeycloak();

  const authenticated = keycloak?.authenticated;
  const screens = keycloak?.authenticated ? PROTECTED: PUBLIC;

  useEffect(() => {
    if(!authenticated){
      keycloak?.login();
    } 
  });

  
  
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        {screens.map((screen: Route, index: number) => {
         return <Stack.Screen key={index} name={screen.name} component={screen.component} />
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
