export const handleInputOnChange = (setInputUser) => (e) => {
  const { name, value } = e.target;
  if (name === 'phoneNumber' && !/^\d*$/.test(value)) {
    return; // 숫자가 아닌 입력은 무시 
  }
  if (name === 'phoneNumber' && value.length > 11) {
    return;
  }
  setInputUser(inputUser => ({
    ...inputUser,
    [name]: value
  }));
  console.log(value);
}