export function convertToMinutes(variable) {
  const arr = String(variable).split('.');
  const degrees = `${arr[0]}\u00B0`;
  const minutes = `${String(arr[1] * 60).slice(0, 2)}\u00B4`;
  return `${degrees} ${minutes}`;
}
