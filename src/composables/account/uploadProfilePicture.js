import { getAuth } from "@firebase/auth"
import { getStorage, ref, uploadBytes } from "firebase/storage"

const storage = getStorage()
const auth = getAuth()

export default async (profilePictureFile) => {
  const uid = auth.currentUser.uid
  const profilePictureRef = ref(storage, `profilePictures/${uid}`)
  await uploadBytes(profilePictureRef, profilePictureFile)
  return profilePictureRef.fullPath
}
