import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InfoToastify = (infoText) => {
  toast.info(`${infoText}`, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export { InfoToastify };
