import { getFirestore, doc, setDoc } from "firebase/firestore"

const db = getFirestore()
export default async (patientUid, slotSeconds, price, amountPaid, status) => {
  const docRef = await doc(
    db,
    `users/${patientUid}/appointments/${slotSeconds}`
  )

  await setDoc(
    docRef,
    {
      price,
      amountPaid,
      status,
    },
    {
      merge: true,
    }
  )
}
