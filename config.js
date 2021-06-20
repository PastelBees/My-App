import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC30lUCpc5oCv-fWxrAs_R3Xa6pkWU3YIA',
  authDomain: 'my-app-19189.firebaseapp.com',
  projectId: 'my-app-19189',
  storageBucket: 'my-app-19189.appspot.com',
  messagingSenderId: '729914191269',
  appId: '1:729914191269:web:11a63ce8d47adf86aa4c4c',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();
