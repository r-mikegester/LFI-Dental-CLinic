import "../../firebase";
import { getAuth } from "@firebase/auth";
const auth = getAuth();

export default () => {
  if (auth.currentUser) return true;
  return false;
};
