


import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
    
    apiKey: "AIzaSyBICp8oOr2lA9WLN17GGzr5gNxP_klcOSs",
    authDomain: "site-9f159.firebaseapp.com",
    databaseURL: "https://site-9f159.firebaseio.com",
    projectId: "site-9f159",
    storageBucket: "site-9f159.appspot.com",
    messagingSenderId: "318555190290",
    appId: "1:318555190290:web:4711214fea8e59ddc954cb",
    measurementId: "G-4SHZNWV82Z"
  
};
export const CreateUserProfileDocument = async(userAuth, additionalData) =>  {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log('eroare',error.message);
        }
        }
        return userRef;
    };

    




firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;