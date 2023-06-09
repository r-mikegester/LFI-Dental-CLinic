import { getAuth, onAuthStateChanged } from "@firebase/auth"
import { initializeApp, getApps } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyD79pJh6eYIiLORjlrK3YYVD_Ty-ZcdcOk",
  authDomain: "lfidentalclinic.firebaseapp.com",
  projectId: "lfidentalclinic",
  storageBucket: "lfidentalclinic.appspot.com",
  messagingSenderId: "890904233316",
  appId: "1:890904233316:web:91f10ceb437625eb296671",
  measurementId: "G-G3RBJ4LHMB",
}

// Initialize Firebase
if (getApps().length === 0) initializeApp(firebaseConfig)

export const authStateInitialized = new Promise((resolve) => {
  const auth = getAuth()
  const unsubscribe = onAuthStateChanged(auth, () => {
    unsubscribe()
    resolve()
  })
})
