import React from 'react';
import Container from './components/Container';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {
  return (
    <div className="App">
      <Container />
    </div>
  );
}
const firebaseConfig = {
  apiKey: "AIzaSyDqN7nSXfb4eGVlce6mblL0oHiGumfiGGk",
  authDomain: "fazprueba.firebaseapp.com",
  projectId: "fazprueba",
  storageBucket: "fazprueba.appspot.com",
  messagingSenderId: "746574246220",
  appId: "1:746574246220:web:805e95b38c153e41435fe9",
  measurementId: "G-E8ZZEY3PZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default App;
