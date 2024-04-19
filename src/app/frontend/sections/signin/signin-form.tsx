"use client";

import { emailErrors, passwordErrors } from "../register/sub-components/credentials-errors";
import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
// import PasswordInvisibleIcon from "@/frontend/components/icons/password-invisible-icon";
// import PasswordVisibleIcon from "@/frontend/components/icons/password-visible-icon";
// import GoogleIcon from "@/frontend/components/icons/google-icon";
// import FacebookIcon from "@/frontend/components/icons/facebook-icon";

interface SigninFormProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleLogin: (email: string, password: string) => void;
}

const SigninForm: React.FC<SigninFormProps> = ({ email, setEmail, password, setPassword, handleLogin }) => {
  
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [credentialsErrors, setCredentialsErrors] = useState({
    email: "",
    password: "",
  });
  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible((current) => !current);
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleLogin(email, password)
    
    let emailFirstError: string = "";
    let passwordFirstError: string = "";

    for (const { regEx, message } of emailErrors) {
      if (!regEx.test(email)) {
        emailFirstError = message;
        break;
      }
    }

    for (const { regEx, message } of passwordErrors) {
      if (!regEx.test(password)) {
        passwordFirstError = message;
        break;
      }
    }

    // Replace alert with API call for sign in
    if (!emailFirstError && !passwordFirstError) {
      alert("Credentials validated");
      setCredentialsErrors({ email: "", password: "" });
    } else {
      setCredentialsErrors({ email: emailFirstError, password: passwordFirstError });
    }
  };

  
  return (
    <div className="text-purple-700">
      <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
        <div className="font-bold text-3xl mb-7">Sign in</div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-semibold mb-0.5">
            Email
          </label>
          <input
            className="rounded bg-orange-100 h-8 ps-2 focus:outline-none focus:border-purple-700 focus:ring-purple-700 focus:ring-[1px]"
            id="email"
            name="email"
            value={email}
            onChange={handleOnChange}>
          </input>
          <div
            className={`${credentialsErrors.email ? "visible" : "invisible"
              } h-[.75rem] text-[0.6rem] text-red-500 font-semibold mt-2 mb-4`}>
            {credentialsErrors.email}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-between mb-0.5">
            <label htmlFor="email" className="text-sm font-semibold">
              Password
            </label>
            {/* <span onClick={handleTogglePasswordVisibility}>
              {isPasswordVisible ? (
                <PasswordVisibleIcon scale={0.75} />
              ) : (
                <PasswordInvisibleIcon scale={0.75} />
              )}
            </span> */}
          </div>
          <input
            className="rounded bg-orange-100 h-8 ps-2 focus:outline-none focus:border-purple-700 focus:ring-purple-700 focus:ring-[1px]"
            id="password"
            name="password"
            type={isPasswordVisible ? "text" : "password"}
            value={password}
            onChange={handleOnChange}></input>
          <div
            className={`${credentialsErrors.password ? "visible" : "invisible"
              } h-[.75rem] text-[0.6rem] text-red-500 font-semibold mt-2 mb-4`}>
            {credentialsErrors.password}
          </div>
        </div>
        <div className="flex items-baseline justify-between">
          <div className="flex items-baseline">
            <div className="text-[0.6rem] font-semibold pe-2">Sign in with</div>
            <div className="flex space-x-2">
              <div className="">
                {/* <GoogleIcon scale={0.36} /> */}
              </div>
              <div className="">
                {/* <FacebookIcon scale={0.75} /> */}
              </div>
            </div>
          </div>
          <div className="text-[0.6rem] font-semibold">Forgot password?</div>
        </div>
        <div className="flex pt-8 space-x-4">
          <Link
            href="/"
            className="w-24 h-8 flex justify-center items-center rounded border-[1.5px] border-purple-700 text-purple-700 text-sm font-semibold tracking-wide">
            Cancel
          </Link>
          <button
            type="submit"
            className="w-36 h-8 rounded bg-purple-700 text-orange-400 text-sm tracking-wide">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}; 


export default SigninForm;
