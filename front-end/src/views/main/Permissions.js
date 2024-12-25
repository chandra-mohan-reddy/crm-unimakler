import React, { useState } from "react";
// javascript plugin that creates a sortable object from a dom object
import List from "list.js";
// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
  Button,
  Col,
  CardBody,
  Modal,
  FormGroup,
  Input,
  CardTitle,
  FormFeedback
} from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

import LoaderHorizontal from "./helpers/LoaderHorizontalCenter";
import masterServices from "../../utils/api/services/master.services";

import Loader from 'views/main/helpers/Loader';

const { SearchBar } = Search;
function Permissions() {
  const [data, setData] = useState([]);
  const [modulesList, setModulesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitloading, setSubmitloading] = useState(false);
  const [sno, setSno] = useState(1);

  const [name, setName] = useState();
  const [status, setStatus] = useState();
  const [description, setDescription] = useState();
  const [key, setKey] = useState();
  const [module, setModule] = useState();

  const [errors, setErrors] = useState({});

  const [popModel, setPopModal] = useState(false);
  const toggleModal = () => {
    setPopModal(!popModel);
  };
  const firstListRef = React.useRef(null);

  React.useEffect(() => {
    getPermissionsList();
    getModuleList();
  }, []);



  const getPermissionsList = async () => {
    console.log("API Call");
    try {
      // Perform API call for authentication
      const response = await masterServices.getPermissions();

      // Assuming the API returns a token
      console.log("Response", response.data.data);
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      // Handle login error
      console.error('Invalid api call. Please try again.', error);
    }
  };

  const getModuleList = async () => {
    console.log("API Call");
    try {
      // Perform API call for authentication
      const response = await masterServices.getModules();

      // Assuming the API returns a token
      console.log("Response", response.data.data);
      setModulesList(response.data.data);
      setLoading(false);
    } catch (error) {
      // Handle login error
      console.error('Invalid api call. Please try again.', error);
    }
  };

  const handleErrors = (errorResponse) => {
    if (errorResponse && errorResponse.data) {
      setErrors(errorResponse.data);
    }
  };

  const addPermissions = async () => {
    console.log("API Call");
    setSubmitloading(true);
    try {

      let payload = {
        "name": name,
        "permission_status": status,
        "description": description,
        "key": key,
        "module": module,
        "status": status
      }

      // Perform API call for authentication
      const response = await masterServices.addPermissions(payload);

      // Assuming the API returns a token
      console.log("Response", response.data.data);
      setData(response.data.data);
      setSubmitloading(false);
      toggleModal();
      setLoading(true);
      getPermissionsList();
    } catch (error) {
      // Handle login error
      console.error('Invalid api call. Please try again.', error);
      if (error.response.data.code != undefined && error.response.data.code == 422) {
        console.log("Validation error", error.response.data.data);
        handleErrors(error.response.data);
      }
      setSubmitloading(false);
    }
  };

  return (
    <>
      <SimpleHeader name="Permissions" parentName="Master" />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader >
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3>Permissions List</h3>
                  </Col>
                  <Col className="text-right px-2" xs="4">
                    <Button
                      color="primary"
                      type="button"
                      onClick={toggleModal}
                    >
                      Add Permission
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody className="px-0 py-0">
                <div className="table-responsive" ref={firstListRef}>
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
                          Key
                        </th>
                        <th className="sort" data-sort="name" scope="col">
                          Module
                        </th>
                        <th className="sort" data-sort="name" scope="col">
                          Description
                        </th>
                        <th className="sort" data-sort="mobile" scope="col">
                          Status
                        </th>
                        <th className="sort" data-sort="created_on" scope="col">
                          Created On
                        </th>
                        <th className="sort" data-sort="created_by" scope="col">
                          Created By
                        </th>
                        <th scope="col">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="list">
                      {loading ? (
                        <tr><td colSpan={7}><LoaderHorizontal /></td></tr>
                      ) : (
                        data && data.length > 0 ? (
                          data.map((item, index) => {
                            return (
                              <tr>
                                <th scope="row" className="sno">
                                  {sno + index}
                                </th>
                                <td scope="row" className="state">{item.name}</td>
                                <td scope="row" className="state">{item.key}</td>
                                <td scope="row" className="state">{item.module_name}</td>
                                <td scope="row" className="country">{item.description}</td>
                                <td>
                                  <Badge color="" className="badge-dot mr-4">
                                    {item.permission_status == "A" ? (
                                      <i className="bg-success" />
                                    ) : (
                                      <i className="bg-danger" />
                                    )}
                                    <span className="status">{item.permission_status == "A" ? "Active" : "In-Active"}</span>
                                  </Badge>
                                </td>
                                <td scope="row" className="country">{item.created_date}</td>
                                <td scope="row" className="country">{item.created_name && item.created_name.charAt(0).toUpperCase() + item.created_name.slice(1)}</td>
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
                            );
                          })
                        ) : (
                          <tr>
                            <td colSpan="9">No data available</td>
                          </tr>
                        )
                      )}

                    </tbody>
                  </Table>
                </div>
              </CardBody>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="Rejected">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
      <Modal
        className="modal-dialog-centered"
        isOpen={popModel}
        toggle={toggleModal}
        backdrop={false}
        fade={true}
        size="xl"
      >
        <Row>
          <Col lg="12">
            <Card className="mb-0">
              <CardHeader className="bg-default">
                <Row>
                  <Col lg="6">
                    <h5 className="modal-title text-white" id="exampleModalLabel">
                      Add Permission
                    </h5>
                  </Col>
                  <Col lg="6">
                    <button
                      aria-label="Close"
                      className="close"
                      data-dismiss="modal"
                      type="button"
                      onClick={toggleModal}
                    >
                      <span aria-hidden={true} className="text-white">×</span>
                    </button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody className="px-3 py-0 pt-3">
                <Row>
                  <Col lg="3">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-state"
                      >
                        Permission Name
                      </label>
                      <Input
                        id="input-state"
                        placeholder="Name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        invalid={errors && errors.name}
                      />
                      {errors && errors.name && <FormFeedback>{errors.name[0]}</FormFeedback>}
                    </FormGroup>
                  </Col>
                  <Col lg="3">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-state"
                      >
                        Permission Key
                      </label>
                      <Input
                        id="input-state"
                        placeholder="Key"
                        type="text"
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                        required
                        invalid={errors && errors.key}
                      />
                      {errors && errors.key && <FormFeedback>{errors.key[0]}</FormFeedback>}
                    </FormGroup>
                  </Col>
                  <Col lg="3">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-state"
                      >
                        Module
                      </label>
                      <Input
                        type="select"
                        name="select"
                        id="select-state"
                        invalid={errors && errors.module} // Check if there's an error for this field
                        required
                        value={module}
                        onChange={(e) => setModule(e.target.value)}
                      >
                        {modulesList.length == 0 ? (
                          <option value="">No Modules</option>
                        ) : (
                          <>
                            <option value="">Select Module</option>
                            {modulesList.map((item, index) => (
                              <option key={index} value={item.module_id}>{item.module}</option>
                            ))}
                          </>
                        )}

                      </Input>
                      {errors && errors.module && <FormFeedback>{errors.module[0]}</FormFeedback>}
                    </FormGroup>
                  </Col>
                  <Col lg="3">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-state"
                      >
                        Status
                      </label>
                      <Input
                        type="select"
                        name="select"
                        id="select-state"
                        invalid={errors && errors.status} // Check if there's an error for this field
                        required
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value="">Select Status</option>
                        <option value="A">Active</option>
                        <option value="I">In-Active</option>
                      </Input>
                      {errors && errors.status && <FormFeedback>{errors.status[0]}</FormFeedback>}
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="12">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-state"
                      >
                        Description
                      </label>
                      <Input
                        id="exampleFormControlTextarea1"
                        placeholder="Write description here ..."
                        rows="3"
                        type="textarea"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        invalid={errors && errors.description}
                      />
                      {errors && errors.description && <FormFeedback>{errors.description[0]}</FormFeedback>}
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                {submitloading ? (
                  <Row><Col lg="12" colSpan={7}><LoaderHorizontal /></Col></Row>
                ) : (
                  <Row>
                    <Col lg="12 text-right">
                      <Button
                        color="secondary"
                        data-dismiss="modal"
                        type="button"
                        onClick={toggleModal}
                      >
                        Close
                      </Button>
                      <Button color="primary" type="button" onClick={addPermissions}>
                        Submit
                      </Button>
                    </Col>
                  </Row>
                )}
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Modal >
    </>
  );
}

export default Permissions;
