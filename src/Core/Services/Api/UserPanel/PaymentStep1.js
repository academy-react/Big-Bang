import instance from "../../Interceptor/Interceptor";
import OnSetFormData from "./OnSetFormData";

const PaymentStep1 = async (body) => {
  console.log(body);
  const data = OnSetFormData(body);
  try {
    const result = await instance.post(
      `/CoursePayment/StudentAddPeyment`,
      data
    );
    return result;
  } catch (err) {
    console.log(err);
    return 0;
  }
};
export { PaymentStep1 };
