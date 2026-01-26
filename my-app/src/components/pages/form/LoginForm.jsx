import { useForm } from "react-hook-form";
import CastomButton from "../../ui/buttons/CastomButton";
import "./form.css";
import CastomInput from "../../ui/input/CastomInput";
import { IoEyeSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { HiEyeSlash } from "react-icons/hi2";
import { useState } from "react";

const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "onchange" });
  const onSubmit = (data) => {
    console.log("data", data);
    reset();
  };

  const [passType, setPassType] = useState("password");
  const iconPass = () => {
    if (passType === "password") {
      setPassType("text");
    } else {
      setPassType("password");
    }
  };
  return (
    <div className="wrapper-form">
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <h1 className="title-form">sing up</h1>
        <div className="email-input-row">
          {/* email input */}
          <CastomInput
            name="email"
            className="input-form"
            {...register("emailUser", {
              required: "Email обязателен",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Введите корректный email",
              },
            })}
            placeholder="email"
          />
          <MdEmail size={24} />
          {errors.emailUser && (
            <small className="error-text">{errors.emailUser.message}</small>
          )}
        </div>
        {/* password input */}
        <div className="password-input-row">
          <CastomInput
            className="input-form"
            name="password"
            type={passType}
            {...register("passwordUser", {
              required: "пароль обязателен!",
              minLength: {
                value: 6,
                message: "минимум 6 символов",
              },
              maxLength: {
                value: 10,
                message: "максимум 10 символов!",
              },
              pattern: {
                value: /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*]).+$/,
                message: "должна быть 1 цифра, 1 большая буква и 1 спецсимвол",
              },
            })}
            placeholder="password"
          />
          {passType === "password" ? (
            <HiEyeSlash className="icon-eyes" size={24} onClick={iconPass} />
          ) : (
            <IoEyeSharp className="icon-eyes" size={24} onClick={iconPass} />
          )}
          {errors.passwordUser && (
            <small className="error-text">{errors.passwordUser.message}</small>
          )}
        </div>

        <CastomButton type="submit">send</CastomButton>
      </form>
    </div>
  );
};
export default LoginForm;
