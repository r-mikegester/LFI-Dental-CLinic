import "../../firebase";
import { getAuth } from "firebase/auth";

const auth = getAuth();

export default async () => {
  const user = auth.currentUser;
  if (!user) return false;

  const idTokenResult = await user.getIdTokenResult();
  const accountType = idTokenResult.claims.accountType;

  if (accountType === "patient") return true;
  return false;
};
