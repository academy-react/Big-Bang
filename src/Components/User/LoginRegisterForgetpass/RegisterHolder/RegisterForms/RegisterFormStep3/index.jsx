import React, { useState } from "react";

import { Form, Formik } from "formik";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import { BlueInputField } from "../../../../../Common/InputFields/BlueInputField";
import { BlueButton } from "../../../../../Common/Buttons/BlueButton";
import { RegisterStep3Schema } from "../../../../../../Core/Validation/Schemas/auth/Register/RegisterStep3Schema";
import { RegisterLastStep } from "../../../../../../Core/Services/Api/Auth/Register/RegisterLastStep";
import { SuccessToastify } from "../../../../../../Core/Utils/Toastifies/SuccessToastify.Utils";
import { ErrorToastify } from "../../../../../../Core/Utils/Toastifies/ErrorToastify.Utils";

const RegisterFormStep3 = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const register = useSelector((store) => store.register);

  const Navigate = useNavigate();

  const onSubmit = async (value) => {
    const newValue = { ...value, ...register };

    try {
      const result = await RegisterLastStep(newValue);

      if (result.success === true) {
        SuccessToastify(result.message);
        setTimeout(() => {
          Navigate("/User/Login");
        }, 2000);
      } else if (result.success === false) {
        ErrorToastify(result.message);
      }
    } catch (error) {
      return false;
    }
  };

  return (
    <div className="">
      <ToastContainer rtl />
      <h1 className="text-[30px] text-center text-bluePrimary">ثبت نام</h1>

      <Formik
        initialValues={{
          password: "",
          gmail: "",
        }}
        validationSchema={RegisterStep3Schema}
        onSubmit={onSubmit}
      >
        <Form className="mt-6">
          {/* password */}
          <BlueInputField
            name="password"
            type="text"
            placeholder="رمز عبور"
            iconClass="fi fi-rr-lock"
          />

          {/* gmail */}
          <BlueInputField
            name="gmail"
            type="text"
            placeholder="ایمیل"
            iconClass="fi fi-rr-at"
          />

          <BlueButton type="submit" buttonText="ثبت" isDisabled={isDisabled} />
        </Form>
      </Formik>
    </div>
  );
};

export { RegisterFormStep3 };
