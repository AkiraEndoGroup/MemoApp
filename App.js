import { Platform } from 'react-native';
import firebase from 'firebase';
import firestore from 'firebase/firestore';
import { createStackNavigator } from 'react-navigation';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

import env from './env.json';

const config = {
  apiKey: env.FIREBASE_API_KEY,
  authDomain: env.FIREBASE_AUTH_DOMAIN,
  databaseURL: env.FIREBASE_DB_URL,
  projectId: env.FIREBASE_PRJ_ID,
  storageBucket: env.FIREBASE_STORAGE,
  messagingSenderId: env.FIREBASE_SENDER_ID,
};
firebase.initializeApp(config);

const App = createStackNavigator({
  Login:      { screen: LoginScreen },
  Signup:     { screen: SignupScreen },
  Home:       { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit:   { screen: MemoEditScreen },
  MemoCreate: { screen: MemoCreateScreen },
}, {
  navigationOptions: {
    headerTitle: 'Kantanote',
    headerTintColor: '#fff',
    headerBackTitle: null,
    headerStyle: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      backgroundColor: '#265366',
      ...Platform.select({
        android: {
          height: 80,
          paddingTop: 20,
        },
      }),
    },
    headerTitleStyle: {
      color: '#fff',
    },
  },
});

export default App;
