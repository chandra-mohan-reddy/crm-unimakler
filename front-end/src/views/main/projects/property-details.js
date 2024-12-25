import React, { useState } from "react";

import {
    CardTitle,
    FormGroup,
    Input,
    Row,
    Col,
} from "reactstrap";

import RedAsterisk from "../helpers/RedAsterisk";
import CustomSelect from "../helpers/CustomSelect";

const PropertyDetails = () => {
    const [validationErrors, setValidationErrors] = useState({});
    const [formData, setFormData] = useState({
        franchiseInput: '',
        primaryPhone: '',
        statusInput: '',
        secondaryPhone: '',
        primaryEmail: '',
        secondaryEmail: '',
        ownerName: '',
        projectField2: '',
        projectField3: '',
    });

    const handleInputChange = (field, value) => {
        setFormData((prevData) => ({ ...prevData, [field]: value }));
    };

    return (
        <div>
            <CardTitle className="text-uppercase text-muted">
                Property Classification
            </CardTitle>
            <Row>
                <Col md="3">
                    <FormGroup className={validationErrors['franchiseInput'] ? 'has-danger' : ''}>
                        <label className="form-control-label" htmlFor="franchiseInput">
                            Type <RedAsterisk />
                        </label>
                        <Row>
                            <Col md="12">
                                <div className="custom-control custom-checkbox mb-3 custom-control-inline">
                                    <input
                                        className="custom-control-input"
                                        id="customCheck2"
                                        type="checkbox"
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="customCheck2"
                                    >
                                        Project
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox mb-3 custom-control-inline">
                                    <input
                                        className="custom-control-input"
                                        id="customCheck2"
                                        type="checkbox"
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="customCheck2"
                                    >
                                        Property
                                    </label>
                                </div>
                            </Col>
                        </Row>
                    </FormGroup>
                </Col>
                <Col md="3">
                    <FormGroup className={validationErrors['franchiseInput'] ? 'has-danger' : ''}>
                        <label className="form-control-label" htmlFor="franchiseInput">
                            Property For <RedAsterisk />
                        </label>
                        <Row>
                            <Col md="12">
                                <div className="custom-control custom-checkbox mb-3 custom-control-inline">
                                    <input
                                        className="custom-control-input"
                                        id="customCheck2"
                                        type="checkbox"
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="customCheck2"
                                    >
                                        Buy
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox mb-3 custom-control-inline">
                                    <input
                                        className="custom-control-input"
                                        id="customCheck2"
                                        type="checkbox"
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="customCheck2"
                                    >
                                        Rent
                                    </label>
                                </div>
                            </Col>
                        </Row>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup className={validationErrors['franchiseInput'] ? 'has-danger' : ''}>
                        <label className="form-control-label" htmlFor="franchiseInput">
                            Transaction Type <RedAsterisk />
                        </label>
                        <Row>
                            <Col md="12">
                                <div className="custom-control custom-checkbox mb-3 custom-control-inline">
                                    <input
                                        className="custom-control-input"
                                        id="customCheck2"
                                        type="checkbox"
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="customCheck2"
                                    >
                                        New Property
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox mb-3 custom-control-inline">
                                    <input
                                        className="custom-control-input"
                                        id="customCheck2"
                                        type="checkbox"
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="customCheck2"
                                    >
                                        Re-Sale
                                    </label>
                                </div>
                            </Col>
                        </Row>
                    </FormGroup>
                </Col>
                <Col md="2">
                    <FormGroup className={validationErrors['franchiseInput'] ? 'has-danger' : ''}>
                        <label className="form-control-label mt-0 pt-0" htmlFor="franchiseInput">
                            Luxury <RedAsterisk />
                        </label>
                        <Row>
                            <Col md="12">
                                <label className="custom-toggle">
                                    <input type="checkbox" />
                                    <span
                                        className="custom-toggle-slider rounded-circle"
                                        data-label-off="No"
                                        data-label-on="Yes"
                                    />
                                </label>
                            </Col>
                        </Row>
                    </FormGroup>
                </Col>
            </Row>
            <CardTitle className="text-uppercase text-muted">
                Property Details
            </CardTitle>
            <Row>
                <Col md="4">
                    <FormGroup>
                        <label className="form-control-label" htmlFor="state">
                            Property Type <RedAsterisk />
                        </label>
                        <CustomSelect
                            value={formData.ownerGender}
                            onChange={(e) => handleInputChange('ownerGender', e.target.value)}
                            className={`form-control ${validationErrors['ownerGender'] ? 'is-invalid' : ''}`}
                            options={[
                                { id: "1", text: "Alerts" },
                                { id: "2", text: "Badges" },
                                { id: "3", text: "Buttons" },
                                { id: "4", text: "Cards" },
                                { id: "5", text: "Forms" },
                                { id: "6", text: "Modals" },
                            ]}
                            placeholder="Select"
                            hasError={validationErrors['ownerGender']}
                        />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <label className="form-control-label" htmlFor="city">
                            Community Type <RedAsterisk />
                        </label>
                        <CustomSelect
                            value={formData.ownerGender}
                            onChange={(e) => handleInputChange('ownerGender', e.target.value)}
                            className={`form-control ${validationErrors['ownerGender'] ? 'is-invalid' : ''}`}
                            options={[
                                { id: "1", text: "Alerts" },
                                { id: "2", text: "Badges" },
                                { id: "3", text: "Buttons" },
                                { id: "4", text: "Cards" },
                                { id: "5", text: "Forms" },
                                { id: "6", text: "Modals" },
                            ]}
                            placeholder="Select"
                            hasError={validationErrors['ownerGender']}
                        />
                    </FormGroup>
                </Col>
                <Col md="2">
                    <FormGroup>
                        <label className="form-control-label" htmlFor="location">
                            Status <RedAsterisk />
                        </label>
                        <CustomSelect
                            value={formData.ownerGender}
                            onChange={(e) => handleInputChange('ownerGender', e.target.value)}
                            className={`form-control ${validationErrors['ownerGender'] ? 'is-invalid' : ''}`}
                            options={[
                                { id: "1", text: "Alerts" },
                                { id: "2", text: "Badges" },
                                { id: "3", text: "Buttons" },
                                { id: "4", text: "Cards" },
                                { id: "5", text: "Forms" },
                                { id: "6", text: "Modals" },
                            ]}
                            placeholder="Select"
                            hasError={validationErrors['ownerGender']}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <CardTitle className="text-uppercase text-muted">
                Location
            </CardTitle>
            <Row>
                <Col md="3">
                    <FormGroup>
                        <label className="form-control-label" htmlFor="state">
                            State <RedAsterisk />
                        </label>
                        <CustomSelect
                            value={formData.ownerGender}
                            onChange={(e) => handleInputChange('ownerGender', e.target.value)}
                            className={`form-control ${validationErrors['ownerGender'] ? 'is-invalid' : ''}`}
                            options={[
                                { id: "1", text: "Alerts" },
                                { id: "2", text: "Badges" },
                                { id: "3", text: "Buttons" },
                                { id: "4", text: "Cards" },
                                { id: "5", text: "Forms" },
                                { id: "6", text: "Modals" },
                            ]}
                            placeholder="Select"
                            hasError={validationErrors['ownerGender']}
                        />
                    </FormGroup>
                </Col>
                <Col md="3">
                    <FormGroup>
                        <label className="form-control-label" htmlFor="city">
                            City <RedAsterisk />
                        </label>
                        <CustomSelect
                            value={formData.ownerGender}
                            onChange={(e) => handleInputChange('ownerGender', e.target.value)}
                            className={`form-control ${validationErrors['ownerGender'] ? 'is-invalid' : ''}`}
                            options={[
                                { id: "1", text: "Alerts" },
                                { id: "2", text: "Badges" },
                                { id: "3", text: "Buttons" },
                                { id: "4", text: "Cards" },
                                { id: "5", text: "Forms" },
                                { id: "6", text: "Modals" },
                            ]}
                            placeholder="Select"
                            hasError={validationErrors['ownerGender']}
                        />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <label className="form-control-label" htmlFor="location">
                            Location <RedAsterisk />
                        </label>
                        <CustomSelect
                            value={formData.ownerGender}
                            onChange={(e) => handleInputChange('ownerGender', e.target.value)}
                            className={`form-control ${validationErrors['ownerGender'] ? 'is-invalid' : ''}`}
                            options={[
                                { id: "1", text: "Alerts" },
                                { id: "2", text: "Badges" },
                                { id: "3", text: "Buttons" },
                                { id: "4", text: "Cards" },
                                { id: "5", text: "Forms" },
                                { id: "6", text: "Modals" },
                            ]}
                            placeholder="Select"
                            hasError={validationErrors['ownerGender']}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="10">
                    <FormGroup>
                        <label className="form-control-label" htmlFor="address">
                            Address <RedAsterisk />
                        </label>
                        <Input
                            id="address"
                            placeholder="Write a large text here ..."
                            rows="3"
                            type="textarea"
                        />
                    </FormGroup>
                </Col>
            </Row>
            <CardTitle className="text-uppercase text-muted">
                Builder Details
            </CardTitle>
            <Row>
                <Col md="8">
                    <FormGroup>
                        <label className="form-control-label" htmlFor="location">
                            Builder <RedAsterisk />
                        </label>
                        <CustomSelect
                            value={formData.ownerGender}
                            onChange={(e) => handleInputChange('ownerGender', e.target.value)}
                            className={`form-control ${validationErrors['ownerGender'] ? 'is-invalid' : ''}`}
                            options={[
                                { id: "1", text: "Alerts" },
                                { id: "2", text: "Badges" },
                                { id: "3", text: "Buttons" },
                                { id: "4", text: "Cards" },
                                { id: "5", text: "Forms" },
                                { id: "6", text: "Modals" },
                            ]}
                            placeholder="Select"
                            hasError={validationErrors['ownerGender']}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="8">
                    <FormGroup>
                        <label className="form-control-label" htmlFor="address">
                            Project Name <RedAsterisk />
                        </label>
                        <Input
                            id="address"
                            placeholder="Project Name"
                            type="text"
                        />
                    </FormGroup>
                </Col>
            </Row>
        </div>
    );
};

export default PropertyDetails;
