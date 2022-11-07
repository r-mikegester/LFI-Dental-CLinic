import { getFirestore, doc, getDoc } from "firebase/firestore"
import DatabaseError from "../helpers/DatabaseError"

const db = getFirestore()
export default async (patientUid, slotSeconds) => {
  const docRef = await doc(
    db,
    `users/${patientUid}/appointments/${slotSeconds}`
  )

  const docSnap = await getDoc(docRef)
  if (!docSnap.exists)
    throw new DatabaseError("getting appointment", "No such document")

  return {
    uid: docSnap.id,
    ...docSnap.data(),
  }
}
