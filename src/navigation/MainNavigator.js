import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
/* import ProfileScreen from '../components/Profile/ProfileScreen';
import ProfileDetailScreen from '../components/Profile/ProfileDetailScreen';
import SettingsScreen from '../components/Settings/SettingsScreen';
import NotificationsSettingsScreen from '../components/Settings/NotificationsSettingsScreen';
import TwoFactorAuthSettingsScreen from '../components/Settings/TwoFactorAuthSettingsScreen';
import ContactsScreen from '../components/Contacts/ContactsScreen';
import ContactRequestsScreen from '../components/Contacts/ContactRequestsScreen';
import GroupsScreen from '../components/Contacts/GroupsScreen';
import ChatListScreen from '../components/Chat/ChatListScreen';
import ChatScreen from '../components/Chat/ChatScreen'; */
import Routes from '../constants/Routes';

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={Routes.chatList}>

            {/* <Stack.Screen name={Routes.profile} component={ProfileScreen} options={{ testID: Routes.profile }} />
            <Stack.Screen name={Routes.profileDetail} component={ProfileDetailScreen} options={{ testID: Routes.profileDetail }} />
            <Stack.Screen name={Routes.settings} component={SettingsScreen} options={{ testID: Routes.settings }} />
            <Stack.Screen name={Routes.notificationsSettings} component={NotificationsSettingsScreen} options={{ testID: Routes.notificationsSettings }} />
            <Stack.Screen name={Routes.twoFactorAuthSettings} component={TwoFactorAuthSettingsScreen} options={{ testID: Routes.twoFactorAuthSettings }} />
            <Stack.Screen name={Routes.contacts} component={ContactsScreen} options={{ testID: Routes.contacts }} />
            <Stack.Screen name={Routes.contactRequests} component={ContactRequestsScreen} options={{ testID: Routes.contactRequests }} />
            <Stack.Screen name={Routes.groups} component={GroupsScreen} options={{ testID: Routes.groups }} />
            <Stack.Screen name={Routes.chatList} component={ChatListScreen} options={{ testID: Routes.chatList }} />
            <Stack.Screen name={Routes.chat} component={ChatScreen} options={{ testID: Routes.chat }} /> */}

        </Stack.Navigator>
    );
};

export default MainNavigator;
