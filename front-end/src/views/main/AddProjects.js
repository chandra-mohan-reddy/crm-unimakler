import React, { useState } from "react";
// react plugin that creates text editor
import ReactQuill from "react-quill";
import CustomSelect from "./helpers/CustomSelect";
// react plugin used to create DropdownMenu for selecting items
import PropertyDetails from "./projects/property-details";
import ProjectDetails from "./projects/project-details";
import RedAsterisk from "./helpers/RedAsterisk";
import PropertyMap from "./projects/property-google";


// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardImg,
  Form,
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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";

function Components() {
  const [currentTab, setCurrentTab] = useState(0);
  const [reactQuillText, setReactQuillText] = React.useState("");
  const [validationErrors, setValidationErrors] = useState({});

  const tabs = [
    { label: 'Property', fields: [] },
    { label: 'Project', fields: [] },
    { label: 'Amenities', fields: [] },
    { label: 'Specification', fields: [] },
    { label: 'Floor Plan', fields: [] },
    { label: 'Location Maps', fields: [] },
    { label: 'Videos', fields: [] },
    { label: 'Documents', fields: [] },
    { label: 'Status', fields: [] },
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

  // const handleInputChange = (field, value) => {
  //   setFormData((prevData) => ({ ...prevData, [field]: value }));
  // };

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

  const renderFormForPage = (page) => {
    switch (page) {
      case 0:
        return (
          <PropertyDetails />
        );

      case 1:
        return (
          <ProjectDetails />
        );

      case 2:
        // Render form for page 2
        return (
          <div>
            <Row>
              <Col md="12">
                <CardTitle className="text-uppercase text-muted">
                  CLUB HOUSE
                </CardTitle>
                <div className="custom-control custom-checkbox mb-3">
                  <input
                    className="custom-control-input"
                    defaultChecked
                    id="customCheck2"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck2"
                  >
                    Checked
                  </label>
                </div>
              </Col>
            </Row>
          </div>
        );

      case 3:
        // Render form for page 3
        return (
          <div>
            <Row>
              <Col md="12">
                <CardTitle className="text-uppercase text-muted">
                  ABOUT PROJECT
                </CardTitle>
                <Form>
                  <div
                    data-quill-placeholder="Quill WYSIWYG"
                    data-toggle="quill"
                  />
                  <ReactQuill
                    value={reactQuillText}
                    onChange={(value) => setReactQuillText(value)}
                    theme="snow"
                    modules={{
                      toolbar: [
                        ["bold", "italic"],
                        ["link", "blockquote", "code", "image"],
                        [
                          {
                            list: "ordered",
                          },
                          {
                            list: "bullet",
                          },
                        ],
                      ],
                    }}
                  />
                </Form>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md="12">
                <CardTitle className="text-uppercase text-muted">
                  SPECIFICATIONS
                </CardTitle>
                <Form>
                  <div
                    data-quill-placeholder="Quill WYSIWYG"
                    data-toggle="quill"
                  />
                  <ReactQuill
                    value={reactQuillText}
                    onChange={(value) => setReactQuillText(value)}
                    theme="snow"
                    modules={{
                      toolbar: [
                        ["bold", "italic"],
                        ["link", "blockquote", "code", "image"],
                        [
                          {
                            list: "ordered",
                          },
                          {
                            list: "bullet",
                          },
                        ],
                      ],
                    }}
                  />
                </Form>
              </Col>
            </Row>
          </div>
        );

      case 4:
        // Render form for page 4
        return (
          <div>
            <Row>
              <Col md="12">
                <Table className="align-items-center table-flush">
                  <thead className="thead-light">
                    <tr>
                      <th className="sort" data-sort="sno" scope="col">SNO</th>
                      <th className="sort" data-sort="name" scope="col">Super Builtup</th>
                      <th className="sort" data-sort="name" scope="col">Builtup</th>
                      <th className="sort" data-sort="name" scope="col">Carpet</th>
                      <th className="sort" data-sort="name" scope="col">Facing</th>
                      <th className="sort" data-sort="name" scope="col">BHK</th>
                      <th className="sort" data-sort="name" scope="col">Car Parking</th>
                      <th className="sort" data-sort="name" scope="col">Price</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="list">
                    <tr>
                      <th scope="row">
                        1
                      </th>
                      <td scope="row">2200</td>
                      <td scope="row">1760</td>
                      <td scope="row">0</td>
                      <td scope="row">East</td>
                      <td scope="row">3</td>
                      <td scope="row">1</td>
                      <td scope="row">12100000</td>
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
                      <td scope="row">2200</td>
                      <td scope="row">1760</td>
                      <td scope="row">0</td>
                      <td scope="row">East</td>
                      <td scope="row">3</td>
                      <td scope="row">1</td>
                      <td scope="row">12100000</td>
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
            <Row>
              <Col md="12">
                <PropertyMap />
              </Col>
            </Row>
          </div>
        );

      case 6:
        return (
          <div>
            <Row>
              <Col md="6">
                <FormGroup>
                  <label className="form-control-label" htmlFor="gstNumber">
                    Video Link - 1
                  </label>
                  <Input
                    id="gstNumber"
                    placeholder="Paste Youtube link Here"
                    type="text"
                    value={formData.gstNumber}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup>
                  <label className="form-control-label" htmlFor="gstNumber">
                    Video Link - 2
                  </label>
                  <Input
                    id="gstNumber"
                    placeholder="Paste Youtube link Here"
                    type="text"
                    value={formData.gstNumber}
                  />
                </FormGroup>
              </Col>
            </Row>
          </div>
        );

      case 7:
        return (
          <div>
            <Row>
              <Col md="6">
                <CardTitle className="text-uppercase text-muted">
                  Site Layout
                </CardTitle>
                <Card className="bg-dark text-white border-0">
                  <CardImg
                    alt="..."
                    src={require("assets/img/theme/vue.jpg")}
                  />
                </Card>
              </Col>
              <Col md="6">
                <CardTitle className="text-uppercase text-muted">
                  e-Brochure
                </CardTitle>
                <Card className="bg-dark text-white border-0">
                  <CardImg
                    alt="..."
                    src={require("assets/img/theme/vue.jpg")}
                  />
                </Card>
              </Col>
            </Row>

            <CardTitle className="text-uppercase text-muted">
              Property Images
            </CardTitle>
            <Row>
              <Col md="3">
                <Card className="bg-dark text-white border-0">
                  <CardImg
                    alt="..."
                    src={require("assets/img/theme/img-1-1000x600.jpg")}
                  />
                </Card>
              </Col>
            </Row>

            <CardTitle className="text-uppercase text-muted">
              Present Status Images
            </CardTitle>
            <Row>
              <Col md="3">
                <Card className="bg-dark text-white border-0">
                  <CardImg
                    alt="..."
                    src={require("assets/img/theme/sketch.jpg")}
                  />
                </Card>
              </Col>
            </Row>

          </div>
        );

      case 8:
        return (
          <div>
            <Row>
              <Col md="6">
                <FormGroup>
                  <label className="form-control-label" htmlFor="location">
                    Status <RedAsterisk />
                  </label>
                  <CustomSelect
                    value={formData.ownerGender}
                    className={`form-control ${validationErrors['ownerGender'] ? 'is-invalid' : ''}`}
                    options={[
                      { id: "1", text: "Approve" },
                      { id: "2", text: "Reject" },
                    ]}
                    placeholder="Select"
                    hasError={validationErrors['ownerGender']}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup>
                  <label className="form-control-label" htmlFor="address">
                    Remarks <RedAsterisk />
                  </label>
                  <Input
                    id="address"
                    placeholder="Write a large text here ..."
                    rows="5"
                    type="textarea"
                  />
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
      <SimpleHeader name="Add Project" parentName="Projects" />
      <Container className="mt--6" fluid>
        <Row>
          <Col lg="12">
            <div className="card-wrapper">
              <Card className="mb-4">
                <CardHeader >
                  <Nav tabs pills style={{ borderBottom: 'none' }}>
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
