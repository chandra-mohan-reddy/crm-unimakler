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
} from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";

Dropzone.autoDiscover = false;

function Components() {
  const [yourName, setyourName] = React.useState(false);

  return (
    <>
      <SimpleHeader name="Update Documents" parentName="Documents" />
      <Container className="mt--6" fluid>
        <Row>
          <Col lg="12">
            <div className="card-wrapper">
              <Card>
                <CardHeader>
                  <h3 className="mb-0">Update Documents</h3>
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
                            Projects
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
                            File Type
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
                            Upload File
                          </label>
                          <div className="custom-file">
                            <input
                              className="custom-file-input"
                              id="customFileLang"
                              lang="en"
                              type="file"
                            />
                            <label
                              className="custom-file-label"
                              htmlFor="customFileLang"
                            >
                              Select file
                            </label>
                          </div>
                        </FormGroup>
                        <FormGroup className="text-end">
                          <Button className="form-control btn btn-success">Upload</Button>
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
