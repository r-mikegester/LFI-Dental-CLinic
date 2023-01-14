import { userIsPatient } from "../auth/user-role"

export default async () => {
  if (await userIsPatient()) {
    return {
      name: "Patient Appointment History Page",
    }
  }
}
