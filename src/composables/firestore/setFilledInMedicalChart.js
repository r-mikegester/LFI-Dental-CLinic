import { doc, setDoc, getFirestore } from "@firebase/firestore"
import "../../firebase"
const db = getFirestore()

export default async (patientUid) => {
  const docRef = doc(db, `users/${patientUid}`)
  await setDoc(
    docRef,
    {
      filledInMedicalChart: true,
    },
    {
      merge: true,
    }
  )
}
