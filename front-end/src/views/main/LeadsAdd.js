import React from "react";
import Select2 from "react-select2-wrapper";
// javascript plugin that creates nice dropzones for files
import Dropzone from "dropzone";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Form,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
  FormGroup,
  Input
} from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";

Dropzone.autoDiscover = false;

function Components() {
  const [yourName, setyourName] = React.useState(false);

  return (
    <>
      <SimpleHeader name="Add Lead" parentName="Leads" />
      <Container className="mt--6" fluid>
        <Row>
          <Col lg="12">
            <div className="card-wrapper">
              <Card>
                <CardHeader>
                  <h3 className="mb-0">Add</h3>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col lg="6">
                      <Form>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="exampleFormControlSelect6"
                          >
                            Source Type
                          </label>
                          <Select2
                            className="form-control"
                            defaultValue="1"
                            options={{
                              placeholder: "Select",
                            }}
                            data={[
                              { id: "1", text: "Alerts" },
                              { id: "2", text: "Badges" },
                              { id: "3", text: "Buttons" },
                              { id: "4", text: "Cards" },
                              { id: "5", text: "Forms" },
                              { id: "6", text: "Modals" },
                            ]}
                          />
                        </FormGroup>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="exampleFormControlSelect6"
                          >
                            Sources
                          </label>
                          <Select2
                            className="form-control"
                            defaultValue="1"
                            options={{
                              placeholder: "Select",
                            }}
                            data={[
                              { id: "1", text: "Alerts" },
                              { id: "2", text: "Badges" },
                              { id: "3", text: "Buttons" },
                              { id: "4", text: "Cards" },
                              { id: "5", text: "Forms" },
                              { id: "6", text: "Modals" },
                            ]}
                          />
                        </FormGroup>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="exampleFormControlSelect6"
                          >
                            Customer Name
                          </label>
                          <Input placeholder="Default input" type="text" />
                        </FormGroup>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="exampleFormControlSelect6"
                          >
                            Mobile No
                          </label>
                          <Input placeholder="Default input" type="text" />
                        </FormGroup>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="exampleFormControlSelect6"
                          >
                            Email Address
                          </label>
                          <Input placeholder="Default input" type="text" />
                        </FormGroup>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="exampleFormControlSelect6"
                          >
                            Project
                          </label>
                          <Select2
                            className="form-control"
                            defaultValue="1"
                            options={{
                              placeholder: "Select",
                            }}
                            data={[
                              { id: "1", text: "Alerts" },
                              { id: "2", text: "Badges" },
                              { id: "3", text: "Buttons" },
                              { id: "4", text: "Cards" },
                              { id: "5", text: "Forms" },
                              { id: "6", text: "Modals" },
                            ]}
                          />
                        </FormGroup>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="exampleFormControlSelect6"
                          >
                            Comment
                          </label>
                          <Input
                            id="exampleFormControlTextarea1"
                            rows="3"
                            type="textarea"
                          />
                        </FormGroup>
                        <FormGroup className="text-end">
                          <Button className="form-control btn btn-success">SUBMIT</Button>
                        </FormGroup>
                      </Form>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Components;
