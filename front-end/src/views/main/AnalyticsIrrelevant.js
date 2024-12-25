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
      <SimpleHeader name="Source Irrelevant" parentName="Analytics" />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <Row className="align-items-center mt-2">
                  <Col xs="3">
                    <select className="form-control">
                      <option>Country</option>
                      <option>Select Country</option>
                      <option>Select Country</option>
                      <option>Select Country</option>
                    </select>
                  </Col>
                  <Col xs="3">
                    <select className="form-control">
                      <option>State</option>
                      <option>Select Country</option>
                      <option>Select Country</option>
                      <option>Select Country</option>
                    </select>
                  </Col>
                  <Col xs="3">
                    <select className="form-control">
                      <option>City</option>
                      <option>Select Country</option>
                      <option>Select Country</option>
                      <option>Select Country</option>
                    </select>
                  </Col>
                  <Col xs="3">
                    <select className="form-control">
                      <option>Franchise</option>
                      <option>Select Country</option>
                      <option>Select Country</option>
                      <option>Select Country</option>
                    </select>
                  </Col>

                </Row>
                <Row className="mt-2">
                  <Col xs="3">
                    <select className="form-control">
                      <option>Project</option>
                      <option>Select Country</option>
                      <option>Select Country</option>
                      <option>Select Country</option>
                    </select>
                  </Col>
                  <Col xs="6">
                    <div className="input-daterange datepicker align-items-center">
                      <label className="mr-3">
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
                  </Col>
                  <Col xs="3 text-right">
                    <Button className="col-md-auto btn btn-default ml-5">SEARCH</Button>
                  </Col>
                </Row>
              </CardHeader>
              <div className="table-responsive" ref={firstListRef}>

                <Table className="align-items-center table-flush">
                  <thead className="thead-light">
                    <tr>
                      <th className="sort" data-sort="sno" scope="col">
                        SNO
                      </th>
                      <th className="sort" data-sort="name" scope="col">
                        Source Name
                      </th>
                      <th className="sort" data-sort="mobile" scope="col">
                        Total Leads
                      </th>
                      <th className="sort" data-sort="project" scope="col">
                        Invalid Number
                      </th>
                      <th className="sort" data-sort="status" scope="col">
                        No Response
                      </th>
                      <th className="sort" data-sort="created_on" scope="col">
                        Change Project
                      </th>
                      <th className="sort" data-sort="created_by" scope="col">
                        Dropouts
                      </th>
                      <th scope="col">
                        Total Irrelevant
                      </th>
                      <th scope="col">
                        %
                      </th>
                    </tr>
                  </thead>
                  <tbody className="list">
                    <tr>
                      <th scope="row">1</th>
                      <td scope="row">Source Name</td>
                      <td scope="row">100</td>
                      <td scope="row">20</td>
                      <td scope="row">15</td>
                      <td scope="row">15</td>
                      <td scope="row">15</td>
                      <td scope="row">15</td>
                      <td scope="row">15</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td scope="row">Source Name</td>
                      <td scope="row">100</td>
                      <td scope="row">20</td>
                      <td scope="row">15</td>
                      <td scope="row">15</td>
                      <td scope="row">15</td>
                      <td scope="row">15</td>
                      <td scope="row">15</td>
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
