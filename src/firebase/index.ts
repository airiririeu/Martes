// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { AuthErrorCodes, NextOrObserver, User, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzzSzKjViCvSxHFQW10k1dN8J9PYUnrCI",
  authDomain: "martes-research.firebaseapp.com",
  projectId: "martes-research",
  storageBucket: "martes-research.appspot.com",
  messagingSenderId: "749753778611",
  appId: "1:749753778611:web:8b554c3e16fe4d20a18bc6",
  measurementId: "G-VCCKDBVTVR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// const analytics = getAnalytics(app);

export const AuthErrorMessages = (error : string) : string => {
    
    switch(error) {

        case AuthErrorCodes.EMAIL_EXISTS:
            return "Email is already used"
        case AuthErrorCodes.WEAK_PASSWORD:
            return "Password is weak."
        case AuthErrorCodes.INVALID_EMAIL:
            return "E-mail is invalid."
        case AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER:
            return "Too Many attempts, Please try again later"
        default:
            return "An error occured."
    }
}


export const authListner = (observer: NextOrObserver<User| null>) => {
    auth.onAuthStateChanged(observer);
}

export const getCurrentUser = (): Promise<User | null> => {
    return new Promise( (resolve, reject) => {
        const sub = auth.onAuthStateChanged(user => {
            sub();
            resolve(user);
        }, reject)
    })
}