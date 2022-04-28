import { Timestamp } from "@firebase/firestore";
import { defineStore } from "pinia";
import getClosedSlots from "../composables/api/getClosedSlots";
import getFirstDateOfMonth from "../composables/calendar/getFirstDateOfMonth";
import getFirstDateOfNextMonth from "../composables/calendar/getFirstDateOfNextMonth";
import getNumOfDaysInMonth from "../composables/calendar/getNumOfDaysInMonth";
import getOffsetFromFirstDayOfMonth from "../composables/calendar/getOffsetFromFirstDayOfMonth";

export const useScheduleCalendarStore = defineStore({
  id: "scheduleCalendar",
  state: () => ({
    month: "",
    year: "",
    dayCount: 0,
    offset: 0,
    closedSlots: [],
  }),
  getters: {
    getDayCount: (state) => state.dayCount,
    getOffset: (state) => state.offset,
    getClosedSlots: (state) => state.closedSlots,
  },
  actions: {
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

      this.closedSlots = await getClosedSlots(
        startTime.seconds,
        endTime.seconds
      );
    },
    pushClosedSlot(timeSlot) {
      if (this.month === "" && this.year === "") {
        return;
      }

      this.closedSlots.push(timeSlot);
      console.log("added:", timeSlot);
    },
    removeClosedSlot(timeSlot) {
      if (this.month === "" && this.year === "") {
        return;
      }

      this.closedSlots = this.closedSlots.filter((slot) => {
        if (slot !== timeSlot) return true;
        return false;
      });
      console.log("removed:", timeSlot);
    },
  },
});
