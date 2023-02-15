import { useState, useEffect } from "react";
import { SignIn, CreateAccount } from "../Firebase/client-modules";
import { toast } from "react-toastify";
import TwitterLogin from "react-twitter-login";

export default function Auth0() {
  const [isLogin, setIsLogin] = useState(true);
  const [loginPayload, setLoginPayload] = useState({
    email: "",
    password: "",
  });
  const [registerPayload, setRegisterPayload] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  });
  const [error, setError] = useState({ status: null, message: null });
  const handleLogin = async (e) => {
    if (loginPayload.email != "" || loginPayload.password != "") {
      const result = await SignIn(loginPayload.email, loginPayload.password);
    } else {
      setError({
        status: "email/password",
        message: "Email or password can not be empty!",
      });
    }
  };
  const handleRegister = async (e) => {
    if (registerPayload.email != "" || registerPayload.password != "") {
      const result = await CreateAccount(
        registerPayload.email,
        registerPayload.password,
        registerPayload.name,
        registerPayload.phone
      );
      console.log(result);
    } else {
      setError({
        status: "email/password",
        message: "Email or password can not be empty!",
      });
    }
  };
  useEffect(() => {
    if (error.email || error.message) {
      toast.error("Email and password can not be empty", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "dark",
      });
    }
  }, [error]);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-full">
        <div className="card flex-shrink-0 w-2/5 shadow-xl bg-base-100">
          <div className="card-body flex flex-col justify-center items-center">
            <h1 className="text-3xl font-semibold py-3">
              login to your twitter account
            </h1>
            <TwitterLogin
            //   authCallback={authHandler}
            //   consumerKey={CONSUMER_KEY}
            //   consumerSecret={CONSUMER_SECRET}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
