import Rebase from 're-base';
import firebase from 'firebase';

// firebase credentials
const app = firebase.initializeApp({
    apiKey: "AIzaSyBr9aWKUnBaPNDmFfdfVcETevq3GCEicF8",
    authDomain: "react-music-history.firebaseapp.com",
    databaseURL: "https://react-music-history.firebaseio.com"
});
export const rebase = Rebase.createClass(app.database());

//add the authProvides your app needs: google, facebook, twitter, github,
export const googleProvider = new firebase.auth.GoogleAuthProvider();
