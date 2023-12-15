import React from 'react';
import { connect } from 'react-redux';
import { submitBasicInfo, submitAddressInfo } from '../redux/action';
 
const withCounter = (WrappedComponent) => {
  const WithCounter = (props) => {
    const { submitBasicInfo, submitAddressInfo } = props;
 
    return (
      <div>
        <WrappedComponent
          {...props}
          submitBasicInfo={submitBasicInfo}
          submitAddressInfo={submitAddressInfo}
        />
      </div>
    );
  };
 
  const mapDispatchToProps = {
    submitBasicInfo,
    submitAddressInfo,
  };
 
  return connect(null, mapDispatchToProps)(WithCounter);
};
 
export default withCounter;