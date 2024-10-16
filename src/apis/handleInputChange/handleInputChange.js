export const handleInputUserOnChange = (setInputUser) => (e) => {
  setInputUser(inputUser => ({
      ...inputUser,
      [e.target.name] : e.target.value
  }));
}