import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyB6EypgNnAOxm_kN3OFBMOdfwNqckm1YeQ",
  authDomain: "checkitup-14506.firebaseapp.com",
  databaseURL: "https://checkitup-14506.firebaseio.com",
  projectId: "checkitup-14506",
  storageBucket: "checkitup-14506.appspot.com",
  messagingSenderId: "30001914733",
  appId: "1:30001914733:web:46825698c4624358037064",
  measurementId: "G-EG8KQMF2BT"
};
const fire = firebase.initializeApp(config);
export default fire;