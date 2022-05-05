import { defineStore } from "pinia";
import getClosedSlots from "../composables/api/getClosedSlots";
import getMonthIndex from "../composables/calendar/getMonthIndex";
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

      this.closedSlots = await getClosedSlots(
        year,
        getMonthIndex(monthName) + 1
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
