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
  Input
} from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

import LoaderHorizontal from "./helpers/LoaderHorizontalCenter";
import masterServices from "../../utils/api/services/master.services";

const { SearchBar } = Search;
function Modules() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sno, setSno] = useState(1);

  const [popModel, setPopModal] = useState(false);
  const toggleModal = () => {
    setPopModal(!popModel);
  };
  const firstListRef = React.useRef(null);
  React.useEffect(() => {
    const getRolesList = async () => {
      console.log("API Call");
      try {
        // Perform API call for authentication
        const response = await masterServices.getModules();

        // Assuming the API returns a token
        console.log("Response", response.data.data);
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        // Handle login error
        console.error('Invalid api call. Please try again.', error);
      }
    };

    getRolesList();
  }, []);
  return (
    <>
      <SimpleHeader name="Modules" parentName="Master" />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader >
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3>Modules List</h3>
                  </Col>
                  <Col className="text-right px-2" xs="4">
                    <Button
                      color="primary"
                      type="button"
                      onClick={toggleModal}
                    >
                      Add Module
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
                        data.map((item, index) => {
                          return (
                            <tr>
                              <th scope="row" className="sno">
                                {sno + index}
                              </th>
                              <td scope="row" className="state">{item.module}</td>
                              <td>
                                <Badge color="" className="badge-dot mr-4">
                                  {item.builder_status == "A" ? (
                                    <i className="bg-success" />
                                  ) : (
                                    <i className="bg-danger" />
                                  )}
                                  <span className="status">{item.builder_status == "A" ? "Active" : "In-Active"}</span>
                                </Badge>
                              </td>
                              <td scope="row" className="country">{item.created_date}</td>
                              <td scope="row" className="country">{item.createdby}</td>
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
                      )}
                    </tbody>
                  </Table>
                </div>
              </CardBody>
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
        fullscreen={'lg'}
      >
        <Row>
          <Col lg="12">
            <Card className="mb-0">
              <CardHeader className="bg-default">
                <Row>
                  <Col lg="6">
                    <h5 className="modal-title text-white" id="exampleModalLabel">
                      Add Module
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
                  <Col lg="12">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="modulename"
                      >
                        Module Name
                      </label>
                      <Input
                        id="modulename"
                        placeholder="Module Name"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="12">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="modulestatus"
                      >
                        Status
                      </label>
                      <select className="form-control" name="modulestatus" id="modulestatus">
                        <option value="A">Active</option>
                        <option value="I">In-Active</option>
                      </select>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
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
                    <Button color="primary" type="button">
                      Submit
                    </Button>
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Modal>
    </>
  );
}

export default Modules;
