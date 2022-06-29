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

  const uid = auth.currentUser.uid;
  const docRefPatientEntry = doc(db, `users/${uid}`);

  await setDoc(
    docRefPatientEntry,
    {
      displayName: fullName,
    },
    {
      merge: true,
    }
  );

  if (await userIsPatient()) {
    const docRefMedicalChart = doc(
      db,
      `users/${uid}/patientRecords/medicalChart`
    );

    await setDoc(
      docRefMedicalChart,
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
