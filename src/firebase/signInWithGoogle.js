import { auth } from "./firebase.utils"
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';


export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      //hamdle sign in state
      console.log(result)
    }).catch((error) => {
      console.log(error)

    })
}
