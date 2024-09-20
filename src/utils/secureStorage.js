import { NativeModules } from 'react-native';

const { Keychain } = NativeModules;

/**
 * Guarda un valor en el almacenamiento seguro utilizando Keychain.
 * @param {string} key - La clave con la que se almacenará el valor.
 * @param {string} value - El valor que se almacenará.
 * @returns {Promise<void>} Promesa que se resuelve cuando el valor ha sido guardado.
 * @throws {Error} Si ocurre un error al guardar en el almacenamiento seguro.
 */
export const saveToSecureStorage = async (key, value) => {
  try {
    await Keychain.setGenericPassword(key, value);
  } catch (error) {
    console.error('Error saving to secure storage:', error);
    throw error;
  }
};

/**
 * Obtiene un valor del almacenamiento seguro utilizando Keychain.
 * @param {string} key - La clave del valor que se desea obtener.
 * @returns {Promise<string|null>} Promesa que se resuelve con el valor almacenado o null si no se encuentra.
 * @throws {Error} Si ocurre un error al obtener el valor del almacenamiento seguro.
 */
export const getFromSecureStorage = async (key) => {
  try {
    const credentials = await Keychain.getGenericPassword();
    return credentials ? credentials.password : null;
  } catch (error) {
    console.error('Error getting from secure storage:', error);
    throw error;
  }
};

/**
 * Elimina un valor del almacenamiento seguro utilizando Keychain.
 * @param {string} key - La clave del valor que se desea eliminar.
 * @returns {Promise<void>} Promesa que se resuelve cuando el valor ha sido eliminado.
 * @throws {Error} Si ocurre un error al eliminar del almacenamiento seguro.
 */
export const removeFromSecureStorage = async (key) => {
  try {
    await Keychain.resetGenericPassword();
  } catch (error) {
    console.error('Error removing from secure storage:', error);
    throw error;
  }
};
