import { defineStore } from "pinia";

export const useTestStore = defineStore("rmax:testStore", {
  state() {
    return {
      count: 1,
    };
  },
  actions: {
    addCount() {
      this.count++;
    },
    increaseCount() {
      this.count--;
    },
  },
});
