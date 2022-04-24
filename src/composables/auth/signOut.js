import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

export default async () => {
  const user = auth.currentUser;
  await signOut(auth);
  console.log(`Logged out: ${user.displayName} (${user.email})`);
};
