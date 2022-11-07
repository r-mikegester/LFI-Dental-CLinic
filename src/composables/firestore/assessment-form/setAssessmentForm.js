import { doc, setDoc, getFirestore } from "@firebase/firestore"

const db = getFirestore()

export default async (patientUid, assessmentForm) => {
  const docRef = doc(db, `users/${patientUid}/patientRecords/assessmentForm`)
  await setDoc(docRef, assessmentForm, {
    merge: true,
  })
}
