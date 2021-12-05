import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function onSuccess() {
  toast.success("🦄 Wow so easy!", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
export function onError() {
  toast.error(" Error!", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
