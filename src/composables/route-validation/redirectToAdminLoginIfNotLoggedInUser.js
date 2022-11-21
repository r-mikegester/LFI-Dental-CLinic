import "../../firebase"
import { getAuth } from "firebase/auth"

const auth = getAuth()

export default async () => {
  const currentUser = auth.currentUser
  if (!currentUser) {
    return {
      // Use single login for both Admin and Patient.
      name: "Patient Login Page",
    }
  }
}
