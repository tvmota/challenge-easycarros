import Swal from 'sweetalert2/dist/sweetalert2';

const alertError = (msg, titleTxt) => Swal.fire({
  title: titleTxt,
  text: msg,
  type: 'error',
});

export default {
  alertError,
};
