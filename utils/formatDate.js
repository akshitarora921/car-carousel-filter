export function formatDate(date) {
  const _date = new Date(date);
  const dateVal =
    _date.getDate() < 10 ? "0" + _date.getDate() : _date.getDate();
  const month =
    _date.getMonth() + 1 < 10
      ? "0" + (_date.getMonth() + 1)
      : _date.getMonth() + 1;
  const year = _date.getFullYear();
  return `${dateVal}:${month}:${year}`;
}
