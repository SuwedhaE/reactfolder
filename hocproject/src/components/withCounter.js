import React from 'react';
import { connect } from 'react-redux';
import { storeFormData } from '../redux/action';

const withCounter = (WrappedComponent) => {
  const WithCounter = ({ storeFormData, ...otherProps }) => {
    const handleSubmit = (formData) => {
      storeFormData(formData);
    };

    return (
      <WrappedComponent
        onSubmit={handleSubmit}
        {...otherProps}
      />
    );
  };

  const mapDispatchToProps = {
    storeFormData,
  };

  return connect(null, mapDispatchToProps)(WithCounter);
};

export default withCounter;
