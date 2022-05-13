import {
  getAuth,
  signInWithEmailAndPassword,
  updateEmail,
} from "@firebase/auth";

const auth = getAuth();
export default async (password, newEmail) => {
  const oldEmail = auth.currentUser.email;
  await signInWithEmailAndPassword(auth, oldEmail, password);
  await updateEmail(auth.currentUser, newEmail);
  await auth.currentUser.reload();
};
