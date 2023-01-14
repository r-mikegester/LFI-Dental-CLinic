import "../../firebase"
import { getAuth } from "firebase/auth"

const auth = getAuth()

export async function userIsAdmin() {
  const user = auth.currentUser
  if (!user) return false

  const idTokenResult = await user.getIdTokenResult()
  const accountType = idTokenResult.claims.accountType

  if (accountType === "admin") return true
  return false
}

export async function userIsPatient() {
  const user = auth.currentUser
  if (!user) return false

  const idTokenResult = await user.getIdTokenResult()
  const accountType = idTokenResult.claims.accountType

  if (accountType === "patient") return true
  return false
}
