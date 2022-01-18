import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Home from './components/Home';
import Handler from './components/Handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from "react-redux";
import store from './components/Data/store';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='cash book' component={Home} options={{
            title: 'Cash Book',
            headerTitleAlign: 'center',
            headerStyle:{
              backgroundColor: '#609efa',
            },
          }}/>
          <Stack.Screen name='Cash in/out' component={Handler} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

