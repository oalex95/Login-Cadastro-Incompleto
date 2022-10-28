import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import firebase from 'firebase'
import firebaseConfig from './database/Firebase'

const Stack = createStackNavigator();

function Home(){
  return (
    <Stack.Navigator
    initialRouteName=""
    screenOptions={{
      headerTitleAlign: 'center',
      headerStyle:{
        backgroundColor: '#000080'
      },
      headerTintColor: '#fff',
      headerTitleStyle:{
        fontWeight:'bold'
      },
    }}>
      <Stack.Screen
      name="Signup" 
        component={Signup} 
        options={{ title: 'Cadastrar' }}
      />
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'Logar'},
          {headerLeft: null} 
        }
      />
      <Stack.Screen 
       name="Dashboard" 
       component={Dashboard} 
       options={
         { title: 'Inicio' },
         {headerLeft: null} 
       }
      />

    </Stack.Navigator>
  )
}

export default function App(){
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  return(
    <NavigationContainer>
      <Home/>
    </NavigationContainer>
  )
}
