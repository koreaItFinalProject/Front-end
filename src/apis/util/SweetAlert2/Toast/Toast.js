import Swal from "sweetalert2";
import './style.css';

const Toast = Swal.mixin({
    toast: true,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: false,
    didOpen: (toast) => {
        toast.addEventListener('click', () => {
            Swal.close();
        });
    },
    customClass: {
        htmlContainer: 'custom-html',
        popup: 'custom-toast',
        container: 'custom-container',
        title: 'custom-title'
    },
    showClass: {
        popup: '' // 기본 애니메이션을 비활성화
    },
    hideClass: {
        popup: 'custom-hideClass' // 기본 애니메이션을 비활성화
    },
});

export const showToast = (title, content) => {
    Toast.fire({
        title: title,
        html: content
    });
};