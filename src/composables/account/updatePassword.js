import {
  getAuth,
  signInWithEmailAndPassword,
  updatePassword,
} from "@firebase/auth";

const auth = getAuth();
export default async (newPassword, oldPassword) => {
  const email = auth.currentUser.email;
  await signInWithEmailAndPassword(auth, email, oldPassword);
  await updatePassword(auth.currentUser, newPassword);
  await auth.currentUser.reload();
};
