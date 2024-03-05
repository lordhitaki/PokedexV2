/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import firebase from '@react-native-firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyAYR4CxnRbLjtH5KcmWodtYHrw6VvHD5uE',
    authDomain: 'pokedex-a5601.firebaseapp.com',
    projectId: 'pokedex-a5601',
    storageBucket: "pokedex-a5601.appspot.com",
    messagingSenderId: '255840001245',
    appId: '1:255840001245:android:6834baa6f7fd7ab4340f34',
    databaseURL: "https://pokedex-a5601-default-rtdb.firebaseio.com/"
  };
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

AppRegistry.registerComponent(appName, () => App);
