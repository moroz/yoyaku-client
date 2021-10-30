import dayjs from "dayjs";

export const formatTimestamp = (ts: string) =>
  dayjs(ts).format("DD.MM.YYYY HH:mm");
