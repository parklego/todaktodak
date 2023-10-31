import Swal, { SweetAlertOptions } from "sweetalert2";

const Alert = (icon: string, title: string, text: string) => {
  const options = {
    icon,
    title,
    text,
  } as SweetAlertOptions;

  return Swal.fire(options);
};

export default Alert;
