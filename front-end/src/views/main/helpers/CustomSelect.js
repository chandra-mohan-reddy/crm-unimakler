import React from 'react';
import Select2 from "react-select2-wrapper";

const CustomSelect = ({ value, onChange, className, options, placeholder, hasError }) => {
    const selectStyle = {
        borderColor: hasError ? 'red' : '', // Set border color to red if there's an error
    };
    return (
        <div className={`select2-wrapper ${hasError ? 'has-error' : ''}`}>
            <Select2
                value={value}
                onChange={onChange}
                className={className}
                options={{
                    placeholder: placeholder,
                }}
                data={options}
                style={selectStyle}
            />
            {hasError && (
                <div className="invalid-feedback">
                    This field is required.
                </div>
            )}
        </div>
    );
};

export default CustomSelect;
