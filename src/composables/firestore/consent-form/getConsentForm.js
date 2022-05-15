import { doc, getDoc, getFirestore } from "@firebase/firestore";

const db = getFirestore();

export default async (patientUid) => {
  const docRef = doc(db, `users/${patientUid}/patientRecords/consentForm`);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists) return docSnap.data();
  else return {};
};
