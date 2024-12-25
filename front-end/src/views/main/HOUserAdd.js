import React, { useState } from "react";
import RedAsterisk from './helpers/RedAsterisk';
import { useSearchParams } from 'react-router-dom';
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  Button,
  CardTitle
} from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";
import Select2 from "react-select2-wrapper";

const CustomSelect = ({ value, onChange, className, options, placeholder, hasError }) => {
  const selectStyle = {
    borderColor: hasError ? 'red' : '', // Set border color to red if there's an error
  };
  return (
    <div className={`select2-wrapper ${hasError ? 'has-error' : ''}`}>
      <Select2
        value={value}
        onChange={onChange}
        className={className}
        options={{
          placeholder: placeholder,
        }}
        data={options}
        style={selectStyle}
      />
      {hasError && (
        <div className="invalid-feedback">
          This field is required.
        </div>
      )}
    </div>
  );
};

function UserAdd(props) {

  // Get the query parameters
  let [searchParams] = useSearchParams();
  let queryName = searchParams.get("name");
  let pageName = queryName;
  console.log("pageName", { pageName });

  const [formData, setFormData] = useState({
    franchiseInput: '',
    primaryPhone: '',
    statusInput: '',
    roleInput: '',
    reportingInput: '',
    genderInput: '',
    countryCodeInput: '',
    stateCodeInput: '',
    projectField3: '',
  });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  return (
    <>
      <SimpleHeader name={"Add"} parentName="Add HO Users" />
      <Container className="mt--6" fluid>
        <Card className="mb-4">
          <CardHeader>
            <h3 className="mb-0">Add {props.title}</h3>
          </CardHeader>
          <CardBody>
            <Row>
              <Col md="6">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="nameInput"
                  >
                    Name
                  </label>
                  <Input
                    id="nameInput"
                    placeholder="Enter your name"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="empIdInput"
                  >
                    Emp Id
                  </label>
                  <Input
                    id="empIdInput"
                    placeholder="Enter your employee ID"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="statusInput"
                  >
                    Status
                  </label>
                  <CustomSelect
                    value={formData.statusInput}
                    onChange={(e) => handleInputChange('statusInput', e.target.value)}
                    className={`form-control`}
                    options={[
                      { id: "A", text: "Active" },
                      { id: "I", text: "In-Active" }
                    ]}
                    placeholder="Select"
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md="4">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="roleInput"
                  >
                    Role
                  </label>
                  <CustomSelect
                    value={formData.roleInput}
                    onChange={(e) => handleInputChange('roleInput', e.target.value)}
                    className={`form-control`}
                    options={[
                      { id: "A", text: "Role 1" },
                      { id: "I", text: "Role 2" }
                    ]}
                    placeholder="Select"
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="reportingInput"
                  >
                    Reporting To
                  </label>
                  <CustomSelect
                    value={formData.reportingInput}
                    onChange={(e) => handleInputChange('reportingInput', e.target.value)}
                    className={`form-control`}
                    options={[
                      { id: "A", text: "User 1" },
                      { id: "I", text: "User 2" }
                    ]}
                    placeholder="Select"
                  />
                </FormGroup>
              </Col>
              <Col md="2">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="genderInput"
                  >
                    Gender
                  </label>
                  <CustomSelect
                    value={formData.genderInput}
                    onChange={(e) => handleInputChange('genderInput', e.target.value)}
                    className={`form-control`}
                    options={[
                      { id: "Male", text: "Male" },
                      { id: "Female", text: "Female" }
                    ]}
                    placeholder="Select"
                  />
                </FormGroup>
              </Col>
              <Col md="2">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="dobInput"
                  >
                    DOB
                  </label>
                  <Input
                    id="dobInput"
                    placeholder="YYYY-MM-DD"
                    type="date"
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md="4">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="usernameInput"
                  >
                    Username
                  </label>
                  <Input
                    id="usernameInput"
                    placeholder="Enter your username"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="passwordInput"
                  >
                    Password
                  </label>
                  <Input
                    id="passwordInput"
                    placeholder="Enter your password"
                    type="password"
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="reEnterPasswordInput"
                  >
                    Re-enter Password
                  </label>
                  <Input
                    id="reEnterPasswordInput"
                    placeholder="Re-enter your password"
                    type="password"
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md="4">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="countryCodeInput"
                  >
                    Country Code
                  </label>
                  <CustomSelect
                    value={formData.countryCodeInput}
                    onChange={(e) => handleInputChange('countryCodeInput', e.target.value)}
                    className={`form-control`}
                    options={[
                      { id: "A", text: "India" },
                      { id: "I", text: "USA" }
                    ]}
                    placeholder="Select"
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="stateCodeInput"
                  >
                    State Code
                  </label>
                  <CustomSelect
                    value={formData.stateCodeInput}
                    onChange={(e) => handleInputChange('stateCodeInput', e.target.value)}
                    className={`form-control`}
                    options={[
                      { id: "A", text: "Telangana" },
                      { id: "I", text: "Andhra Pradesh" }
                    ]}
                    placeholder="Select"
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="cityCodeInput"
                  >
                    City Code
                  </label>
                  <CustomSelect
                    value={formData.cityCodeInput}
                    onChange={(e) => handleInputChange('cityCodeInput', e.target.value)}
                    className={`form-control`}
                    options={[
                      { id: "A", text: "Hyderabad" },
                      { id: "I", text: "Vizag" }
                    ]}
                    placeholder="Select"
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md="12">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="addressInput"
                  >
                    Address
                  </label>
                  <Input
                    id="addressInput"
                    placeholder="Enter complete address"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md="4">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="dobInput"
                  >
                    Start Date
                  </label>
                  <Input
                    id="dobInput"
                    placeholder="YYYY-MM-DD"
                    type="date"
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="dobInput"
                  >
                    End Date
                  </label>
                  <Input
                    id="dobInput"
                    placeholder="YYYY-MM-DD"
                    type="date"
                  />
                </FormGroup>
              </Col>
            </Row>

            <CardTitle className="text-uppercase text-muted">
              Documents
            </CardTitle>

            <Row>
              <Col md="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="panNumber">
                    Aadhar Card <RedAsterisk />
                  </label>
                  <Input
                    id="panNumber"
                    placeholder="Aadhar Card"
                    type="text"
                    value={formData.panNumber}
                    onChange={(e) => handleInputChange('panNumber', e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md="8">
                <FormGroup>
                  <label className="form-control-label" htmlFor="address">
                    Upload Aadhar Card Document <RedAsterisk />
                  </label>
                  <div className="custom-file">
                    <input
                      className="custom-file-input"
                      id="customFileLang"
                      lang="en"
                      type="file"
                    />
                    <label
                      className="custom-file-label"
                      htmlFor="customFileLang"
                    >
                      Select file
                    </label>
                  </div>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="panNumber">
                    PAN Number <RedAsterisk />
                  </label>
                  <Input
                    id="panNumber"
                    placeholder="PAN Number"
                    type="text"
                    value={formData.panNumber}
                    onChange={(e) => handleInputChange('panNumber', e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md="8">
                <FormGroup>
                  <label className="form-control-label" htmlFor="address">
                    Upload PAN Document <RedAsterisk />
                  </label>
                  <div className="custom-file">
                    <input
                      className="custom-file-input"
                      id="customFileLang"
                      lang="en"
                      type="file"
                    />
                    <label
                      className="custom-file-label"
                      htmlFor="customFileLang"
                    >
                      Select file
                    </label>
                  </div>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md="12">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="dobInput"
                  >
                    User Description
                  </label>
                  <Input
                    id="dobInput"
                    placeholder="Description"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="12" className="d-flex justify-content-end">
                <Button className="btn-primary" color="primary" size="xl">
                  SUBMIT
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}

export default UserAdd;
