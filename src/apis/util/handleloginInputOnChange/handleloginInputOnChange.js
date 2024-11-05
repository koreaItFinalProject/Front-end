export const handleloginInputOnChange = (setInputUser) => (e) => {
  const { name, value } = e.target;
  setInputUser(inputUser => ({
    ...inputUser,
    [name]: value
  }));
  console.log(value);
}