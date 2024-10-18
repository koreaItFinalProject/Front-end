export const showFieldErrorMessage = (fieldErrors) => {
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