import {
  getAuth,
  signInWithEmailAndPassword,
  updatePassword as doUpdatePassword,
  updateEmail as doUpdateEmail,
  updateProfile as doUpdateProfile,
} from "@firebase/auth"
import { getStorage, ref, deleteObject, uploadBytes } from "firebase/storage"
import backendBaseURL from "../api/backendBaseURL"
import { getUserToken } from "./user-token"
import HttpError from "../helpers/HttpError"
import ParameterError from "../helpers/ParameterError"

const storage = getStorage()
const auth = getAuth()

export async function deleteProfilePicture() {
  const uid = auth.currentUser.uid
  const profilePictureRef = ref(storage, `profilePictures/${uid}`)
  await deleteObject(profilePictureRef)
}

export async function updateEmail(password, newEmail) {
  const oldEmail = auth.currentUser.email
  await signInWithEmailAndPassword(auth, oldEmail, password)
  await doUpdateEmail(auth.currentUser, newEmail)
  await auth.currentUser.reload()
}

export async function updateFullName(fullName) {
  if (!fullName) throw new ParameterError("ParameterError")

  const idToken = await getUserToken()
  const link = `${backendBaseURL}/auth/user/name`
  const response = await fetch(link, {
    method: "POST",
    body: JSON.stringify({
      fullName,
    }),
    headers: {
      Authorization: `Bearer ${idToken}`,
      "Content-Type": "application/json",
    },
  })
  const data = await response.json()

  if (!response.ok) throw new HttpError(response.status, data.message)
  else {
    await auth.currentUser.reload()
    return data.payload
  }
}

export async function updatePassword(newPassword, oldPassword) {
  const email = auth.currentUser.email
  await signInWithEmailAndPassword(auth, email, oldPassword)
  await doUpdatePassword(auth.currentUser, newPassword)
  await auth.currentUser.reload()
}

export async function updateProfilePicture(imagePath) {
  await doUpdateProfile(auth.currentUser, {
    photoURL: imagePath,
  })
  await auth.currentUser.reload()
}

export async function uploadProfilePicture(profilePictureFile) {
  const uid = auth.currentUser.uid
  const profilePictureRef = ref(storage, `profilePictures/${uid}`)
  await uploadBytes(profilePictureRef, profilePictureFile)
  return profilePictureRef.fullPath
}
