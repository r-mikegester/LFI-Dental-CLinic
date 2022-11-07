import userIsAdmin from "../auth/userIsAdmin"

export default async () => {
  if (!(await userIsAdmin())) {
    return {
      name: "Admin Login Page",
    }
  }
}
