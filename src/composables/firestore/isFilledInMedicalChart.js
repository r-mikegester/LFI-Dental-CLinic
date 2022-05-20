import { doc, getDoc, getFirestore } from "@firebase/firestore";
import "../../firebase";
const db = getFirestore();

export default async (patientUid) => {
  const docRef = doc(db, `users/${patientUid}`);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists) {
    const data = docSnap.data();
    if (data.filledInMedicalChart) return true;
    else return false;
  } else return false;
};
