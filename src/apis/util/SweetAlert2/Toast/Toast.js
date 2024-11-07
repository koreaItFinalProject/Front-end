import Swal from 'sweetalert2';

export class Toast {
    constructor(message) {
        this.toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
        });

        this.toast.fire({
            icon: 'success',
            title: message
        });
    }
}