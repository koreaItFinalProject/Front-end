import Swal from "sweetalert2";
import './style.css';

export const confirmCancelAlert = (title) => Swal.fire({
    title: title,

    showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
    confirmButtonColor: '#f2780c', // confrim 버튼 색깔 지정
    cancelButtonColor: '#aaaaaa', // cancel 버튼 색깔 지정
    confirmButtonText: '확인', // confirm 버튼 텍스트 지정
    cancelButtonText: '취소', // cancel 버튼 텍스트 지정

    reverseButtons: true, // 버튼 순서 거꾸로
    customClass: {
        popup: 'popup-class',
        title: 'title-class',
        confirmButton: 'confirm-button-class',
        cancelButton: 'cancel-button-class'
    },

}).then(result => {
    // 만약 Promise리턴을 받으면,
    if (result.isConfirmed) {
        return true;
    } else if (result.isDismissed) {
        return false;
    }
});