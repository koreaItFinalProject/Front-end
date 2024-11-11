import { instance } from "../util/instance";
import { confirmAlert } from "../util/SweetAlert2/ConfirmAlert/ConfirmAlert";

export const sendEmailFindUsernameApi = async (value, email, username) => {
  console.log(value);
  console.log(email);
  console.log(username);
  const Data = {
    value: value,
    username: username
  }
  try {
    const emailResponse = await instance.post(`/mail/find/send/${email}`, Data)
    console.log(emailResponse + "메일전송");
    if (emailResponse.status === 200) {
      return confirmAlert("메일 전송 완료")
    }
    return emailResponse
  } catch (error) {

  }
}