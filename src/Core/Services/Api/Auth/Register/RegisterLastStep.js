import { ErrorToastify } from "../../../../Utils/Toastifies/ErrorToastify.Utils";
import instance from "../../../Interceptor/Interceptor";

const RegisterLastStep = async (value) => {
  try {
    const response = await instance.post("/Sign/Register", value);

    return response;
  } catch (error) {
    return ErrorToastify("متاسفانه درخواست شما با مشکل مواجه شده است");
  }
};

export { RegisterLastStep };
