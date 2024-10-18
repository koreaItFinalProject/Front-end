export const showFieldErrorMessage = (fieldErrors) => {
    if (!Array.isArray(fieldErrors)) {
        console.error("fieldErrors is not an array:", fieldErrors);
        return {
            username: <></>,
            password: <></>,
        };
    }
    let EmptyfieldErrors = {
      username : <></>,
      password : <></>,
      checkPassword : <></>,
      name : <></>,
      email : <></>,
      phoneNumber: <></>,
      oauth2Name:<></>
      }
      console.log(fieldErrors);
  
  for(let fieldError of fieldErrors){
      EmptyfieldErrors = {
          ...EmptyfieldErrors,
          [fieldError.field] : <p>{fieldError.defaultMessage}</p>
      }
      console.log(`${fieldError.field}: ${fieldError.defaultMessage}`);
  }
  return EmptyfieldErrors;
}