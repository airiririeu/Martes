import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, AuthErrorMessages } from "../firebase";

export const login = (email: string, password: string, callback: (success: Boolean, m: string) => any) => {
    signInWithEmailAndPassword(auth, email, password).then(data => {
        console.log(data);
        callback(true, "Success");
    }).catch(err => {
        console.log(err.code);
        callback(false, AuthErrorMessages(err.code));
    })
} 
