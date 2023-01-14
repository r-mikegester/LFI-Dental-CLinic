import { getAuth } from "@firebase/auth"

const auth = getAuth()

export async function getUserToken() {
  return await auth.currentUser.getIdToken(true /* force refresh */)
}
