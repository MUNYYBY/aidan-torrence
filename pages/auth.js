import { useState, useEffect } from "react";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
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
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
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
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
