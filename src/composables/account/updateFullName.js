import { getAuth, updateProfile } from "@firebase/auth";
import { doc, getFirestore, setDoc } from "@firebase/firestore";
import userIsPatient from "../auth/userIsPatient";
import ParameterError from "../helpers/ParameterError";

const auth = getAuth();
const db = getFirestore();
export default async (fullName) => {
  if (!fullName) throw new ParameterError("ParameterError");

  await updateProfile(auth.currentUser, {
    displayName: fullName,
  });
  if (await userIsPatient()) {
    const uid = auth.currentUser.uid;
    const docRef = doc(db, `users/${uid}/patientRecords/medicalChart`);
    await setDoc(
      docRef,
      {
        personalInformation: {
          fullName,
        },
      },
      {
        merge: true,
      }
    );
  }
  await auth.currentUser.reload();
};
