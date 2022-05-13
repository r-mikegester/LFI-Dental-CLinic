import {
  collection,
  getFirestore,
  onSnapshot,
  query,
} from "@firebase/firestore";
import { onUnmounted, ref } from "vue";

const db = getFirestore();
export default (patientUid) => {
  const userAppointments = ref([]);

  const q = query(collection(db, `users/${patientUid}/appointments`));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    userAppointments.value = [];
    querySnapshot.forEach((doc) => {
      userAppointments.value.push({
        uid: doc.id,
        ...doc.data(),
      });
    });
  });

  onUnmounted(() => {
    unsubscribe();
  });

  return userAppointments;
};
