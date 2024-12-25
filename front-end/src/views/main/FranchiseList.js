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
} from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";

import LoaderHorizontal from "./helpers/LoaderHorizontalCenter";
import userServices from "../../utils/api/services/user.services";

function Sortable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sno, setSno] = useState(1);

  const firstListRef = React.useRef(null);
  React.useEffect(() => {
    const getPermissionsList = async () => {
      console.log("API Call");
      try {
        // Perform API call for authentication
        const response = await userServices.getFranchise();

        // Assuming the API returns a token
        console.log("Response", response.data.data);
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        // Handle login error
        console.error('Invalid api call. Please try again.', error);
      }
    };

    getPermissionsList();
  }, []);
  return (
    <>
      <SimpleHeader name="Franchise List" parentName="Franchise" />
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
                        <option>Select Territory</option>
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
                        Franchise Name
                      </th>
                      <th className="sort" data-sort="mobile" scope="col">
                        Phone Number
                      </th>
                      <th className="sort" data-sort="project" scope="col">
                        Contact Person
                      </th>
                      <th className="sort" data-sort="status" scope="col">
                        Territory
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
                    {loading ? (
                      <tr><td colSpan={7}><LoaderHorizontal /></td></tr>
                    ) : (
                      data.map((item, index) => {
                        return (
                          <tr>
                            <th scope="row" className="sno">
                              {sno + index}
                            </th>
                            <td scope="row" className="state">{item.franchise_name}</td>
                            <td scope="row" className="state">{item.franchise_primary_phoneno}</td>
                            <td scope="row" className="state">{item.franchise_contact_person}</td>
                            <td scope="row" className="state">{item.franchise_territory}</td>
                            <td>
                              <Badge color="" className="badge-dot mr-4">
                                {item.status == "A" ? (
                                  <i className="bg-success" />
                                ) : (
                                  <i className="bg-danger" />
                                )}
                                <span className="status">{item.status == "A" ? "Active" : "In-Active"}</span>
                              </Badge>
                            </td>
                            <td scope="row" className="country">{item.created_date}</td>
                            <td scope="row" className="country">{item.created_by}</td>
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
