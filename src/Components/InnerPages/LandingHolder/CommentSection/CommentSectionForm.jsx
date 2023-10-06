import { Formik, Form } from "formik";
import axios, { HttpStatusCode } from "axios";

//React-Toastify Imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { SilverInputField } from "../../../Common/InputFields/SilverInputField/index";
import { TextAreaField } from "../../../Common/InputFields/TextAreaField/index";
import { SilverButton } from "../../../Common/Buttons/SilverButton";
import { LandingCommentSectionSchema } from "../../../../Core/Validation/Schemas/Landing/CommentSection/LandingCommentSectionSchema";

//Toastiy Functions
import { SuccessToastify } from "../../../../Core/Utils/Toastifies/SuccessToastify.Utils";
import { ErrorToastify } from "../../../../Core/Utils/Toastifies/ErrorToastify.Utils";

import Style from "./CommentSection.module.css";

const CommentSectionForm = () => {
  const onSubmit = async (value) => {
    try {
      await axios
        .post(
          "https://64ff2f97f8b9eeca9e29c64c.mockapi.io/LandingCommentSection",
          value
        )
        .then(() => SuccessToastify("پیام شما با موفقیت ثبت شده است"));
    } catch (error) {
      ErrorToastify(error, "متاسفانه پیام شما ثبت نشده است");
    }
  };

  return (
    <>
      <ToastContainer />
      <div
        className={`${Style.CommentSectionBackground} border-2 border-solid border-transparent mt-7 w-full h-[702px]  bg-primary`}
      >
        <Formik
          initialValues={{ email: "", text: "" }}
          onSubmit={onSubmit}
          validationSchema={LandingCommentSectionSchema}
        >
          <Form>
            <div className="my-[155px]">
              <SilverInputField name="email" type="email" placeholder="ایمیل" />
              <TextAreaField name="text" placeholder="متن مورد نظر" />

              <SilverButton type="submit" />
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export { CommentSectionForm };
