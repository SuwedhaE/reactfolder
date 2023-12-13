import React from 'react';
import { connect } from 'react-redux';
import { submitBasicInfo, submitAddressInfo, storeFormData } from '../redux/action';
 
const withCounter = (WrappedComponent, formType) => {
  const WithCounter = ({ storeFormData, ...otherprops}) => {
    // const { submitBasicInfo, submitAddressInfo } = props;

    const handleSubmit = (formData) => {
      storeFormData(formData);
    }
 
    return (
      
        <WrappedComponent
          onSubmit={handleSubmit}
          {...otherprops}
          // submitBasicInfo={submitBasicInfo}
          // submitAddressInfo={submitAddressInfo}
        />
    );
  };
 
  const mapDispatchToProps = {
    storeFormData
    // submitBasicInfo,
    // submitAddressInfo,
  };
 
  return connect(null, mapDispatchToProps)(WithCounter);
};
 
export default withCounter;