import { getAuth } from "@firebase/auth"

const auth = getAuth()

export default async () => {
  return await auth.currentUser.getIdToken(true /* force refresh */)
}
