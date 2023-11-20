import { Field, ErrorMessage } from "formik";

import Style from "./RadioButtonField.module.css";

const RadioButtonField = ({
  radioInputName,
  labelName,
  labelId,
  radioValue,
}) => {
  return (
    <div className=" w-[100px] h-full py-3 px-2 flex">
      <Field
        type="radio"
        name={radioInputName}
        id={labelId}
        value={radioValue}
        className={`${Style.RadioButtonField} w-[20px] rounded-full h-[20px] `}
      />
      <label htmlFor={labelId}>
        <p className="text-[18px] mr-1 text-black mb-10">{labelName}</p>
      </label>
    </div>
  );
};

export { RadioButtonField };
