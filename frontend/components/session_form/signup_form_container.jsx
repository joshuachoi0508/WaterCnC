import { connect } from 'react-redux';
import React from 'react';
import { signup, removeErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign up',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
      <div className="other-form-div">
        <p className="form-message">Already have an WaterCnC account?&nbsp;</p>
        <p className="other-form-button" 
          onClick={
            () => {
              dispatch(openModal('login'));
              dispatch(removeErrors());
            }
        }
        >
          Log in
        </p>
      </div>
    ),
    closeModal: () => dispatch(closeModal()),
    removeErrors: () => dispatch(removeErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);