import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDAakMZdYhtxL9MmpkhgZmyeMfy2GvLmTU",
  authDomain: "productosreact-96faf.firebaseapp.com",
  projectId: "productosreact-96faf",
  storageBucket: "productosreact-96faf.appspot.com",
  messagingSenderId: "448989254496",
  appId: "1:448989254496:web:6ffc5dc88e298948d7c405"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
