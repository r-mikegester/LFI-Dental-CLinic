import userIsPatient from "../auth/userIsPatient"

export default async () => {
  if (!(await userIsPatient())) {
    return {
      name: "Patient Login Page",
    }
  }
}
