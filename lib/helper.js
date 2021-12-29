import { addDays, isWednesday } from "date-fns";

export const calculateDisableDays = () => {
  const startDate = new Date();
  const endDate = addDays(new Date(), 60);
  const disableDays = [];
  let currentDate = startDate;
  while (currentDate <= endDate) {
    if (!isWednesday(currentDate)) {
      disableDays.push(currentDate);
    }
    currentDate = addDays(currentDate, 1);
  }
  return disableDays;
};
