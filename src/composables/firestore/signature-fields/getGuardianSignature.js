import { doc, getDoc, getFirestore } from "@firebase/firestore";

const db = getFirestore();
export default async (patientUid) => {
  const docRef = doc(
    db,
    `users/${patientUid}/patientRecords/guardianSignature`
  );
  const docSnap = await getDoc(docRef);

  if (docSnap.exists) {
    const data = docSnap.data();
    if (data && data.dataUrl) return data.dataUrl;
    else return "";
  }
  return "";
};
