export const formatTime = (timestamp: string) => {
  const date = new Date(timestamp);
  const now = new Date();
  const timeDifference = Math.abs(now.getTime() - date.getTime());

  const minutesDifference = Math.floor(timeDifference / (1000 * 60));
  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const yearsDifference = Math.floor(daysDifference / 365);

  if (minutesDifference < 60) {
    return `${minutesDifference}m`;
  } else if (hoursDifference < 24) {
    return `${hoursDifference}h`;
  } else if (daysDifference < 30) {
    return `${daysDifference}d`;
  } else if (yearsDifference >= 1) {
    return `${yearsDifference}y`;
  } else {
    const options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };
    return date.toLocaleDateString("ka-GE", options);
  }
};
