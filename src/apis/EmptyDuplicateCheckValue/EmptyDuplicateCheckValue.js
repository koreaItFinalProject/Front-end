const isEmptyAndIsEqualsCheckFieldValue = (oldValue, newValue) => {
  console.log(oldValue);
  console.log(newValue);
  if (!(newValue.trim())) {
      alert("공백으로는 변경할 수 없습니다.");
      return true;
  }
  if (oldValue === newValue) {
      alert("동일한 정보로는 변경할 수 없습니다.");
      return true;
  }
  return false;
};

export default isEmptyAndIsEqualsCheckFieldValue