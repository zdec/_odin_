// src/contexts/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { saveToSecureStorage, getFromSecureStorage, deleteFromSecureStorage } from '../utils/secureStorage';
import { encryptMessage, decryptMessage } from '../utils/cryptoUtils';
import { useTranslation } from 'react-i18next';
import { login as loginService } from '../services/authService'; // Importa el servicio

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { t } = useTranslation();
  const [authToken, setAuthToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadToken = async () => {
      const token = await getFromSecureStorage('authToken');
      if (token) {
        setAuthToken(token);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setLoading(false);
    };
    loadToken();
  }, []);

  const login = async (username, password) => {
    setLoading(true);
    try {
      const token = await loginService(username, password); // Usa el servicio
      await saveToSecureStorage('authToken', token);
      setAuthToken(token);
      setIsAuthenticated(true);
    } catch (error) {
      console.error(t('auth.errorLogin'), error); // Mensaje de error traducido
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await deleteFromSecureStorage('authToken');
    setAuthToken(null);
    setIsAuthenticated(false);
  };

  const checkToken = async () => {
    setLoading(true);
    const token = await getFromSecureStorage('authToken');
    if (token) {
      setAuthToken(token);
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    setLoading(false);
  };

  const encryptUserData = async (data) => {
    const encryptedData = await encryptMessage(data);
    return encryptedData;
  };

  const decryptUserData = async (encryptedData) => {
    const decryptedData = await decryptMessage(encryptedData);
    return decryptedData;
  };

  return (
    <AuthContext.Provider
      value={{
        authToken,
        isAuthenticated,
        login,
        logout,
        checkToken,
        loading,
        encryptUserData,
        decryptUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
