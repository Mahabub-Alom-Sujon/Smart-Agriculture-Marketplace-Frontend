import Swal, {
    type SweetAlertResult,
} from "sweetalert2";

export async function DeleteAlert(): Promise<
    SweetAlertResult
> {
    return await Swal.fire({
        allowOutsideClick: false,
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        width: "380px",
        showCancelButton: true,
        confirmButtonColor: "lab(58 -58.28 41.1)",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel",
    });
}