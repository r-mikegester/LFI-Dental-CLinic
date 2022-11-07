import { getAuth, updateProfile } from "@firebase/auth"

const auth = getAuth()
export default async (imagePath) => {
  await updateProfile(auth.currentUser, {
    photoURL: imagePath,
  })
  await auth.currentUser.reload()
}
