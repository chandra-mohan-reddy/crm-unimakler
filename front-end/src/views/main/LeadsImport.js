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
      <SimpleHeader name="Upload Leads" parentName="Leads" />
      <Container className="mt--6" fluid>
        <Row>
          <Col lg="12">
            <div className="card-wrapper">
              <Card>
                <CardHeader>
                  <h3 className="mb-0">Upload Leads</h3>
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
                        <FormGroup>
                          <Button color="primary" type="button">Download Sample Data</Button>
                        </FormGroup>
                        <FormGroup>
                          <Button color="info" type="button">Download Sources Data</Button>
                        </FormGroup>
                        <FormGroup>
                          <Button color="default" type="button">Download Projects Data</Button>
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
