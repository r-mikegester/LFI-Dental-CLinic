import { doc, setDoc, getFirestore } from "@firebase/firestore";

const db = getFirestore();

export default async (patientUid, consentForm) => {
  const docRef = doc(db, `users/${patientUid}/patientRecords/consentForm`);
  await setDoc(docRef, consentForm, {
    merge: true,
  });
};
