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

const ProjectDetails = () => {
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
                Possession
            </CardTitle>
            <Row>
                <Col md="4">
                    <FormGroup className={validationErrors['statusInput'] ? 'has-danger' : ''}>
                        <label className="form-control-label" htmlFor="statusInput">
                            Possession Status <RedAsterisk />
                        </label>
                        <CustomSelect
                            value={formData.statusInput}
                            onChange={(e) => handleInputChange('statusInput', e.target.value)}
                            className={`form-control ${validationErrors['statusInput'] ? 'is-invalid' : ''}`}
                            options={[
                                { id: "1", text: "Alerts" },
                                { id: "2", text: "Badges" },
                                { id: "3", text: "Buttons" },
                                { id: "4", text: "Cards" },
                                { id: "5", text: "Forms" },
                                { id: "6", text: "Modals" },
                            ]}
                            placeholder="Select"
                            hasError={validationErrors['statusInput']}
                        />
                    </FormGroup>
                </Col>
                <Col md="2">
                    <FormGroup className={validationErrors['statusInput'] ? 'has-danger' : ''}>
                        <label className="form-control-label" htmlFor="statusInput">
                            Month <RedAsterisk />
                        </label>
                        <CustomSelect
                            value={formData.statusInput}
                            onChange={(e) => handleInputChange('statusInput', e.target.value)}
                            className={`form-control ${validationErrors['statusInput'] ? 'is-invalid' : ''}`}
                            options={[
                                { id: "1", text: "Alerts" },
                                { id: "2", text: "Badges" },
                                { id: "3", text: "Buttons" },
                                { id: "4", text: "Cards" },
                                { id: "5", text: "Forms" },
                                { id: "6", text: "Modals" },
                            ]}
                            placeholder="Select"
                            hasError={validationErrors['statusInput']}
                        />
                    </FormGroup>
                </Col>
                <Col md="2">
                    <FormGroup className={validationErrors['statusInput'] ? 'has-danger' : ''}>
                        <label className="form-control-label" htmlFor="statusInput">
                            Year <RedAsterisk />
                        </label>
                        <CustomSelect
                            value={formData.statusInput}
                            onChange={(e) => handleInputChange('statusInput', e.target.value)}
                            className={`form-control ${validationErrors['statusInput'] ? 'is-invalid' : ''}`}
                            options={[
                                { id: "1", text: "Alerts" },
                                { id: "2", text: "Badges" },
                                { id: "3", text: "Buttons" },
                                { id: "4", text: "Cards" },
                                { id: "5", text: "Forms" },
                                { id: "6", text: "Modals" },
                            ]}
                            placeholder="Select"
                            hasError={validationErrors['statusInput']}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <CardTitle className="text-uppercase text-muted">
                FLAT DETAILS
            </CardTitle>
            <Row>
                <Col md="4">
                    <FormGroup className={validationErrors['statusInput'] ? 'has-danger' : ''}>
                        <label className="form-control-label" htmlFor="statusInput">
                            Saleable Area Representation <RedAsterisk />
                        </label>
                        <CustomSelect
                            value={formData.statusInput}
                            onChange={(e) => handleInputChange('statusInput', e.target.value)}
                            className={`form-control ${validationErrors['statusInput'] ? 'is-invalid' : ''}`}
                            options={[
                                { id: "1", text: "Alerts" },
                                { id: "2", text: "Badges" },
                                { id: "3", text: "Buttons" },
                                { id: "4", text: "Cards" },
                                { id: "5", text: "Forms" },
                                { id: "6", text: "Modals" },
                            ]}
                            placeholder="Select"
                            hasError={validationErrors['statusInput']}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="2">
                    <FormGroup className={validationErrors['statusInput'] ? 'has-danger' : ''}>
                        <label className="form-control-label" htmlFor="statusInput">
                            Flat Size Rep. <RedAsterisk />
                        </label>
                        <CustomSelect
                            value={formData.statusInput}
                            onChange={(e) => handleInputChange('statusInput', e.target.value)}
                            className={`form-control ${validationErrors['statusInput'] ? 'is-invalid' : ''}`}
                            options={[
                                { id: "1", text: "Alerts" },
                                { id: "2", text: "Badges" },
                                { id: "3", text: "Buttons" },
                                { id: "4", text: "Cards" },
                                { id: "5", text: "Forms" },
                                { id: "6", text: "Modals" },
                            ]}
                            placeholder="Select"
                            hasError={validationErrors['statusInput']}
                        />
                    </FormGroup>
                </Col>
                <Col md="2">
                    <FormGroup className={validationErrors['statusInput'] ? 'has-danger' : ''}>
                        <label className="form-control-label" htmlFor="statusInput">
                            Flat Size Min. <RedAsterisk />
                        </label>
                        <CustomSelect
                            value={formData.statusInput}
                            onChange={(e) => handleInputChange('statusInput', e.target.value)}
                            className={`form-control ${validationErrors['statusInput'] ? 'is-invalid' : ''}`}
                            options={[
                                { id: "1", text: "Alerts" },
                                { id: "2", text: "Badges" },
                                { id: "3", text: "Buttons" },
                                { id: "4", text: "Cards" },
                                { id: "5", text: "Forms" },
                                { id: "6", text: "Modals" },
                            ]}
                            placeholder="Select"
                            hasError={validationErrors['statusInput']}
                        />
                    </FormGroup>
                </Col>
                <Col md="2">
                    <FormGroup className={validationErrors['statusInput'] ? 'has-danger' : ''}>
                        <label className="form-control-label" htmlFor="statusInput">
                            Flat Size Max. <RedAsterisk />
                        </label>
                        <CustomSelect
                            value={formData.statusInput}
                            onChange={(e) => handleInputChange('statusInput', e.target.value)}
                            className={`form-control ${validationErrors['statusInput'] ? 'is-invalid' : ''}`}
                            options={[
                                { id: "1", text: "Alerts" },
                                { id: "2", text: "Badges" },
                                { id: "3", text: "Buttons" },
                                { id: "4", text: "Cards" },
                                { id: "5", text: "Forms" },
                                { id: "6", text: "Modals" },
                            ]}
                            placeholder="Select"
                            hasError={validationErrors['statusInput']}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="2">
                    <FormGroup className={validationErrors['statusInput'] ? 'has-danger' : ''}>
                        <label className="form-control-label" htmlFor="statusInput">
                            BHK Min. <RedAsterisk />
                        </label>
                        <CustomSelect
                            value={formData.statusInput}
                            onChange={(e) => handleInputChange('statusInput', e.target.value)}
                            className={`form-control ${validationErrors['statusInput'] ? 'is-invalid' : ''}`}
                            options={[
                                { id: "1", text: "Alerts" },
                                { id: "2", text: "Badges" },
                                { id: "3", text: "Buttons" },
                                { id: "4", text: "Cards" },
                                { id: "5", text: "Forms" },
                                { id: "6", text: "Modals" },
                            ]}
                            placeholder="Select"
                            hasError={validationErrors['statusInput']}
                        />
                    </FormGroup>
                </Col>
                <Col md="2">
                    <FormGroup className={validationErrors['statusInput'] ? 'has-danger' : ''}>
                        <label className="form-control-label" htmlFor="statusInput">
                            BHK Max. <RedAsterisk />
                        </label>
                        <CustomSelect
                            value={formData.statusInput}
                            onChange={(e) => handleInputChange('statusInput', e.target.value)}
                            className={`form-control ${validationErrors['statusInput'] ? 'is-invalid' : ''}`}
                            options={[
                                { id: "1", text: "Alerts" },
                                { id: "2", text: "Badges" },
                                { id: "3", text: "Buttons" },
                                { id: "4", text: "Cards" },
                                { id: "5", text: "Forms" },
                                { id: "6", text: "Modals" },
                            ]}
                            placeholder="Select"
                            hasError={validationErrors['statusInput']}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="2">
                    <FormGroup>
                        <label className="form-control-label" htmlFor="state">
                            Balconies <RedAsterisk />
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
                        <label className="form-control-label" htmlFor="city">
                            Bath Rooms <RedAsterisk />
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
                            Car Parking <RedAsterisk />
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
                            Furnishing <RedAsterisk />
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
                PRICING DETAILS
            </CardTitle>
            <Row>
                <Col md="2">
                    <FormGroup>
                        <label className="form-control-label" htmlFor="gstNumber">
                            Price (per Sq.Ft) <RedAsterisk />
                        </label>
                        <Input
                            id="gstNumber"
                            placeholder="Price (per Sq.Ft)"
                            type="text"
                            value={formData.gstNumber}
                            onChange={(e) => handleInputChange('gstNumber', e.target.value)}
                        />
                    </FormGroup>
                </Col>
                <Col md="2">
                    <FormGroup>
                        <label className="form-control-label" htmlFor="gstNumber">
                            Price Range Min. <RedAsterisk />
                        </label>
                        <Input
                            id="gstNumber"
                            placeholder="Price Range Min."
                            type="text"
                            value={formData.gstNumber}
                            onChange={(e) => handleInputChange('gstNumber', e.target.value)}
                        />
                    </FormGroup>
                </Col>
                <Col md="2">
                    <FormGroup>
                        <label className="form-control-label" htmlFor="gstNumber">
                            Price Range Max. <RedAsterisk />
                        </label>
                        <Input
                            id="gstNumber"
                            placeholder="Price Range Max."
                            type="text"
                            value={formData.gstNumber}
                            onChange={(e) => handleInputChange('gstNumber', e.target.value)}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <CardTitle className="text-uppercase text-muted">
                PROJECT DETAILS
            </CardTitle>
            <Row>
                <Col md="2">
                    <FormGroup>
                        <label className="form-control-label" htmlFor="gstNumber">
                            Land Area <RedAsterisk />
                        </label>
                        <Input
                            id="gstNumber"
                            placeholder="Land Area"
                            type="text"
                            value={formData.gstNumber}
                            onChange={(e) => handleInputChange('gstNumber', e.target.value)}
                        />
                    </FormGroup>
                </Col>
                <Col md="2">
                    <FormGroup>
                        <label className="form-control-label" htmlFor="location">
                            Land Area Rep. <RedAsterisk />
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
                <Col md="2">
                    <FormGroup>
                        <label className="form-control-label" htmlFor="gstNumber">
                            Total No.of Blocks <RedAsterisk />
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
                            No.of Units/Block <RedAsterisk />
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
                            No.of Floors/Block <RedAsterisk />
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
                            Total No.of Units <RedAsterisk />
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
        </div>
    );
};

export default ProjectDetails;
