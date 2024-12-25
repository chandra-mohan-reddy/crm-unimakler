import React, { useState } from "react";
import RedAsterisk from './helpers/RedAsterisk';
// react plugin used to create DropdownMenu for selecting items
import Select2 from "react-select2-wrapper";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Input,
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  CardFooter,
  Table,
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem

} from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";

function Components() {
  const [currentTab, setCurrentTab] = useState(0);
  const [validationErrors, setValidationErrors] = useState({});
  const stateOptions = [];
  const cityOptions = [];
  const locationOptions = [];

  const tabs = [
    // { label: 'Franchise Details', fields: ['franchiseInput', 'statusInput', 'primaryPhone', 'primaryEmail'] },
    { label: 'Franchise Details', fields: ['franchiseInput'] },
    { label: 'Owner Details', fields: ['ownerName'] },
    { label: 'Locations', fields: [] },
    { label: 'Users', fields: [] },
    { label: 'Projects', fields: [] },
    { label: 'Preview', fields: [] },
  ];

  const [formData, setFormData] = useState({
    franchiseInput: '',
    primaryPhone: '',
    statusInput: '',
    secondaryPhone: '',
    primaryEmail: '',
    secondaryEmail: '',
    ownerName: '',
    projectField2: '',
    projectField3: '',
  });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  // const validateFields = () => {
  //   return tabs[currentTab].fields.every((field) => !!formData[field]);
  // };

  const validateFields = () => {
    const currentFields = tabs[currentTab].fields;
    const errors = {};
    console.log("currentFields", currentFields.length);
    if (currentFields.length > 0) {
      currentFields.forEach((field) => {
        if (!formData[field]) {
          errors[field] = 'This field is required.';
        }
        // You can add additional custom validation logic for each field here if needed
      });
    }

    setValidationErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleTabClick = (index) => {
    const currentFields = tabs[currentTab].fields;
    console.log("currentFields", currentFields);
    if (validateFields(currentFields)) {
      setCurrentTab(index);
    } else {
      alert('Please fill in all required fields before proceeding to the next tab.');
      // You can customize the error handling based on your requirements
    }
  };

  const handleNext = () => {
    const nextTab = currentTab + 1;
    const nextFields = tabs[nextTab].fields;
    if (validateFields(nextFields)) {
      setCurrentTab(nextTab);
    } else {
      alert('Please fill in all required fields before proceeding to the next tab.');
      // You can customize the error handling based on your requirements
    }
  };

  const handlePrevious = () => {
    setCurrentTab((prevTab) => prevTab - 1);
  };

  const isSingleButton = currentTab === 0;

  const handleSubmit = () => {
    alert("Form submitted!")
  };

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


  const renderFormForPage = (page) => {
    switch (page) {
      case 0:
        return (
          <div>
            <Row>
              <Col md="6">
                <FormGroup className={validationErrors['statusInput'] ? 'has-danger' : ''}>
                  <label className="form-control-label" htmlFor="statusInput">
                    Super Franchise Name <RedAsterisk />
                  </label>
                  <CustomSelect
                    value={formData.statusInput}
                    onChange={(e) => handleInputChange('statusInput', e.target.value)}
                    className={`form-control ${validationErrors['statusInput'] ? 'is-invalid' : ''}`}
                    options={[
                      { id: "1", text: "Franchise One" },
                      { id: "2", text: "Franchise Two" }
                    ]}
                    placeholder="Select"
                    hasError={validationErrors['statusInput']}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="8">
                <FormGroup className={validationErrors['franchiseInput'] ? 'has-danger' : ''}>
                  <label className="form-control-label" htmlFor="franchiseInput">
                    Franchise Name <RedAsterisk />
                  </label>
                  <Input
                    id="franchiseInput"
                    placeholder="Franchise name"
                    type="text"
                    value={formData.franchiseInput}
                    onChange={(e) => handleInputChange('franchiseInput', e.target.value)}
                    className={validationErrors['franchiseInput'] ? 'is-invalid' : ''}
                  />
                  {validationErrors['franchiseInput'] && (
                    <div className="invalid-feedback">
                      {validationErrors['franchiseInput']}
                    </div>
                  )}
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup className={validationErrors['statusInput'] ? 'has-danger' : ''}>
                  <label className="form-control-label" htmlFor="statusInput">
                    Status <RedAsterisk />
                  </label>
                  <CustomSelect
                    value={formData.statusInput}
                    onChange={(e) => handleInputChange('statusInput', e.target.value)}
                    className={`form-control ${validationErrors['statusInput'] ? 'is-invalid' : ''}`}
                    options={[
                      { id: "1", text: "Alerts" },
                      { id: "2", text: "Badges" },
                      { id: "3", text: "Buttons" },
                      { id: "4", text: "Cards" },
                      { id: "5", text: "Forms" },
                      { id: "6", text: "Modals" },
                    ]}
                    placeholder="Select"
                    hasError={validationErrors['statusInput']}
                  />
                </FormGroup>
              </Col>
            </Row>
            <CardTitle className="text-uppercase text-muted">
              Contact Information
            </CardTitle>
            <Row>
              <Col md="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="primaryPhone">
                    Primary Phone <RedAsterisk />
                  </label>
                  <Input
                    id="primaryPhone"
                    placeholder="Phone Number"
                    type="text"
                    value={formData.primaryPhone}
                    onChange={(e) => handleInputChange('primaryPhone', e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="secondaryPhone">
                    Secondary Phone
                  </label>
                  <Input
                    id="secondaryPhone"
                    placeholder="Phone Number"
                    type="text"
                    value={formData.secondaryPhone}
                    onChange={(e) => handleInputChange('secondaryPhone', e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="primaryEmail">
                    Primary Email <RedAsterisk />
                  </label>
                  <Input
                    id="primaryEmail"
                    placeholder="Email Address"
                    type="text"
                    value={formData.primaryEmail}
                    onChange={(e) => handleInputChange('primaryEmail', e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="secondaryEmail">
                    Secondary Email
                  </label>
                  <Input
                    id="secondaryEmail"
                    placeholder="Email Address"
                    type="text"
                    value={formData.secondaryEmail}
                    onChange={(e) => handleInputChange('secondaryEmail', e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="state">
                    State <RedAsterisk />
                  </label>
                  <Select2
                    className="form-control"
                    defaultValue="1"
                    options={{
                      placeholder: "Select",
                    }}
                    data={[
                      { id: "1", text: "Alerts" },
                      { id: "2", text: "Badges" },
                      { id: "3", text: "Buttons" },
                      { id: "4", text: "Cards" },
                      { id: "5", text: "Forms" },
                      { id: "6", text: "Modals" },
                    ]}
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="city">
                    City <RedAsterisk />
                  </label>
                  <Select2
                    className="form-control"
                    defaultValue="1"
                    options={{
                      placeholder: "Select",
                    }}
                    data={[
                      { id: "1", text: "Alerts" },
                      { id: "2", text: "Badges" },
                      { id: "3", text: "Buttons" },
                      { id: "4", text: "Cards" },
                      { id: "5", text: "Forms" },
                      { id: "6", text: "Modals" },
                    ]}
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="location">
                    Location <RedAsterisk />
                  </label>
                  <Select2
                    className="form-control"
                    defaultValue="1"
                    options={{
                      placeholder: "Select",
                    }}
                    data={[
                      { id: "1", text: "Alerts" },
                      { id: "2", text: "Badges" },
                      { id: "3", text: "Buttons" },
                      { id: "4", text: "Cards" },
                      { id: "5", text: "Forms" },
                      { id: "6", text: "Modals" },
                    ]}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <FormGroup>
                  <label className="form-control-label" htmlFor="address">
                    Address <RedAsterisk />
                  </label>
                  <Input
                    id="address"
                    placeholder="Write a large text here ..."
                    rows="3"
                    type="textarea"
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
                  <label className="form-control-label" htmlFor="gstNumber">
                    GST Number <RedAsterisk />
                  </label>
                  <Input
                    id="gstNumber"
                    placeholder="GST Number"
                    type="text"
                    value={formData.gstNumber}
                    onChange={(e) => handleInputChange('gstNumber', e.target.value)}
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
                  <label className="form-control-label" htmlFor="address">
                    Upload office Image <RedAsterisk />
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
          </div>
        );

      case 1:
        return (
          <div>
            <Row>
              <Col md="6">
                <FormGroup className={validationErrors['ownerName'] ? 'has-danger' : ''}>
                  <label className="form-control-label" htmlFor="ownerName">
                    Owner Name <RedAsterisk />
                  </label>
                  <Input
                    id="ownerName"
                    placeholder="Owner name"
                    type="text"
                    value={formData.ownerName}
                    onChange={(e) => handleInputChange('ownerName', e.target.value)}
                    className={validationErrors['ownerName'] ? 'is-invalid' : ''}
                  />
                  {validationErrors['ownerName'] && (
                    <div className="invalid-feedback">
                      {validationErrors['ownerName']}
                    </div>
                  )}
                </FormGroup>
              </Col>
              <Col md="2">
                <FormGroup className={validationErrors['ownerGender'] ? 'has-danger' : ''}>
                  <label className="form-control-label" htmlFor="ownerGender">
                    Gender <RedAsterisk />
                  </label>
                  <CustomSelect
                    value={formData.ownerGender}
                    onChange={(e) => handleInputChange('ownerGender', e.target.value)}
                    className={`form-control ${validationErrors['ownerGender'] ? 'is-invalid' : ''}`}
                    options={[
                      { id: "1", text: "Alerts" },
                      { id: "2", text: "Badges" },
                      { id: "3", text: "Buttons" },
                      { id: "4", text: "Cards" },
                      { id: "5", text: "Forms" },
                      { id: "6", text: "Modals" },
                    ]}
                    placeholder="Select"
                    hasError={validationErrors['ownerGender']}
                  />
                </FormGroup>
              </Col>
              <Col md="2">
                <FormGroup className={validationErrors['ownerDob'] ? 'has-danger' : ''}>
                  <label className="form-control-label" htmlFor="ownerDob">
                    DOB <RedAsterisk />
                  </label>
                  <ReactDatetime
                    inputProps={{
                      placeholder: "Date Picker Here",
                    }}
                    timeFormat={false}
                    value={formData.ownerDob}
                  />
                  {validationErrors['ownerDob'] && (
                    <div className="invalid-feedback">
                      {validationErrors['ownerDob']}
                    </div>
                  )}
                </FormGroup>
              </Col>
            </Row>
            <CardTitle className="text-uppercase text-muted">
              Contact Information
            </CardTitle>
            <Row>
              <Col md="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="primaryPhone">
                    Primary Phone <RedAsterisk />
                  </label>
                  <Input
                    id="primaryPhone"
                    placeholder="Phone Number"
                    type="text"
                    value={formData.primaryPhone}
                    onChange={(e) => handleInputChange('primaryPhone', e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="primaryEmail">
                    Primary Email <RedAsterisk />
                  </label>
                  <Input
                    id="primaryEmail"
                    placeholder="Email Address"
                    type="text"
                    value={formData.primaryEmail}
                    onChange={(e) => handleInputChange('primaryEmail', e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <FormGroup>
                  <label className="form-control-label" htmlFor="address">
                    Residential Address <RedAsterisk />
                  </label>
                  <Input
                    id="address"
                    placeholder="Write a large text here ..."
                    rows="3"
                    type="textarea"
                  />
                </FormGroup>
              </Col>
            </Row>
            <CardTitle className="text-uppercase text-muted">
              Login Information
            </CardTitle>
            <Row>
              <Col md="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="secondaryEmail">
                    Username
                  </label>
                  <Input
                    id="secondaryEmail"
                    placeholder="Email Address"
                    type="text"
                    value={formData.secondaryEmail}
                    onChange={(e) => handleInputChange('secondaryEmail', e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="secondaryEmail">
                    Password
                  </label>
                  <Input
                    id="secondaryEmail"
                    placeholder="Email Address"
                    type="text"
                    value={formData.secondaryEmail}
                    onChange={(e) => handleInputChange('secondaryEmail', e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="secondaryEmail">
                    Re-Enter Password
                  </label>
                  <Input
                    id="secondaryEmail"
                    placeholder="Email Address"
                    type="text"
                    value={formData.secondaryEmail}
                    onChange={(e) => handleInputChange('secondaryEmail', e.target.value)}
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
                  <label className="form-control-label" htmlFor="gstNumber">
                    Aadhar Number <RedAsterisk />
                  </label>
                  <Input
                    id="gstNumber"
                    placeholder="GST Number"
                    type="text"
                    value={formData.gstNumber}
                    onChange={(e) => handleInputChange('gstNumber', e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md="8">
                <FormGroup>
                  <label className="form-control-label" htmlFor="address">
                    Upload Aadhar Document <RedAsterisk />
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
                  <label className="form-control-label" htmlFor="address">
                    Upload Owner Image <RedAsterisk />
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
          </div>
        );

      case 2:
        // Render form for page 2
        return (
          <div>
            <Row>
              <Col md="6">
                <Table className="align-items-center table-flush">
                  <thead className="thead-light">
                    <tr>
                      <th className="sort" data-sort="sno" scope="col">
                        SNO
                      </th>
                      <th className="sort" data-sort="name" scope="col">
                        Location
                      </th>
                      <th scope="col">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="list">
                    <tr>
                      <th scope="row">
                        1
                      </th>
                      <td scope="row">Customer Name</td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            color=""
                            role="button"
                            size="sm"
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        1
                      </th>
                      <td scope="row">Customer Name</td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            color=""
                            role="button"
                            size="sm"
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </div>
        );

      case 3:
        // Render form for page 3
        return (
          <div>
            <Row>
              <Col md="6">
                <Table className="align-items-center table-flush">
                  <thead className="thead-light">
                    <tr>
                      <th className="sort" data-sort="sno" scope="col">
                        SNO
                      </th>
                      <th className="sort" data-sort="name" scope="col">
                        Name
                      </th>
                      <th className="sort" data-sort="name" scope="col">
                        Role
                      </th>
                      <th className="sort" data-sort="name" scope="col">
                        Mobile
                      </th>
                      <th className="sort" data-sort="name" scope="col">
                        Email
                      </th>
                      <th scope="col">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="list">
                    <tr>
                      <th scope="row">
                        1
                      </th>
                      <td scope="row">Customer Name</td>
                      <td scope="row">Customer Name</td>
                      <td scope="row">Customer Name</td>
                      <td scope="row">Customer Name</td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            color=""
                            role="button"
                            size="sm"
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        1
                      </th>
                      <td scope="row">Customer Name</td>
                      <td scope="row">Customer Name</td>
                      <td scope="row">Customer Name</td>
                      <td scope="row">Customer Name</td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            color=""
                            role="button"
                            size="sm"
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </div>
        );

      case 4:
        // Render form for page 4
        return (
          <div>
            <Row>
              <Col md="6">
                <Table className="align-items-center table-flush">
                  <thead className="thead-light">
                    <tr>
                      <th className="sort" data-sort="sno" scope="col">
                        SNO
                      </th>
                      <th className="sort" data-sort="name" scope="col">
                        Project
                      </th>
                      <th className="sort" data-sort="name" scope="col">
                        Builder
                      </th>
                      <th className="sort" data-sort="name" scope="col">
                        Location
                      </th>
                      <th scope="col">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="list">
                    <tr>
                      <th scope="row">
                        1
                      </th>
                      <td scope="row">Customer Name</td>
                      <td scope="row">Customer Name</td>
                      <td scope="row">Customer Name</td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            color=""
                            role="button"
                            size="sm"
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        1
                      </th>
                      <td scope="row">Customer Name</td>
                      <td scope="row">Customer Name</td>
                      <td scope="row">Customer Name</td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            color=""
                            role="button"
                            size="sm"
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </div>
        );

      case 5:
        return (
          <div>
            {/* Render preview based on formData */}
            <Row>
              <Col md="12">
                <FormGroup>
                  <CardTitle className="text-uppercase text-muted text-center">
                    Franchise Details
                  </CardTitle>
                  <p>
                    <strong>Franchise Name:</strong> {formData.franchiseInput}
                  </p>
                  <p>
                    <strong>Status:</strong> {formData.statusInput}
                  </p>
                  <p>
                    <strong>Primary Phone:</strong> {formData.franchiseInput}
                  </p>
                  <p>
                    <strong>Secondary Phone:</strong> {formData.franchiseInput}
                  </p>
                  <p>
                    <strong>Primary Email:</strong> {formData.franchiseInput}
                  </p>
                  <p>
                    <strong>Secondary Email:</strong> {formData.franchiseInput}
                  </p>
                  <p>
                    <strong>State :</strong> {formData.franchiseInput}
                  </p>
                  <p>
                    <strong>City :</strong> {formData.franchiseInput}
                  </p>
                  <p>
                    <strong>Location :</strong> {formData.franchiseInput}
                  </p>
                  <p>
                    <strong>Address :</strong> {formData.franchiseInput}
                  </p>
                  <p>
                    <strong>GST Number:</strong> {formData.franchiseInput}
                  </p>
                  <p>
                    <strong>PAN Number:</strong> {formData.franchiseInput}
                  </p>
                  <p>
                    <strong>GST Document:</strong> Uploaded
                  </p>
                  <p>
                    <strong>PAN Document:</strong> Uploaded
                  </p>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md="12">
                <FormGroup>
                  <CardTitle className="text-uppercase text-muted text-center">
                    Owner Details
                  </CardTitle>
                  <p>
                    <strong>Owner Name:</strong> {formData.ownerName}
                  </p>
                  <p>
                    <strong>Gender:</strong> {formData.ownerGender}
                  </p>
                  <p>
                    <strong>DOB:</strong> {formData.ownerDob}
                  </p>
                  <p>
                    <strong>Primary Phone:</strong> {formData.franchiseInput}
                  </p>
                  <p>
                    <strong>Primary Email:</strong> {formData.franchiseInput}
                  </p>
                  <p>
                    <strong>Residential Address :</strong> {formData.franchiseInput}
                  </p>
                  <p>
                    <strong>Username :</strong> {formData.franchiseInput}
                  </p>
                  <p>
                    <strong>Aadhar Number :</strong> {formData.franchiseInput}
                  </p>
                  <p>
                    <strong>PAN Number:</strong> {formData.franchiseInput}
                  </p>
                  <p>
                    <strong>AAdhar Document:</strong> Uploaded
                  </p>
                  <p>
                    <strong>PAN Document:</strong> Uploaded
                  </p>
                </FormGroup>
              </Col>
            </Row>
          </div>
        );


      // Add more cases as needed

      default:
        return null; // Render nothing for unknown pages
    }
  };


  return (
    <>
      <SimpleHeader name="Add Mini Franchise" parentName="Mini Franchise" />
      <Container className="mt--6" fluid>
        <Row>
          <Col lg="12">
            <div className="card-wrapper">
              <Card className="mb-4">
                <CardHeader >
                  <Nav tabs pills className="nav-fill flex-column flex-md-row" id="tabs-icons-text" style={{ borderBottom: 'none' }}>
                    {tabs.map((tab, index) => (
                      <NavItem key={index}>
                        <NavLink
                          onClick={() => handleTabClick(index)}
                          active={currentTab === index}
                          className={`nav-link ${currentTab === index ? 'active' : ''}`}
                        >
                          {tab.label}
                        </NavLink>
                      </NavItem>
                    ))}
                  </Nav>
                </CardHeader>
                <CardBody>
                  {renderFormForPage(currentTab)}
                </CardBody>
                <CardFooter>
                  <div className={`${isSingleButton ? 'text-right' : 'd-flex justify-content-between'}`}>
                    {currentTab > 0 && (
                      <Button onClick={handlePrevious} className="mr-2" color="info">
                        Previous
                      </Button>
                    )}
                    {currentTab < tabs.length - 1 && (
                      <Button onClick={handleNext} className="ml-2" color="primary">
                        Next
                      </Button>
                    )}
                    {currentTab === tabs.length - 1 && (
                      <Button onClick={handleSubmit} className="ml-2" color="default">
                        Submit
                      </Button>
                    )}
                  </div>
                </CardFooter>

              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Components;
