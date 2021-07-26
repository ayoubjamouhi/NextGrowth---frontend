export function getDate(date) {
  const mm = date.substr(5,2);
  const dd = date.substr(8,2);
  const yyyy = date.substr(0,4);
  console.log(mm)
  return dd+ '/' + mm + '/' + yyyy;
}