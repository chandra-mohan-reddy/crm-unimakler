import React from "react";
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
} from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";

function Sortable() {
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
      <SimpleHeader name="Active Projects" parentName="Projects" />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Search with below options for more relevant data</h3>
              </CardHeader>
              <div className="table-responsive py-3" ref={firstListRef}>
                <div
                  id="datatable-basic_filter"
                  className="dataTables_filter px-4 pb-1"
                >
                  <Row className="text-center">
                    <label className="col-md-auto">
                      <select className="form-control">
                        <option>Select Country</option>
                        <option>Select Country</option>
                        <option>Select Country</option>
                        <option>Select Country</option>
                      </select>
                    </label>
                    <label className="col-md-auto">
                      <select className="form-control">
                        <option>Select State</option>
                        <option>Select Country</option>
                        <option>Select Country</option>
                        <option>Select Country</option>
                      </select>
                    </label>
                    <label className="col-md-auto">
                      <select className="form-control">
                        <option>Select City</option>
                        <option>Select Country</option>
                        <option>Select Country</option>
                        <option>Select Country</option>
                      </select>
                    </label>
                    <label className="col-md-auto">
                      <select className="form-control">
                        <option>Select Franchise</option>
                        <option>Select Country</option>
                        <option>Select Country</option>
                        <option>Select Country</option>
                      </select>
                    </label>
                    <label >
                      <Button className="col-md-auto btn btn-default">SEARCH</Button>
                    </label>
                  </Row>
                </div>
                <Table className="align-items-center table-flush">
                  <thead className="thead-light">
                    <tr>
                      <th className="sort" data-sort="sno" scope="col">
                        SNO
                      </th>
                      <th className="sort" data-sort="name" scope="col">
                        PROPERTY NAME
                      </th>
                      <th className="sort" data-sort="mobile" scope="col">
                        TYPE
                      </th>
                      <th className="sort" data-sort="project" scope="col">
                        PROPERTY TYPE
                      </th>
                      <th className="sort" data-sort="status" scope="col">
                        LOCATION
                      </th>
                      <th className="sort" data-sort="status" scope="col">
                        STATUS
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
                    <tr>
                      <th scope="row">
                        1
                      </th>
                      <td scope="row">Project Name</td>
                      <td scope="row">Sale</td>
                      <td scope="row">Residential</td>
                      <td scope="row">Kondapur, Hyderabad</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-danger" />
                          <span className="status">Rejected</span>
                        </Badge>
                      </td>
                      <td scope="row">12-Dec-2023 11:45:20</td>
                      <td scope="row">
                        Franchise Name
                      </td>
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
                        2
                      </th>
                      <td scope="row">Project Name</td>
                      <td scope="row">Sale</td>
                      <td scope="row">Residential</td>
                      <td scope="row">Kondapur, Hyderabad</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-danger" />
                          <span className="status">Rejected</span>
                        </Badge>
                      </td>
                      <td scope="row">12-Dec-2023 11:45:20</td>
                      <td scope="row">
                        Franchise Name
                      </td>
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
                        3
                      </th>
                      <td scope="row">Project Name</td>
                      <td scope="row">Sale</td>
                      <td scope="row">Residential</td>
                      <td scope="row">Kondapur, Hyderabad</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-danger" />
                          <span className="status">Rejected</span>
                        </Badge>
                      </td>
                      <td scope="row">12-Dec-2023 11:45:20</td>
                      <td scope="row">
                        Franchise Name
                      </td>
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
                        4
                      </th>
                      <td scope="row">Project Name</td>
                      <td scope="row">Sale</td>
                      <td scope="row">Residential</td>
                      <td scope="row">Kondapur, Hyderabad</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-danger" />
                          <span className="status">Rejected</span>
                        </Badge>
                      </td>
                      <td scope="row">12-Dec-2023 11:45:20</td>
                      <td scope="row">
                        Franchise Name
                      </td>
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
                        5
                      </th>
                      <td scope="row">Project Name</td>
                      <td scope="row">Sale</td>
                      <td scope="row">Residential</td>
                      <td scope="row">Kondapur, Hyderabad</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-danger" />
                          <span className="status">Rejected</span>
                        </Badge>
                      </td>
                      <td scope="row">12-Dec-2023 11:45:20</td>
                      <td scope="row">
                        Franchise Name
                      </td>
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
                        6
                      </th>
                      <td scope="row">Project Name</td>
                      <td scope="row">Sale</td>
                      <td scope="row">Residential</td>
                      <td scope="row">Kondapur, Hyderabad</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-danger" />
                          <span className="status">Rejected</span>
                        </Badge>
                      </td>
                      <td scope="row">12-Dec-2023 11:45:20</td>
                      <td scope="row">
                        Franchise Name
                      </td>
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
              </div>
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
    </>
  );
}

export default Sortable;
