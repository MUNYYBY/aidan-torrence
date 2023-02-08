import { useState, useEffect } from "react";
import { SignIn, CreateAccount } from "../Firebase/client-modules";
import { toast } from "react-toastify";

export default function Auth() {
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
  const [error, setError] = useState(null);
  const handleLogin = async (e) => {
    if (loginPayload.email != "" || loginPayload.password != "") {
      const result = await SignIn(loginPayload.email, loginPayload.password);
      console.log(result);
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
    toast.error("Email and password can not be empty", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "dark",
    });
  }, [error]);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-full">
        <div className="card flex-shrink-0 w-2/5 shadow-xl bg-base-100">
          <div className="card-body">
            <div className="w-full flex flex-row justify-center items-center">
              <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
                <button
                  className={`btn ${isLogin ? "btn-active" : ""}`}
                  onClick={() => {
                    setIsLogin(!isLogin);
                  }}
                >
                  Login
                </button>
                <button
                  className={`btn ${!isLogin ? "btn-active" : ""}`}
                  onClick={() => {
                    setIsLogin(!isLogin);
                  }}
                >
                  Register
                </button>
              </div>
            </div>
            {isLogin ? (
              <>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    onChange={(e) => {
                      setLoginPayload({
                        ...loginPayload,
                        email: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    onChange={(e) => {
                      setLoginPayload({
                        ...loginPayload,
                        password: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" onClick={handleLogin}>
                    Login
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                    onChange={(e) => {
                      setRegisterPayload({
                        ...registerPayload,
                        name: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="text"
                    placeholder="phone"
                    className="input input-bordered"
                    onChange={(e) => {
                      setRegisterPayload({
                        ...registerPayload,
                        phone: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    onChange={(e) => {
                      setRegisterPayload({
                        ...registerPayload,
                        email: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                    onChange={(e) => {
                      setRegisterPayload({
                        ...registerPayload,
                        password: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" onClick={handleRegister}>
                    Register
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
