import React from "react";
import useForm from "../components/Forms/useForm";
import registerValidation from "../utils/formValidation/registerValidation";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
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
import API from "utils/API";
import { useHistory } from "react-router-dom";

const Register = (props) => {
  const history = useHistory()

  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    initialValues,
    registerValidation
  );


  async function submit() {
    try {
      const response = await API.addUser(values);
      history.push("/auth/login");

    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-center register-container" id="Register_Main_Container">
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent d-flex align-items-center justify-content-between">
              <div className="con-img">
                <img src="https://www.interswitchgroup.com/assets/images/home/interswitch_logo.svg" alt="" />
              </div>
              <div className="text-muted text-center mt-2 mb-2">
                <h2 className="text-muted text-center mt-2 mb-2">Sign up</h2>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form" onSubmit={handleSubmit}>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-hat-3" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          id="firstName"
                          placeholder="First Name"
                          name="firstName"
                          type="text"
                          value={values.firstName}
                          onChange={handleChange}
                        />
                      </InputGroup>
                      {errors.firstName && (
                        <div style={{ fontSize: 12, color: "red" }}>
                          {errors.firstName}
                        </div>
                      )}
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-hat-3" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          id="lastName"
                          placeholder="Last Name"
                          name="lastName"
                          type="text"
                          value={values.lastName}
                          onChange={handleChange}
                        />
                      </InputGroup>
                      {errors.lastName && (
                        <div style={{ fontSize: 12, color: "red" }}>
                          {errors.lastName}
                        </div>
                      )}
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-mobile-button" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      id="phone"
                      placeholder="Phone Number"
                      name="phoneNumber"
                      type="text"
                      value={values.phoneNumber}
                      onChange={handleChange}
                    />
                  </InputGroup>
                  {errors.phone && (
                    <div style={{ fontSize: 12, color: "red" }}>
                      {errors.phone}
                    </div>
                  )}
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      id="email"
                      placeholder="Email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                    />
                  </InputGroup>
                  {errors.email && (
                    <div style={{ fontSize: 12, color: "red" }}>
                      {errors.email}
                    </div>
                  )}
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      id="password"
                      name="password"
                      placeholder="Password"
                      type="password"
                      value={values.password}
                      onChange={handleChange}
                    />
                  </InputGroup>
                  {errors.password && (
                    <div style={{ fontSize: 12, color: "red" }}>
                      {errors.password}
                    </div>
                  )}
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      type="password"
                      value={values.confirmPassword}
                      onChange={handleChange}
                    />
                  </InputGroup>
                  {errors.confirmPassword && (
                    <div style={{ fontSize: 12, color: "red" }}>
                      {errors.confirmPassword}
                    </div>
                  )}
                </FormGroup>
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="submit">
                    Create account
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </div>
    </>
  );
};

export default Register;
