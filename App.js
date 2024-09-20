import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/i18n';
import AppNavigator from './src/navigation/AppNavigator';
import StoreProvider from './src/providers/Provider';

/**
 * Componente principal de la aplicación.
 * Envuelve la aplicación con los proveedores necesarios para el manejo del estado global,
 * navegación y traducciones.
 * 
 * @returns {JSX.Element} El componente de la aplicación con los proveedores.
 */
const App = () => {
  return (
    <StoreProvider>
      <NavigationContainer>
        <I18nextProvider i18n={i18n}>
          <AppNavigator />
        </I18nextProvider>
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
