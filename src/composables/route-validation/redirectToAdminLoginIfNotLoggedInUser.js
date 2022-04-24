import "../../firebase";
import { getAuth } from "firebase/auth";

const auth = getAuth();

export default async () => {
  const currentUser = auth.currentUser;
  if (!currentUser) {
    return {
      name: "Admin Login Page",
    };
  }
};
