import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyASzCibNUe22LJMjHqJOOF_6r22CF1kSyo",
  authDomain: "netflix-clone-d86c2.firebaseapp.com",
  projectId: "netflix-clone-d86c2",
  storageBucket: "netflix-clone-d86c2.firebaseapp.com",
  messagingSenderId: "750767690799",
  appId: "1:750767690799:web:f686958542c6b6d67762da"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
    toast.success("User created successfully!");
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].replaceAll('-', ' '));
  }
}

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Logged in successfully!");
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].replaceAll('-', ' '));
  }
}

const logout = () => {
  signOut(auth)
    .then(() => toast.success("Logged out successfully!"))
    .catch((error) => {
      console.log(error);
      toast.error(error.message);
    });
}

export { auth, db, login, signup, logout };
