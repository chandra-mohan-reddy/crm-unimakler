import React, { useState } from "react";
import RedAsterisk from './helpers/RedAsterisk';
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

function AddBA() {
  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

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
  return (
    <>
      <SimpleHeader name="Add BA" parentName="Business Associate" />
      <Container className="mt--6" fluid>
        <Card className="mb-4">
          <CardHeader>
            <h3 className="mb-0">Add Business Associate</h3>
          </CardHeader>
          <CardBody>
            <Row>
              <Col md="6">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="franchiseInput"
                  >
                    Franchise Name
                  </label>
                  <CustomSelect
                    value={formData.franchiseInput}
                    onChange={(e) => handleInputChange('franchiseInput', e.target.value)}
                    className={`form-control`}
                    options={[
                      { id: "1", text: "Franchise One" },
                      { id: "2", text: "Franchise Two" }
                    ]}
                    placeholder="Select"
                  />
                </FormGroup>
              </Col>
            </Row>
            <CardTitle className="text-uppercase text-muted">
              Contact Information
            </CardTitle>
            <Row>
              <Col md="6">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="emailInput"
                  >
                    Name
                  </label>
                  <Input
                    id="emailInput"
                    placeholder="Name"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col md="2">
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
              <Col md="2">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="mobileInput"
                  >
                    Primary Mobile
                  </label>
                  <Input
                    id="mobileInput"
                    placeholder="8596321438"
                    type="tel"
                  />
                </FormGroup>
              </Col>
              <Col md="2">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="mobileInput"
                  >
                    Secondary Mobile
                  </label>
                  <Input
                    id="mobileInput"
                    placeholder="8596321438"
                    type="tel"
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="emailInput"
                  >
                    Email
                  </label>
                  <Input
                    id="emailInput"
                    placeholder="mk1@gmail.com"
                    type="email"
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
                    Date of Birth
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

            <CardTitle className="text-uppercase text-muted">
              Documents
            </CardTitle>

            <Row>
              <Col md="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="panNumber">
                    GST Number <RedAsterisk />
                  </label>
                  <Input
                    id="panNumber"
                    placeholder="GST Number"
                    type="text"
                    value={formData.panNumber}
                    onChange={(e) => handleInputChange('panNumber', e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md="8">
                <FormGroup>
                  <label className="form-control-label" htmlFor="address">
                    Upload GST Document <RedAsterisk />
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
                  <label className="form-control-label" htmlFor="gstNumber">
                    RERA Number <RedAsterisk />
                  </label>
                  <Input
                    id="reraNumber"
                    placeholder="RERA Number"
                    type="text"
                    value={formData.gstNumber}
                    onChange={(e) => handleInputChange('gstNumber', e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md="8">
                <FormGroup>
                  <label className="form-control-label" htmlFor="address">
                    Upload RERA Document <RedAsterisk />
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
                    Description
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

export default AddBA;
