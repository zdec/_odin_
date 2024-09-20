import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../components/Auth/LoginScreen';
/* import ForgotPasswordScreen from '../components/Auth/ForgotPasswordScreen';
import ChangePasswordScreen from '../components/Auth/ChangePasswordScreen'; */
import Routes from '../constants/Routes';

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={Routes.login}>

            <Stack.Screen name={Routes.login} component={LoginScreen} options={{ testID: Routes.login }} />
            {/*  <Stack.Screen name={Routes.forgotPassword} component={ForgotPasswordScreen} options={{ testID: Routes.forgotPassword }} />
            <Stack.Screen name={Routes.changePassword} component={ChangePasswordScreen} options={{ testID: Routes.changePassword }} /> */}

        </Stack.Navigator>
    );
};

export default AuthNavigator;
