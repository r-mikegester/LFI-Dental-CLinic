import { getFirestore, doc, setDoc } from "firebase/firestore"

const db = getFirestore()
export default async (patientUid, slotSeconds) => {
  const docRef = await doc(
    db,
    `users/${patientUid}/appointments/${slotSeconds}`
  )

  await setDoc(
    docRef,
    {
      procedureVisible: true,
    },
    {
      merge: true,
    }
  )
}
