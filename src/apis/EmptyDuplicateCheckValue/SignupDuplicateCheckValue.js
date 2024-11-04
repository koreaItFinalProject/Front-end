const SignupDuplicateCheckValue = (newValue) => {
    console.log(newValue);
    if (!(newValue.trim())) {
        alert("공백으로는 변경할 수 없습니다.");
        return true;
    }
    return false;
};

export default SignupDuplicateCheckValue