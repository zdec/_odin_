/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

/**
 * Registra el componente principal de la aplicación en el registro de la aplicación de React Native.
 * Este es el punto de entrada para la aplicación.
 */
AppRegistry.registerComponent(appName, () => App);
