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
} from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
const { SearchBar } = Search;
function Sortable() {
  const [popModel, setPopModal] = useState(false);
  const toggleModal = () => {
    setPopModal(!popModel);
  };
  const firstListRef = React.useRef(null);
  const secondListRef = React.useRef(null);
  const thirdListRef = React.useRef(null);
  React.useEffect(() => {
    new List(firstListRef.current, {
      valueNames: ["name", "budget", "status", "completion"],
      listClass: "list",
    });
    new List(secondListRef.current, {
      valueNames: ["name", "budget", "status", "completion"],
      listClass: "list",
    });
    new List(thirdListRef.current, {
      valueNames: ["name", "budget", "status", "completion"],
      listClass: "list",
    });
  }, []);
  return (
    <>
      <SimpleHeader name="Send Documents" parentName="Documents" />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="py-0">Project</h3>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col lg="6">
                    <FormGroup>
                      <select className="form-control">
                        <option>Select Project</option>
                      </select>
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <select className="form-control">
                        <option>Select Property</option>
                      </select>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </div>
        </Row>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="py-0">Brochure Data</h3>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col lg="12">
                    <div className="table-responsive" ref={firstListRef}>
                      <Table className="align-items-center table-flush">
                        <thead className="thead-light">
                          <tr>
                            <th className="sort" data-sort="sno" scope="col">
                              SNO
                            </th>
                            <th className="sort" data-sort="name" scope="col">
                              Project Id
                            </th>
                            <th className="sort" data-sort="name" scope="col">
                              Project Name
                            </th>
                            <th className="sort" data-sort="name" scope="col">
                              Document
                            </th>
                          </tr>
                        </thead>
                        <tbody className="list">
                          <tr>
                            <th scope="row">
                              1
                            </th>
                            <td scope="row">Name</td>
                            <td scope="row">Key</td>
                            <td scope="row">Module</td>
                          </tr>
                          <tr>
                            <th scope="row">
                              1
                            </th>
                            <td scope="row">Name</td>
                            <td scope="row">Key</td>
                            <td scope="row">Module</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </div>
        </Row>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="py-0">All Status Images Data</h3>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col lg="12">
                    <div className="table-responsive" ref={firstListRef}>
                      <Table className="align-items-center table-flush">
                        <thead className="thead-light">
                          <tr>
                            <th className="sort" data-sort="sno" scope="col">
                              SNO
                            </th>
                            <th className="sort" data-sort="name" scope="col">
                              Project Id
                            </th>
                            <th className="sort" data-sort="name" scope="col">
                              Project Name
                            </th>
                            <th className="sort" data-sort="name" scope="col">
                              Image
                            </th>
                          </tr>
                        </thead>
                        <tbody className="list">
                          <tr>
                            <th scope="row">
                              1
                            </th>
                            <td scope="row">Name</td>
                            <td scope="row">Key</td>
                            <td scope="row">Module</td>
                          </tr>
                          <tr>
                            <th scope="row">
                              1
                            </th>
                            <td scope="row">Name</td>
                            <td scope="row">Key</td>
                            <td scope="row">Module</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </div>
        </Row>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="py-0">Current Property Images Data</h3>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col lg="12">
                    <div className="table-responsive" ref={firstListRef}>
                      <Table className="align-items-center table-flush">
                        <thead className="thead-light">
                          <tr>
                            <th className="sort" data-sort="sno" scope="col">
                              SNO
                            </th>
                            <th className="sort" data-sort="name" scope="col">
                              Project Id
                            </th>
                            <th className="sort" data-sort="name" scope="col">
                              Project Name
                            </th>
                            <th className="sort" data-sort="name" scope="col">
                              Image
                            </th>
                          </tr>
                        </thead>
                        <tbody className="list">
                          <tr>
                            <th scope="row">
                              1
                            </th>
                            <td scope="row">Name</td>
                            <td scope="row">Key</td>
                            <td scope="row">Module</td>
                          </tr>
                          <tr>
                            <th scope="row">
                              1
                            </th>
                            <td scope="row">Name</td>
                            <td scope="row">Key</td>
                            <td scope="row">Module</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </div>
        </Row>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="py-0">Floor Plan Images Data</h3>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col lg="12">
                    <div className="table-responsive" ref={firstListRef}>
                      <Table className="align-items-center table-flush">
                        <thead className="thead-light">
                          <tr>
                            <th className="sort" data-sort="sno" scope="col">
                              SNO
                            </th>
                            <th className="sort" data-sort="name" scope="col">
                              Project Id
                            </th>
                            <th className="sort" data-sort="name" scope="col">
                              Project Name
                            </th>
                            <th className="sort" data-sort="name" scope="col">
                              Image
                            </th>
                          </tr>
                        </thead>
                        <tbody className="list">
                          <tr>
                            <th scope="row">
                              1
                            </th>
                            <td scope="row">Name</td>
                            <td scope="row">Key</td>
                            <td scope="row">Module</td>
                          </tr>
                          <tr>
                            <th scope="row">
                              1
                            </th>
                            <td scope="row">Name</td>
                            <td scope="row">Key</td>
                            <td scope="row">Module</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </div>
        </Row>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="py-0">Prospects</h3>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col lg="8">
                    <FormGroup>
                      <select className="form-control">
                        <option>Select Prospects</option>
                      </select>
                    </FormGroup>
                  </Col>
                  <Col className="text-right px-2" lg="4">
                    <Button
                      color="primary"
                      type="button"
                      onClick={toggleModal}
                    >
                      Submit
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Sortable;
