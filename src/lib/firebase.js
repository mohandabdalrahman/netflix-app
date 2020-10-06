import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// import { seedDatabase } from '../seed'



const config = {
  apiKey: "AIzaSyAZSZ5qKRvLN-9-KTuDnb351F-izdcCJhw",
  authDomain: "netflix-e8f6c.firebaseapp.com",
  databaseURL: "https://netflix-e8f6c.firebaseio.com",
  projectId: "netflix-e8f6c",
  storageBucket: "netflix-e8f6c.appspot.com",
  messagingSenderId: "698947575542",
  appId: "1:698947575542:web:f4b9cbb11907b1865596d7"
}

const firebase = Firebase.initializeApp(config)

// seedDatabase(firebase)
export { firebase }