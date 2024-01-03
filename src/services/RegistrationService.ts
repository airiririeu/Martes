import { UserCredential, createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"

export const register = (email: string, password: string) : Promise<string | UserCredential> => {
    return createUserWithEmailAndPassword(auth, email, password)
}