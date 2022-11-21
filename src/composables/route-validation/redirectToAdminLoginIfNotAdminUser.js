import userIsAdmin from "../auth/userIsAdmin"

export default async () => {
  if (!(await userIsAdmin())) {
    return {
      // Use single login for both Admin and Patient.
      name: "Patient Login Page",
    }
  }
}
