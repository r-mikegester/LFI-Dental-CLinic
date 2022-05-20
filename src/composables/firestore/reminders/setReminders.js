import { doc, setDoc, getFirestore } from "@firebase/firestore";

const db = getFirestore();
export default async (message) => {
  const docRef = doc(db, `reminders/reminders`);
  await setDoc(
    docRef,
    {
      message,
    },
    {
      merge: true,
    }
  );
};
