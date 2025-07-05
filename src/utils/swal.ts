import Swal from "sweetalert2";

export const showSuccessAlert = (message: string = "Successful") => {
  Swal.fire({
    icon: "success",
    title: "Success",
    text: message,
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    position: "top-end",
    toast: true,
  });
};

export const showErrorAlert = (message: string = "Something went wrong") => {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: message,
    confirmButtonColor: "#d33",
  });
};
