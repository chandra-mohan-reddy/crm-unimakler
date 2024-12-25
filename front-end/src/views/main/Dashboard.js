import React from "react";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  ListGroupItem,
  ListGroup,
  Media,
  Progress,
  Table,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import AlternativeHeader from "components/Headers/AlternativeHeader.js";

import {
  chartOptions,
  parseOptions,
  chartExample2,
  chartExample3,
} from "variables/charts.js";

let mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920,
};

function Alternative() {
  React.useEffect(() => {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }, []);
  return (
    <>
      <AlternativeHeader />
      <Container className="mt--6" fluid>
        <Row>
          <Col md="6" xl="3">
            <Card className="bg-gradient-primary border-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0 text-white"
                    >
                      Projects
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0 text-white">
                      150
                    </span>
                    <Progress
                      className="progress-xs mt-3 mb-0"
                      max="150"
                      value="100"
                      color="success"
                    />
                  </div>
                  <Col className="col-auto">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        size="sm"
                        color="neutral"
                        className="mr-0"
                      >
                        <i className="fas fa-ellipsis-h" />
                      </DropdownToggle>
                      <DropdownMenu right>
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
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-sm">
                  <a
                    className="text-nowrap text-white font-weight-600"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    See details
                  </a>
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md="6" xl="3">
            <Card className="bg-gradient-info border-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0 text-white"
                    >
                      Builders
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0 text-white">
                      75
                    </span>
                    <Progress
                      className="progress-xs mt-3 mb-0"
                      max="75"
                      value="50"
                      color="success"
                    />
                  </div>
                  <Col className="col-auto">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        size="sm"
                        color="neutral"
                        className="mr-0"
                      >
                        <i className="fas fa-ellipsis-h" />
                      </DropdownToggle>
                      <DropdownMenu right>
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
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-sm">
                  <a
                    className="text-nowrap text-white font-weight-600"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    See details
                  </a>
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md="6" xl="3">
            <Card className="bg-gradient-danger border-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0 text-white"
                    >
                      Super Franchise
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0 text-white">
                      20
                    </span>
                    <Progress
                      className="progress-xs mt-3 mb-0"
                      max="20"
                      value="10"
                      color="success"
                    />
                  </div>
                  <Col className="col-auto">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        size="sm"
                        color="neutral"
                        className="mr-0"
                      >
                        <i className="fas fa-ellipsis-h" />
                      </DropdownToggle>
                      <DropdownMenu right>
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
                          Mini Franchise
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Something else here
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-sm">
                  <a
                    className="text-nowrap text-white font-weight-600"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    See details
                  </a>
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md="6" xl="3">
            <Card className="bg-gradient-default border-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0 text-white"
                    >
                      Users
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0 text-white">
                      60
                    </span>
                    <Progress
                      className="progress-xs mt-3 mb-0"
                      max="60"
                      value="25"
                      color="success"
                    />
                  </div>
                  <Col className="col-auto">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        size="sm"
                        color="neutral"
                        className="mr-0"
                      >
                        <i className="fas fa-ellipsis-h" />
                      </DropdownToggle>
                      <DropdownMenu right>
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
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-sm">
                  <a
                    className="text-nowrap text-white font-weight-600"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    See details
                  </a>
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="6" xl="3">
            <Card className="bg-gradient-primary border-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0 text-white"
                    >
                      Branches
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0 text-white">
                      150
                    </span>
                    <Progress
                      className="progress-xs mt-3 mb-0"
                      max="150"
                      value="100"
                      color="success"
                    />
                  </div>
                  <Col className="col-auto">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        size="sm"
                        color="neutral"
                        className="mr-0"
                      >
                        <i className="fas fa-ellipsis-h" />
                      </DropdownToggle>
                      <DropdownMenu right>
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
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-sm">
                  <a
                    className="text-nowrap text-white font-weight-600"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    See details
                  </a>
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md="6" xl="3">
            <Card className="bg-gradient-info border-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0 text-white"
                    >
                      Mini Franchise
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0 text-white">
                      75
                    </span>
                    <Progress
                      className="progress-xs mt-3 mb-0"
                      max="75"
                      value="50"
                      color="success"
                    />
                  </div>
                  <Col className="col-auto">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        size="sm"
                        color="neutral"
                        className="mr-0"
                      >
                        <i className="fas fa-ellipsis-h" />
                      </DropdownToggle>
                      <DropdownMenu right>
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
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-sm">
                  <a
                    className="text-nowrap text-white font-weight-600"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    See details
                  </a>
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md="6" xl="3">
            <Card className="bg-gradient-danger border-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0 text-white"
                    >
                      Channel Partners
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0 text-white">
                      20
                    </span>
                    <Progress
                      className="progress-xs mt-3 mb-0"
                      max="20"
                      value="10"
                      color="success"
                    />
                  </div>
                  <Col className="col-auto">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        size="sm"
                        color="neutral"
                        className="mr-0"
                      >
                        <i className="fas fa-ellipsis-h" />
                      </DropdownToggle>
                      <DropdownMenu right>
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
                          Mini Franchise
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Something else here
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-sm">
                  <a
                    className="text-nowrap text-white font-weight-600"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    See details
                  </a>
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md="6" xl="3">
            <Card className="bg-gradient-default border-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0 text-white"
                    >
                      Properties
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0 text-white">
                      60
                    </span>
                    <Progress
                      className="progress-xs mt-3 mb-0"
                      max="60"
                      value="25"
                      color="success"
                    />
                  </div>
                  <Col className="col-auto">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        size="sm"
                        color="neutral"
                        className="mr-0"
                      >
                        <i className="fas fa-ellipsis-h" />
                      </DropdownToggle>
                      <DropdownMenu right>
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
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-sm">
                  <a
                    className="text-nowrap text-white font-weight-600"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    See details
                  </a>
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <div className="card-deck flex-column flex-xl-row">
          <Card>
            <CardHeader>
              <Row className="align-items-center">
                <Col xs="8">
                  <h6 className="surtitle">Source Wise Leads</h6>

                  <h5 className="h3 mb-0">Leads track</h5>
                </Col>
                <Col className="text-right" xs="4">
                  <Button
                    className="btn-neutral"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Action
                  </Button>
                </Col>
              </Row>
            </CardHeader>

            <CardBody>
              <ListGroup className="list my--3" flush>
                <ListGroupItem className="px-0">
                  <Row className="align-items-center">
                    <Col className="col-auto">
                      <a
                        className="avatar rounded-circle"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <img
                          alt="..."
                          src={require("assets/img/theme/bootstrap.jpg")}
                        />
                      </a>
                    </Col>
                    <div className="col">
                      <h5>Argon Design System (100/1000)</h5>
                      <Progress
                        className="progress-xs mb-0"
                        max="1000"
                        value="100"
                        color="warning"
                      />
                    </div>
                  </Row>
                </ListGroupItem>
                <ListGroupItem className="px-0">
                  <Row className="align-items-center">
                    <Col className="col-auto">
                      <a
                        className="avatar rounded-circle"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <img
                          alt="..."
                          src={require("assets/img/theme/angular.jpg")}
                        />
                      </a>
                    </Col>
                    <div className="col">
                      <h5>Angular Now UI Kit PRO</h5>
                      <Progress
                        className="progress-xs mb-0"
                        max="100"
                        value="100"
                        color="success"
                      />
                    </div>
                  </Row>
                </ListGroupItem>
                <ListGroupItem className="px-0">
                  <Row className="align-items-center">
                    <Col className="col-auto">
                      <a
                        className="avatar rounded-circle"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <img
                          alt="..."
                          src={require("assets/img/theme/sketch.jpg")}
                        />
                      </a>
                    </Col>
                    <div className="col">
                      <h5>Black Dashboard</h5>
                      <Progress
                        className="progress-xs mb-0"
                        max="100"
                        value="72"
                        color="danger"
                      />
                    </div>
                  </Row>
                </ListGroupItem>
                <ListGroupItem className="px-0">
                  <Row className="align-items-center">
                    <Col className="col-auto">
                      <a
                        className="avatar rounded-circle"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <img
                          alt="..."
                          src={require("assets/img/theme/react.jpg")}
                        />
                      </a>
                    </Col>
                    <div className="col">
                      <h5>React Material Dashboard</h5>
                      <Progress
                        className="progress-xs mb-0"
                        max="100"
                        value="90"
                        color="info"
                      />
                    </div>
                  </Row>
                </ListGroupItem>
                <ListGroupItem className="px-0">
                  <Row className="align-items-center">
                    <Col className="col-auto">
                      <a
                        className="avatar rounded-circle"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <img
                          alt="..."
                          src={require("assets/img/theme/vue.jpg")}
                        />
                      </a>
                    </Col>
                    <div className="col">
                      <h5>Vue Paper UI Kit PRO</h5>
                      <Progress
                        className="progress-xs mb-0"
                        max="100"
                        value="100"
                        color="success"
                      />
                    </div>
                  </Row>
                </ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </div>
        <Row>
          <Col xl="12">
            <Card>
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Top Super Franchise Performance</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th className="sort" data-sort="name" scope="col">
                      Project
                    </th>
                    <th className="sort" data-sort="budget" scope="col">
                      Revenue
                    </th>
                    <th className="sort" data-sort="status" scope="col">
                      Deals Closed
                    </th>
                    <th scope="col">Top Performers</th>
                    <th className="sort" data-sort="completion" scope="col">
                      Conversions
                    </th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody className="list">
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/bootstrap.jpg")}
                          />
                        </a>
                        <Media>
                          <span className="name mb-0 text-sm">
                            Argon Design System
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td className="budget">$2500 USD</td>
                    <td>
                      <Badge className="badge-dot mr-4" color="">
                        <i className="bg-warning" />
                        <span className="status">pending</span>
                      </Badge>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          className="avatar avatar-sm rounded-circle"
                          href="#pablo"
                          id="tooltip133563378"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/team-1.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip133563378"
                        >
                          Ryan Tompson
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm rounded-circle"
                          href="#pablo"
                          id="tooltip336932279"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/team-2.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip336932279"
                        >
                          Romina Hadid
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm rounded-circle"
                          href="#pablo"
                          id="tooltip619079522"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/team-3.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip619079522"
                        >
                          Alexander Smith
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm rounded-circle"
                          href="#pablo"
                          id="tooltip432104658"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/team-4.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip432104658"
                        >
                          Jessica Doe
                        </UncontrolledTooltip>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="completion mr-2">60%</span>
                        <div>
                          <Progress max="100" value="60" color="warning" />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          color=""
                          size="sm"
                          className="btn-icon-only text-light"
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            View Franchise Details
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            View Franchise Leads
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            View Sold Leads
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/angular.jpg")}
                          />
                        </a>
                        <Media>
                          <span className="name mb-0 text-sm">
                            Angular Now UI Kit PRO
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td className="budget">$1800 USD</td>
                    <td>
                      <Badge className="badge-dot mr-4" color="">
                        <i className="bg-success" />
                        <span className="status">completed</span>
                      </Badge>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          className="avatar avatar-sm rounded-circle"
                          href="#pablo"
                          id="tooltip634319950"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/team-1.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip634319950"
                        >
                          Ryan Tompson
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm rounded-circle"
                          href="#pablo"
                          id="tooltip493477456"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/team-2.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip493477456"
                        >
                          Romina Hadid
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm rounded-circle"
                          href="#pablo"
                          id="tooltip556499717"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/team-3.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip556499717"
                        >
                          Alexander Smith
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm rounded-circle"
                          href="#pablo"
                          id="tooltip106307927"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/team-4.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip106307927"
                        >
                          Jessica Doe
                        </UncontrolledTooltip>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="completion mr-2">100%</span>
                        <div>
                          <Progress max="100" value="100" color="success" />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          color=""
                          size="sm"
                          className="btn-icon-only text-light"
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
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/sketch.jpg")}
                          />
                        </a>
                        <Media>
                          <span className="name mb-0 text-sm">
                            Black Dashboard
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td className="budget">$3150 USD</td>
                    <td>
                      <Badge className="badge-dot mr-4" color="">
                        <i className="bg-danger" />
                        <span className="status">delayed</span>
                      </Badge>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          className="avatar avatar-sm rounded-circle"
                          href="#pablo"
                          id="tooltip389668727"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/team-1.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip389668727"
                        >
                          Ryan Tompson
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm rounded-circle"
                          href="#pablo"
                          id="tooltip477178747"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/team-2.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip477178747"
                        >
                          Romina Hadid
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm rounded-circle"
                          href="#pablo"
                          id="tooltip927225283"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/team-3.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip927225283"
                        >
                          Alexander Smith
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm rounded-circle"
                          href="#pablo"
                          id="tooltip394856270"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/team-4.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip394856270"
                        >
                          Jessica Doe
                        </UncontrolledTooltip>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="completion mr-2">72%</span>
                        <div>
                          <Progress max="100" value="72" color="danger" />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          color=""
                          size="sm"
                          className="btn-icon-only text-light"
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
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/react.jpg")}
                          />
                        </a>
                        <Media>
                          <span className="name mb-0 text-sm">
                            React Material Dashboard
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td className="budget">$4400 USD</td>
                    <td>
                      <Badge className="badge-dot mr-4" color="">
                        <i className="bg-info" />
                        <span className="status">on schedule</span>
                      </Badge>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          className="avatar avatar-sm rounded-circle"
                          href="#pablo"
                          id="tooltip51649841"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/team-1.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip delay={0} target="tooltip51649841">
                          Ryan Tompson
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm rounded-circle"
                          href="#pablo"
                          id="tooltip85562388"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/team-2.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip delay={0} target="tooltip85562388">
                          Romina Hadid
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm rounded-circle"
                          href="#pablo"
                          id="tooltip195204481"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/team-3.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip195204481"
                        >
                          Alexander Smith
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm rounded-circle"
                          href="#pablo"
                          id="tooltip967941406"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/team-4.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip967941406"
                        >
                          Jessica Doe
                        </UncontrolledTooltip>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="completion mr-2">90%</span>
                        <div>
                          <Progress max="100" value="90" color="info" />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          color=""
                          size="sm"
                          className="btn-icon-only text-light"
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
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/vue.jpg")}
                          />
                        </a>
                        <Media>
                          <span className="name mb-0 text-sm">
                            Vue Paper UI Kit PRO
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td className="budget">$2200 USD</td>
                    <td>
                      <Badge className="badge-dot mr-4" color="">
                        <i className="bg-success" />
                        <span className="status">completed</span>
                      </Badge>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          className="avatar avatar-sm rounded-circle"
                          href="#pablo"
                          id="tooltip177298166"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/team-1.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip177298166"
                        >
                          Ryan Tompson
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm rounded-circle"
                          href="#pablo"
                          id="tooltip290379011"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/team-2.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip290379011"
                        >
                          Romina Hadid
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm rounded-circle"
                          href="#pablo"
                          id="tooltip2287293"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/team-3.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip delay={0} target="tooltip2287293">
                          Alexander Smith
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm rounded-circle"
                          href="#pablo"
                          id="tooltip539852250"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/team-4.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip539852250"
                        >
                          Jessica Doe
                        </UncontrolledTooltip>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="completion mr-2">100%</span>
                        <div>
                          <Progress max="100" value="100" color="success" />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          color=""
                          size="sm"
                          className="btn-icon-only text-light"
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
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/bootstrap.jpg")}
                          />
                        </a>
                        <Media>
                          <span className="name mb-0 text-sm">
                            Argon Design System
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td className="budget">$2500 USD</td>
                    <td>
                      <Badge className="badge-dot mr-4" color="">
                        <i className="bg-warning" />
                        <span className="status">pending</span>
                      </Badge>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          className="avatar avatar-sm rounded-circle"
                          href="#pablo"
                          id="tooltip758997307"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/team-1.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip758997307"
                        >
                          Ryan Tompson
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm rounded-circle"
                          href="#pablo"
                          id="tooltip597292977"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/team-2.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip597292977"
                        >
                          Romina Hadid
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm rounded-circle"
                          href="#pablo"
                          id="tooltip443183509"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/team-3.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip443183509"
                        >
                          Alexander Smith
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm rounded-circle"
                          href="#pablo"
                          id="tooltip806450131"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/team-4.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip806450131"
                        >
                          Jessica Doe
                        </UncontrolledTooltip>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="completion mr-2">60%</span>
                        <div>
                          <Progress max="100" value="60" color="warning" />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          color=""
                          size="sm"
                          className="btn-icon-only text-light"
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
            </Card>
          </Col>
        </Row>
        <div className="card-deck flex-column flex-xl-row">
          <Card>
            <CardHeader>
              <h5 className="h3 mb-0">Top Employees Performance</h5>
            </CardHeader>
            <CardBody>
              <ListGroup className="list my--3" flush>
                <ListGroupItem className="px-0">
                  <Row className="align-items-center">
                    <Col className="col-auto">
                      <a
                        className="avatar rounded-circle"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <img
                          alt="..."
                          src={require("assets/img/theme/team-1.jpg")}
                        />
                      </a>
                    </Col>
                    <div className="col ml--2">
                      <h4 className="mb-0">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          John Michael
                        </a>
                      </h4>
                      <span className="text-success mr-1">●</span>
                      <small>Online</small>
                    </div>
                    <Col className="col-auto">
                      <Button color="primary" size="sm" type="button">
                        View
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem className="px-0">
                  <Row className="align-items-center">
                    <Col className="col-auto">
                      <a
                        className="avatar rounded-circle"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <img
                          alt="..."
                          src={require("assets/img/theme/team-2.jpg")}
                        />
                      </a>
                    </Col>
                    <div className="col ml--2">
                      <h4 className="mb-0">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Alex Smith
                        </a>
                      </h4>
                      <span className="text-warning mr-1">●</span>
                      <small>In a meeting</small>
                    </div>
                    <Col className="col-auto">
                      <Button color="primary" size="sm" type="button">
                        Add
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem className="px-0">
                  <Row className="align-items-center">
                    <Col className="col-auto">
                      <a
                        className="avatar rounded-circle"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <img
                          alt="..."
                          src={require("assets/img/theme/team-3.jpg")}
                        />
                      </a>
                    </Col>
                    <div className="col ml--2">
                      <h4 className="mb-0">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Samantha Ivy
                        </a>
                      </h4>
                      <span className="text-danger mr-1">●</span>
                      <small>Offline</small>
                    </div>
                    <Col className="col-auto">
                      <Button color="primary" size="sm" type="button">
                        Add
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem className="px-0">
                  <Row className="align-items-center">
                    <Col className="col-auto">
                      <a
                        className="avatar rounded-circle"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <img
                          alt="..."
                          src={require("assets/img/theme/team-4.jpg")}
                        />
                      </a>
                    </Col>
                    <div className="col ml--2">
                      <h4 className="mb-0">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          John Michael
                        </a>
                      </h4>
                      <span className="text-success mr-1">●</span>
                      <small>Online</small>
                    </div>
                    <Col className="col-auto">
                      <Button color="primary" size="sm" type="button">
                        Add
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h5 className="h3 mb-0">Pending Tasks</h5>
            </CardHeader>
            <CardBody>
              <ListGroup className="list my--3" flush>
                <ListGroupItem className="px-0">
                  <Row className="align-items-center">
                    <div className="col ml--2">
                      <h4 className="mb-0">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Internal Lead Transfers
                        </a>
                      </h4>
                      <span className="text-success mr-1">●</span>
                      <small>10</small>
                    </div>
                    <Col className="col-auto">
                      <Button color="primary" size="sm" type="button">
                        View
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem className="px-0">
                  <Row className="align-items-center">
                    <div className="col ml--2">
                      <h4 className="mb-0">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          External Lead Transfers
                        </a>
                      </h4>
                      <span className="text-warning mr-1">●</span>
                      <small>10</small>
                    </div>
                    <Col className="col-auto">
                      <Button color="primary" size="sm" type="button">
                        View
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem className="px-0">
                  <Row className="align-items-center">
                    <div className="col ml--2">
                      <h4 className="mb-0">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Projects
                        </a>
                      </h4>
                      <span className="text-danger mr-1">●</span>
                      <small>5</small>
                    </div>
                    <Col className="col-auto">
                      <Button color="primary" size="sm" type="button">
                        View
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
          <Card>
            {/* <CardHeader>
              <h5 className="h3 mb-0">Top Performing Projects</h5>
            </CardHeader> */}
            <CardHeader className="border-0">
              <Row>
                <div className="col">
                  <h3 className="mb-0">Top Performing Projects</h3>
                </div>
              </Row>
            </CardHeader>
            <CardHeader className="my--3">
              <Row className="align-items-center">
                <div className="col">
                  <Button
                    color="primary"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Sales
                  </Button>
                  <Button
                    color="primary"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Revenue
                  </Button>
                </div>
              </Row>
            </CardHeader>
            <CardBody>
              <ListGroup className="list my--3" flush>
                <ListGroupItem className="px-0">
                  <Row className="align-items-center">
                    <div className="col ml--2">
                      <h4 className="mb-0">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Project One
                        </a>
                      </h4>
                      <span className="text-success mr-1">●</span>
                      <small>10</small>
                    </div>
                    <Col className="col-auto">
                      <Button color="primary" size="sm" type="button">
                        View
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem className="px-0">
                  <Row className="align-items-center">
                    <div className="col ml--2">
                      <h4 className="mb-0">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Project Two
                        </a>
                      </h4>
                      <span className="text-warning mr-1">●</span>
                      <small>10</small>
                    </div>
                    <Col className="col-auto">
                      <Button color="primary" size="sm" type="button">
                        View
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem className="px-0">
                  <Row className="align-items-center">
                    <div className="col ml--2">
                      <h4 className="mb-0">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Project Three
                        </a>
                      </h4>
                      <span className="text-danger mr-1">●</span>
                      <small>5</small>
                    </div>
                    <Col className="col-auto">
                      <Button color="primary" size="sm" type="button">
                        View
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem className="px-0">
                  <Row className="align-items-center">
                    <div className="col ml--2">
                      <h4 className="mb-0">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Project Four
                        </a>
                      </h4>
                      <span className="text-danger mr-1">●</span>
                      <small>5</small>
                    </div>
                    <Col className="col-auto">
                      <Button color="primary" size="sm" type="button">
                        View
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem className="px-0">
                  <Row className="align-items-center">
                    <div className="col ml--2">
                      <h4 className="mb-0">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Project Five
                        </a>
                      </h4>
                      <span className="text-danger mr-1">●</span>
                      <small>5</small>
                    </div>
                    <Col className="col-auto">
                      <Button color="primary" size="sm" type="button">
                        View
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </div>
      </Container>
    </>
  );
}

export default Alternative;
