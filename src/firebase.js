import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA7pFwD4xSFSGgQHwnMWAibmsXKK8mueLE",
    authDomain: "react-todoist-813f5.firebaseapp.com",
    databaseURL: "https://react-todoist-813f5-default-rtdb.firebaseio.com",
    projectId: "react-todoist-813f5",
    storageBucket: "react-todoist-813f5.appspot.com",
    messagingSenderId: "480065659275",
    appId: "1:480065659275:web:cbf54bcab8f87e31d60f8e",
    measurementId: "G-LKD9SQ7P8D",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

export {
    firebase
};