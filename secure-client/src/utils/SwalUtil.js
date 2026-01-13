
import Swal from 'sweetalert2';

// Swal.mixin을 사용하여 공통 테마 정의
const CustomSwal = Swal.mixin({
    confirmButtonColor: '#007bff',
    cancelButtonColor: '#d33',
    confirmButtonText: '확인',
    cancelButtonText: '취소',
});

export const successAlert = (text) => {
    CustomSwal.fire({
        icon: 'success',
        title: '성공',
        text: text
    });
}

export const errorAlert = (text) => {
    CustomSwal.fire({
        icon: 'error',
        title: '오류',
        text: text,
        confirmButtonColor: '#d33'
    });
}

export const basicAlert = (text) => {
    CustomSwal.fire({
        text: text
    })
}
