import React from "react";
import useForm from "../components/Forms/useForm";
import validate from "../utils/formValidation/loginValidation";
import API from "../utils/API";
import { Link, useHistory, useLocation } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

const Login = (props) => {
  const history = useHistory();
  const initialLoginValues = {
    email: "",
    password: "",
  };

  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    initialLoginValues,
    validate
  );

  async function submit() {
    const response = await API.login(values);
    const { accessToken } = await response.json();

    if (response.ok) {
      localStorage.setItem("auth-token", accessToken);
      const { role, user_id } = API.getPayload();
      props.setAuth(true);
      props.setAuthPayload({ role, user_id })
      props.setAuthLevel(role)

      if (role === "ADMIN") {
        history.push("/admin");
      } else if (role === "USER") {
        history.push("/index");
      }

    } else {
      console.log('Invalid login')
    }
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-center login-container" id="Login_Main_Container">
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">

            <div className="con-img pt-4">
              <img src="https://www.interswitchgroup.com/assets/images/home/interswitch_logo.svg" alt="" />
            </div>
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form" onSubmit={handleSubmit}>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      name="email"
                      type="email"
                      autoComplete="new-email"
                      value={values.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <div style={{ fontSize: 12, color: "red" }}>
                        {errors.title}
                      </div>
                    )}
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      value={values.password}
                      onChange={handleChange}
                    />
                    {errors.password && (
                      <div style={{ fontSize: 12, color: "red" }}>
                        {errors.title}
                      </div>
                    )}
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="submit">
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <small>Forgot password?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <Link to="/auth/register">
                <small>Create new account</small>
              </Link>
            </Col>
          </Row>
        </Col>
      </div>
    </>
  );
};

export default Login;
