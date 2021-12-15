import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActionCreators from "../auth/authActions";
import Messages from "../common/msg/messages";
import If from "../common/operator/if";

const LoginForm = (props) => {
  const [loginMode, SetloginMode] = useState(true);

  const dispatch = useDispatch();

  const { login, signup } = bindActionCreators(authActionCreators, dispatch);

  const onSubmit = (values) => {
    loginMode ? login(values) : signup(values);
  };

  return (
    <React.Fragment>
      <section className="content">
        <div className="container">
          <div className="login-box">
            <div className="login-logo">
              <a href="../../index2.html">
                <b>LOGIN</b>
              </a>
            </div>
            <div className="card">
              <div className="card-body login-card-body">
                <p className="login-box-msg">
                  Fill the form to get in!!!
                </p>
                <Form onSubmit={onSubmit}>
                  {({ handleSubmit, form, dirtyFields }) => (
                    <form
                      role="form"
                      onSubmit={(event) => {
                        handleSubmit(event);
                      }}
                    >
                      <If show={!loginMode}>
                        <div className="input-group mb-3">
                          <Field
                            name="name"
                            component="input"
                            type="text"
                            placeholder="Name"
                            className="form-control"
                            autoComplete="off"
                            required
                          />
                          <div className="input-group-append">
                            <div className="input-group-text">
                              <span className="fas fa-envelope"></span>
                            </div>
                          </div>
                        </div>
                      </If>
                      <div className="input-group mb-3">
                        <Field
                          name="email"
                          component="input"
                          type="email"
                          placeholder="E-mail"
                          className="form-control"
                          autoComplete="off"
                          required
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-envelope"></span>
                          </div>
                        </div>
                      </div>
                      <div className="input-group mb-3">
                        <Field
                          name="password"
                          component="input"
                          type="password"
                          placeholder="Password"
                          className="form-control"
                          autoComplete="off"
                          required
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-lock"></span>
                          </div>
                        </div>
                      </div>
                      <If show={!loginMode}>
                        <div className="input-group mb-3">
                          <Field
                            name="confirm_password"
                            component="input"
                            type="password"
                            placeholder="Confirm Password"
                            className="form-control"
                            autoComplete="off"
                            required
                          />
                          <div className="input-group-append">
                            <div className="input-group-text">
                              <span className="fas fa-lock"></span>
                            </div>
                          </div>
                        </div>
                      </If>
                      <div className="row">
                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn btn-primary btn-block"
                          >
                            Log In
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </Form>
                <p className="mt-2 mb-0">
                  <a
                    href="#"
                    className="text-center"
                    onClick={(e) => {
                      e.preventDefault();
                      SetloginMode(!loginMode);
                    }}
                  >
                    {loginMode ? "Sign Up" : "Log In?"}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Messages />
    </React.Fragment>
  );
};

export default LoginForm;
