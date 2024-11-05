export const handleInputOnChange = (setInputUser, setComplete) => (e) => {
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
  if (['nickname', 'username', 'email', 'ownerImage'].includes(name)) {
    setComplete(modify => ({
      ...modify,
      [name]: false
    }))
  }

  console.log(value);
}