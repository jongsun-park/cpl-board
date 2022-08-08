const indexToTime = (index) => {
  // 07:00 <= time <= 21:00
  // 0 <= index <= 14
  if (index < 0 || index > 14) return "";
  if (index < 3) return `0${index + 7}:00`;
  return `${index + 7}:00`;
};

// [{value: 7, label: 07:00}, {value: 8, label: 08:00}, ... {value: 20, label: 20:00}]
const times = Array(14)
  .fill("")
  .map((_, index) => ({
    value: index + 7,
    label: indexToTime(index),
  }));

export default times;
