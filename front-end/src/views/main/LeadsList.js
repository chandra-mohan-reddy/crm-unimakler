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
  Col,
  Row,
  Button,
  FormGroup,
} from "reactstrap";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";

function Sortable() {
  const firstListRef = React.useRef(null);
  const secondListRef = React.useRef(null);
  const thirdListRef = React.useRef(null);
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
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
  const handleReactDatetimeChange = (who, date) => {
    if (
      startDate &&
      who === "endDate" &&
      new Date(startDate._d + "") > new Date(date._d + "")
    ) {
      setStartDate(date);
      setEndDate(date);
    } else if (
      endDate &&
      who === "startDate" &&
      new Date(endDate._d + "") < new Date(date._d + "")
    ) {
      setStartDate(date);
      setEndDate(date);
    } else {
      if (who === "startDate") {
        setStartDate(date);
      } else {
        setEndDate(date);
      }
    }
  };
  const getClassNameReactDatetimeDays = (date) => {
    if (startDate && endDate) {
    }
    if (startDate && endDate && startDate._d + "" !== endDate._d + "") {
      if (
        new Date(endDate._d + "") > new Date(date._d + "") &&
        new Date(startDate._d + "") < new Date(date._d + "")
      ) {
        return " middle-date";
      }
      if (endDate._d + "" === date._d + "") {
        return " end-date";
      }
      if (startDate._d + "" === date._d + "") {
        return " start-date";
      }
    }
    return "";
  };
  return (
    <>
      <SimpleHeader name="Leads List" parentName="Leads" />
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
                      <input className="form-control" placeholder="Customer Name" />
                    </label>
                    <label className="col-md-auto">
                      <input className="form-control" placeholder="Mobile" />
                    </label>
                    <label className="col-md-auto">
                      <select className="form-control">
                        <option>Select Project</option>
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
                  </Row>
                  <Row className="text-center">
                    <label className="col-md-auto ml-2">
                      <select className="form-control">
                        <option>Select Source</option>
                        <option>Select Country</option>
                        <option>Select Country</option>
                        <option>Select Country</option>
                      </select>
                    </label>
                    <div className="input-daterange datepicker align-items-center">
                      <label>
                        <ReactDatetime
                          inputProps={{
                            placeholder: "From Date",
                          }}
                          value={startDate}
                          timeFormat={false}
                          onChange={(e) =>
                            handleReactDatetimeChange("startDate", e)
                          }
                          renderDay={(props, currentDate, selectedDate) => {
                            let classes = props.className;
                            classes +=
                              getClassNameReactDatetimeDays(currentDate);
                            return (
                              <td {...props} className={classes}>
                                {currentDate.date()}
                              </td>
                            );
                          }}
                        />
                      </label>
                      <label>
                        <ReactDatetime
                          inputProps={{
                            placeholder: "To Date",
                          }}
                          value={endDate}
                          timeFormat={false}
                          onChange={(e) =>
                            handleReactDatetimeChange("endDate", e)
                          }
                          renderDay={(props, currentDate, selectedDate) => {
                            let classes = props.className;
                            classes +=
                              getClassNameReactDatetimeDays(currentDate);
                            return (
                              <td {...props} className={classes}>
                                {currentDate.date()}
                              </td>
                            );
                          }}
                        />
                      </label>
                    </div>
                    <label >
                      <Button className="col-md-auto btn btn-default ml-5">SEARCH</Button>
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
                        Customer Name
                      </th>
                      <th className="sort" data-sort="mobile" scope="col">
                        Mobile
                      </th>
                      <th className="sort" data-sort="project" scope="col">
                        Project
                      </th>
                      <th className="sort" data-sort="status" scope="col">
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
                    <tr>
                      <th scope="row">
                        1
                      </th>
                      <td scope="row">Customer Name</td>
                      <td scope="row">Mobile</td>
                      <td scope="row">Project Name is long name</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          <span className="status">Active</span>
                        </Badge>
                      </td>
                      <td scope="row">12-Dec-2023 11:45:20</td>
                      <td scope="row">
                        User Name
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
                      <td scope="row">Customer Name</td>
                      <td scope="row">Mobile</td>
                      <td scope="row">Project Name is long name</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          <span className="status">Active</span>
                        </Badge>
                      </td>
                      <td scope="row">12-Dec-2023 11:45:20</td>
                      <td scope="row">
                        User Name
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
                      <td scope="row">Customer Name</td>
                      <td scope="row">Mobile</td>
                      <td scope="row">Project Name is long name</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          <span className="status">Active</span>
                        </Badge>
                      </td>
                      <td scope="row">12-Dec-2023 11:45:20</td>
                      <td scope="row">
                        User Name
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
                      <td scope="row">Customer Name</td>
                      <td scope="row">Mobile</td>
                      <td scope="row">Project Name is long name</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          <span className="status">Active</span>
                        </Badge>
                      </td>
                      <td scope="row">12-Dec-2023 11:45:20</td>
                      <td scope="row">
                        User Name
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
                      <td scope="row">Customer Name</td>
                      <td scope="row">Mobile</td>
                      <td scope="row">Project Name is long name</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          <span className="status">Active</span>
                        </Badge>
                      </td>
                      <td scope="row">12-Dec-2023 11:45:20</td>
                      <td scope="row">
                        User Name
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
                      <td scope="row">Customer Name</td>
                      <td scope="row">Mobile</td>
                      <td scope="row">Project Name is long name</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          <span className="status">Active</span>
                        </Badge>
                      </td>
                      <td scope="row">12-Dec-2023 11:45:20</td>
                      <td scope="row">
                        User Name
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
                    <PaginationItem className="active">
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
