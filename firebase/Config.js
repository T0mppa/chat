import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBUV0OYdoLDMtsQnaL-qV-RcGGgEETmTIk",
    authDomain: "chat-a49ca.firebaseapp.com",
    projectId: "chat-a49ca",
    storageBucket: "chat-a49ca.appspot.com",
    messagingSenderId: "845069407473",
    appId: "1:845069407473:web:baea6499baff3243d40550"
  };

initializeApp(firebaseConfig)

const firestore = getFirestore()

const MESSAGES = 'messages'

export {
    firestore,
    collection,
    addDoc,
    serverTimestamp,
    MESSAGES
}