import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore();
export default async (patientUid, slotSeconds, price, balance, status) => {
  const docRef = await doc(
    db,
    `users/${patientUid}/appointments/${slotSeconds}`
  );

  await setDoc(
    docRef,
    {
      price,
      balance,
      status,
    },
    {
      merge: true,
    }
  );
};
