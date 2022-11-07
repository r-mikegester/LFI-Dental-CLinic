import { doc, getDoc, getFirestore } from "@firebase/firestore"

const db = getFirestore()
export default async () => {
  const docRef = doc(db, `reminders/reminders`)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists) return docSnap.data()
  else return { message: "" }
}
