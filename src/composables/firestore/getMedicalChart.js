import { doc, getDoc, getFirestore } from "firebase/firestore"
import DatabaseError from "../helpers/DatabaseError"

const db = getFirestore()

export default async (patientUid) => {
  const docRef = doc(db, `users/${patientUid}/patientRecords/medicalChart`)

  const docSnap = await getDoc(docRef)
  if (!docSnap.exists)
    throw new DatabaseError("getting medical chart", "No such document")

  return {
    ...docSnap.data(),
  }
}
