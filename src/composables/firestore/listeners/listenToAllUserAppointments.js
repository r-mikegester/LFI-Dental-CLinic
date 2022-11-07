import {
  collectionGroup,
  getFirestore,
  onSnapshot,
  query,
  where,
} from "@firebase/firestore"
import { onUnmounted, ref } from "vue"

const db = getFirestore()
export default () => {
  const userAppointments = ref(null)

  const q = query(
    collectionGroup(db, "appointments"),
    where("procedureVisible", "==", "requesting")
  )
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    userAppointments.value = []
    querySnapshot.forEach((doc) => {
      userAppointments.value.push({
        uid: doc.id,
        ...doc.data(),
      })
      console.log(userAppointments.value)
    })
  })

  onUnmounted(() => {
    unsubscribe()
  })

  return userAppointments
}
