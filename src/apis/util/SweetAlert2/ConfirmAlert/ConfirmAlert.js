import Swal from "sweetalert2";
import './style.css';

export const confirmAlert = (title) => Swal.fire({
    title: title,

    showCancelButton: false, // cancel버튼 보이기. 기본은 원래 없음
    confirmButtonColor: '#f2780c', // confrim 버튼 색깔 지정
    confirmButtonText: '확인', // confirm 버튼 텍스트 지정
    customClass: {
        popup: 'popup-class',
        title: 'title-class',
        confirmButton: 'button-class',
    },
    showClass: {
        popup: '' // 기본 애니메이션을 비활성화
    },
});