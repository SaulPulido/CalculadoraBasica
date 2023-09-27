import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import App from './PantallaCalculadora';
import HomeScreen from './PantallaInicio';

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Pantalla de Inicio" component={HomeScreen} />
        <Tab.Screen name="Calculadora" component={App} />
      </Tab.Navigator>
  );
}

