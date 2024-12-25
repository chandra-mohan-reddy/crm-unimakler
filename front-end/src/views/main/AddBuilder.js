import React from "react";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";

function Elements() {
  return (
    <>
      <SimpleHeader name="Add Builder" parentName="Builders" />
      <Container className="mt--6" fluid>
        <Card className="mb-4">
          <CardHeader>
            <h3 className="mb-0">Add Builder</h3>
          </CardHeader>
          <CardBody>
            <Row>
              <Col md="6">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="nameInput"
                  >
                    Builder Name
                  </label>
                  <Input
                    id="nameInput"
                    placeholder="Builder name"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="locationInput"
                  >
                    Head Office Location
                  </label>
                  <Input
                    id="locationInput"
                    placeholder="Head office location"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md="6">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="mdNameInput"
                  >
                    Managing Director
                  </label>
                  <Input
                    id="mdNameInput"
                    placeholder="Managing director"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="mdPhoneNumberInput"
                  >
                    Managing Director Phone Number
                  </label>
                  <Input
                    id="mdPhoneNumberInput"
                    placeholder="1234567890"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md="6">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="cpManagerNameInput"
                  >
                    CP Manager
                  </label>
                  <Input
                    id="cpManagerNameInput"
                    placeholder="CP managing director"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="cpManagerPhoneNumberInput"
                  >
                    CP Manager Phone Number
                  </label>
                  <Input
                    id="cpManagerPhoneNumberInput"
                    placeholder="1234567890"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md="6">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="salesManagerNameInput"
                  >
                    Sales Manager
                  </label>
                  <Input
                    id="salesManagerNameInput"
                    placeholder="sales manager"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="salesManagerPhoneNumberInput"
                  >
                    Sales Manager Phone Number
                  </label>
                  <Input
                    id="salesManagerPhoneNumberInput"
                    placeholder="1234567890"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}

export default Elements;
