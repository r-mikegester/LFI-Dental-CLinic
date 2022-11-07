import { getAuth } from "@firebase/auth"
import { getStorage, ref, deleteObject } from "firebase/storage"

const storage = getStorage()
const auth = getAuth()

export default async () => {
  const uid = auth.currentUser.uid
  const profilePictureRef = ref(storage, `profilePictures/${uid}`)
  await deleteObject(profilePictureRef)
}
