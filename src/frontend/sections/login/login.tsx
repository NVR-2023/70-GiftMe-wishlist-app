"use client";

import { useState, FormEvent } from "react";
import { login } from './actions';
import Link from "next/link";
import PasswordInvisibleIcon from "../../components/icons/password-invisible-icon";
import PasswordVisibleIcon from "../../components/icons/password-visible-icon";
import GoogleIcon from "../../components/icons/google-icon";
import FacebookIcon from "../../components/icons/facebook-icon";
import NavigationMenuDemo from "../navbar-homepage/navbar-homepage";

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [credentialsErrors, setCredentialsErrors] = useState({
    email: "",
    password: "",
  });

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible((current) => !current);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Form data to be sent
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    // Call the login function
    login(formData);
  };

  return (
    <div className="text-purple-700">
      <div>
          < NavigationMenuDemo/>
        </div>
      <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
        <div className="font-bold text-3xl mb-7">Login</div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-semibold mb-0.5">
            Email
          </label>
          <input
            className="rounded bg-orange-100 h-8 ps-2 focus:outline-none focus:border-purple-700 focus:ring-purple-700 focus:ring-[1px]"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          <div
            className={`${credentialsErrors.email ? "visible" : "invisible"
              } h-[.75rem] text-[0.6rem] text-red-500 font-semibold mt-2 mb-4`}>
            {credentialsErrors.email}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-between mb-0.5">
            <label htmlFor="password" className="text-sm font-semibold">
              Password
            </label>
            <span onClick={handleTogglePasswordVisibility}>
              {isPasswordVisible ? (
                <PasswordVisibleIcon scale={0.75} />
              ) : (
                <PasswordInvisibleIcon scale={0.75} />
              )}
            </span>
          </div>
          <input
            className="rounded bg-orange-100 h-8 ps-2 focus:outline-none focus:border-purple-700 focus:ring-purple-700 focus:ring-[1px]"
            id="password"
            name="password"
            type={isPasswordVisible ? "text" : "password"}
            value={password}
            onChange={handleInputChange}
          />
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
                <GoogleIcon scale={0.36} />
              </div>
              <div className="">
                <FacebookIcon scale={0.75} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex pt-8 space-x-4">
          <button
            type="submit"
            className="w-36 h-8 rounded bg-purple-700 text-orange-400 text-sm tracking-wide">
            Login
          </button>
          <br />
          <Link
            href="/signup"
            className="w-24 h-8 flex justify-center items-center rounded border-[1.5px] border-purple-700 text-purple-700 text-sm font-semibold tracking-wide">
            Sign Up
          </Link>
          <br />
          <Link
            // add password recovery page
            href="/"
            className="w-24 h-8 flex justify-center items-center rounded border-[1.5px] border-purple-700 text-purple-700 text-sm font-semibold tracking-wide">
            Forgot password
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;

