import { doc, getFirestore, setDoc } from "@firebase/firestore"

const db = getFirestore()

export default async (patientUid, dataUrl) => {
  const docRef = doc(db, `users/${patientUid}/patientRecords/patientSignature`)
  await setDoc(docRef, {
    dataUrl,
  })
}
