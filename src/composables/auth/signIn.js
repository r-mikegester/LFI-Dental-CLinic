import ParameterError from "../helpers/ParameterError"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useProfilePictureStore } from "../../stores/profilePicture"

const auth = getAuth()

export default async (email, password) => {
  if (!email) throw new ParameterError(email)
  if (!password) throw new ParameterError(password)

  const userCredential = await signInWithEmailAndPassword(auth, email, password)
  const profilePictureStore = useProfilePictureStore()
  profilePictureStore.$reset()
  profilePictureStore.initialize()

  const user = userCredential.user
  console.log(`Logged in as: ${user.displayName} (${user.email})`)
}
