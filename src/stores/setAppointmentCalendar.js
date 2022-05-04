import { Timestamp } from "@firebase/firestore";
import { defineStore } from "pinia";
import getUnavailableSlots from "../composables/api/getUnavailableSlots";
import getFirstDateOfMonth from "../composables/calendar/getFirstDateOfMonth";
import getFirstDateOfNextMonth from "../composables/calendar/getFirstDateOfNextMonth";
import getNumOfDaysInMonth from "../composables/calendar/getNumOfDaysInMonth";
import getOffsetFromFirstDayOfMonth from "../composables/calendar/getOffsetFromFirstDayOfMonth";

export const useSetAppointmentCalendarStore = defineStore({
  id: "setAppointmentCalendar",
  state: () => ({
    month: "",
    year: "",
    dayCount: 0,
    offset: 0,
    unavailableSlots: [],
  }),
  getters: {
    getDayCount: (state) => state.dayCount,
    getOffset: (state) => state.offset,
    getUnavailableSlots: (state) => state.unavailableSlots,
  },
  actions: {
    async loadCurrentMonth() {
      const currDate = new Date();

      // Make sure we are getting the current month
      // from UTC+8 (Asia/Manila).
      const monthName = currDate.toLocaleString("en-US", {
        timeZone: "Asia/Manila",
        month: "long",
      });

      // Make sure we are getting the current year
      // from UTC+8 (Asia/Manila).
      const year = currDate.toLocaleString("en-US", {
        timeZone: "Asia/Manila",
        year: "numeric",
      });

      await this.setMonthAndYear(monthName, year);
    },
    async setMonthAndYear(monthName, year) {
      this.month = monthName;
      this.year = year;
      this.dayCount = getNumOfDaysInMonth(monthName, year);
      this.offset = getOffsetFromFirstDayOfMonth(monthName, year);

      const startTime = Timestamp.fromDate(
        getFirstDateOfMonth(monthName, year)
      );
      const endTime = Timestamp.fromDate(
        getFirstDateOfNextMonth(monthName, year)
      );

      this.unavailableSlots = await getUnavailableSlots(
        startTime.seconds,
        endTime.seconds
      );
    },
  },
});