import dayjs from "dayjs";

export const formatTimestamp = (unix: number) => dayjs.unix(unix).toISOString();
