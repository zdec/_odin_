const sodium = require('react-native-sodium');

/**
 * Genera un par de claves pública y privada utilizando sodium.
 * @returns {Promise<{publicKey: Buffer, privateKey: Buffer}>} Un objeto que contiene las claves pública y privada.
 */
const generateKeyPair = async () => {
  const keyPair = await sodium.crypto_box_keypair();
  return keyPair;
};

/**
 * Encripta un mensaje utilizando una clave pública y un par de claves generadas.
 * @param {string} message - El mensaje que se desea encriptar.
 * @param {Buffer} publicKey - La clave pública del receptor.
 * @returns {Promise<{encryptedMessage: Buffer, nonce: Buffer, publicKey: Buffer}>} Un objeto que contiene el mensaje encriptado, el nonce y la clave pública.
 */
const encryptMessage = async (message, publicKey) => {
  const keyPair = await generateKeyPair();
  const nonce = sodium.randombytes_buf(sodium.crypto_box_NONCEBYTES);

  const encryptedMessage = await sodium.crypto_box_easy(message, nonce, publicKey, keyPair.privateKey);
  return { encryptedMessage, nonce, publicKey: keyPair.publicKey };
};

/**
 * Desencripta un mensaje utilizando una clave privada y una clave pública.
 * @param {Buffer} encryptedMessage - El mensaje encriptado.
 * @param {Buffer} nonce - El nonce usado para encriptar el mensaje.
 * @param {Buffer} publicKey - La clave pública del emisor.
 * @param {Buffer} privateKey - La clave privada del receptor.
 * @returns {Promise<string>} El mensaje desencriptado.
 */
const decryptMessage = async (encryptedMessage, nonce, publicKey, privateKey) => {
  const decryptedMessage = await sodium.crypto_box_open_easy(encryptedMessage, nonce, publicKey, privateKey);
  return decryptedMessage.toString();
};

export { encryptMessage, decryptMessage, generateKeyPair };
