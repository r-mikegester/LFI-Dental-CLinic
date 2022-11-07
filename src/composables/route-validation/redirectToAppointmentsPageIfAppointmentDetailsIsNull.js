import { useAppointmentDetailsStore } from "../../stores/appointmentDetails"

export default async () => {
  const appointmentDetails = useAppointmentDetailsStore()
  if (!appointmentDetails.isInitialized)
    return {
      name: "Appointments Page Choose Timeslot",
    }
}
