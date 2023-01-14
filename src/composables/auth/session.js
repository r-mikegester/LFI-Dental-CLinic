import "../../firebase"
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut as doSignOut,
} from "firebase/auth"
import { useProfilePictureStore } from "../../stores/profilePicture"
import backendBaseURL from "../api/backendBaseURL"
import HttpError from "../helpers/HttpError"
import ParameterError from "../helpers/ParameterError"

const auth = getAuth()

export function isSignedIn() {
  if (auth.currentUser) return true
  return false
}

export async function signIn(email, password) {
  if (!email) throw new ParameterError(email)
  if (!password) throw new ParameterError(password)

  const userCredential = await signInWithEmailAndPassword(auth, email, password)
  const profilePictureStore = useProfilePictureStore()
  profilePictureStore.$reset()
  profilePictureStore.initialize()

  const user = userCredential.user
  console.log(`Logged in as: ${user.displayName} (${user.email})`)
}

export async function signOut() {
  const user = auth.currentUser
  await doSignOut(auth)
  console.log(`Logged out: ${user.displayName} (${user.email})`)
}

export async function signUpWithEmailAndPassword(email, password, fullName) {
  if (!email) throw new ParameterError("email")
  if (!password) throw new ParameterError("password")
  if (!fullName) throw new ParameterError("fullName")

  const link = `${backendBaseURL}/auth/register`
  const response = await fetch(link, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      fullName,
    }),
  })
  const data = await response.json()

  if (!response.ok) throw new HttpError(response.status, data.message)
}
