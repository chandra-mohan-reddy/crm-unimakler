import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classnames from "classnames";

import AuthHeader from "components/Headers/AuthHeader.js";

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
  Container,
  Row,
  Col,
  CardImg,
} from "reactstrap";

import loginServices from "utils/api/services/login.services";

function Login() {
  const navigate = useNavigate();

  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);
  const [email, setEmail] = useState('srinu123');
  const [password, setPassword] = useState('Pass@123');
  const [error, setError] = useState(null);

  const redirectToAdminDashboard = async () => {
    console.log("Navigating to dashboard");
    window.location.reload(true);
  };

  const handleLogin = async () => {
    console.log("API Call");
    try {
      // Perform API call for authentication
      const response = await loginServices.checklogin({
        username: email,
        password: password,
      });

      // Assuming the API returns a token
      console.log("Response", response.data.data.token);
      const apiToken = response.data.data.token;

      // Store the token in localStorage
      localStorage.setItem('Unimakler-Authorization', apiToken);

      redirectToAdminDashboard();
    } catch (error) {
      // Handle login error
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <>
      <AuthHeader />
      <Container className="pb-5" style={{ marginTop: "-15rem" }}>
        <Row className="justify-content-center">
          <Col lg="5" md="7">
            <Card className="bg-secondary border-0 mb-0">
              <CardImg
                alt="..."
                src={require("../assets/img/brand/uni-logo-min.png")}
                top
                style={{ border: "1px solid #ddd" }}
              />
              <CardBody className="">
                <Form role="form">
                  <FormGroup
                    className={classnames("mb-3", {
                      focused: focusedEmail,
                    })}
                  >
                    <InputGroup className="input-group-merge input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Username"
                        type="text"
                        onFocus={() => setFocusedEmail(true)}
                        onBlur={() => setFocusedEmail(true)}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: focusedPassword,
                    })}
                  >
                    <InputGroup className="input-group-merge input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="password"
                        onFocus={() => setFocusedPassword(true)}
                        onBlur={() => setFocusedPassword(true)}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>
                  {error && <div className="text-center text-danger mb-3">{error}</div>}
                  <div className="text-center">
                    <Button className="my-4" color="info" type="button" onClick={handleLogin}>
                      Sign in
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
  // }

}

export default Login;
