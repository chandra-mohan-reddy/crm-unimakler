/*!

=========================================================
* Argon Dashboard PRO React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";
// react plugin used to create DropdownMenu for selecting items
import Select2 from "react-select2-wrapper";
// plugin that creates slider
import Slider from "nouislider";
// react plugin that creates text editor
import ReactQuill from "react-quill";
// javascript plugin that creates nice dropzones for files
import Dropzone from "dropzone";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Input,
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  CardFooter,
} from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";

Dropzone.autoDiscover = false;

function Components() {
  const [currentTab, setCurrentTab] = useState(0);

  const tabs = [
    { label: 'Franchise Details', fields: ['companyName', 'mobile', 'status'] },
    { label: 'Owner Details', fields: ['companyName', 'mobile', 'status'] },
    { label: 'Locations', fields: ['companyName', 'mobile', 'status'] },
    { label: 'Users', fields: ['userField1', 'userField2', 'userField3'] },
    { label: 'Projects', fields: ['projectField1', 'projectField2', 'projectField3'] },
    { label: 'Preview', fields: [] },
  ];

  const [formData, setFormData] = useState({
    companyName: '',
    mobile: '',
    status: '',
    userField1: '',
    userField2: '',
    userField3: '',
    projectField1: '',
    projectField2: '',
    projectField3: '',
  });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const validateFields = () => {
    return tabs[currentTab].fields.every((field) => !!formData[field]);
  };

  const handleTabClick = (index) => {
    const currentFields = tabs[currentTab].fields;
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

  const elementStyle = {
    border: '1px solid #fff',
  };

  const renderFormForPage = (page) => {
    switch (page) {
      case 0:
        return (
          <div>
            <Row>
              <Col md="8">
                <FormGroup>
                  <label className="form-control-label" htmlFor="franchiseInput">
                    Franchise Name
                  </label>
                  <Input id="franchiseInput" placeholder="Franchise name" type="text" />
                </FormGroup>
              </Col>
              <Col md="2">
                <FormGroup>
                  <label className="form-control-label" htmlFor="statusInput">
                    Status
                  </label>
                  <Input id="statusInput" placeholder="Active/Inactive" type="text" />
                </FormGroup>
              </Col>
            </Row>
          </div>
        );

      case 1:
        // Render form for page 1
        return (
          <div>
            {/* Form for page 1 */}
          </div>
        );

      case 2:
        // Render form for page 2
        return (
          <div>
            {/* Form for page 2 */}
          </div>
        );

      // Add more cases as needed

      default:
        return null; // Render nothing for unknown pages
    }
  };


  return (
    <>
      <SimpleHeader name="Form components" parentName="Forms" />
      <Container className="mt--6" fluid>
        <Row>
          <Col lg="12">
            <div className="card-wrapper">
              <Card className="mb-4">
                <CardHeader className="p-0">
                  <Nav tabs className="primary">
                    {tabs.map((tab, index) => (
                      <NavItem key={index}>
                        <NavLink
                          onClick={() => handleTabClick(index)}
                          active={currentTab === index}
                          className={`nav-link-${tab.color} mb-sm-3 mb-md-0 px-5 py-3 ${currentTab === index ? 'bg-info text-white' : ''}`}
                          style={elementStyle}
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
                    {isSingleButton ? (
                      <Button onClick={handleNext} className="ml-2" color="primary">
                        Next
                      </Button>
                    ) : (
                      <Button onClick={handleNext} className="ml-2" color="default">
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
