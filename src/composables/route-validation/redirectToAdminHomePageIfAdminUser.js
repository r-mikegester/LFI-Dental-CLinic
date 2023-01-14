import { userIsAdmin } from "../auth/user-role"

export default async () => {
  if (await userIsAdmin()) {
    return {
      name: "Admin Home Page",
    }
  }
}
