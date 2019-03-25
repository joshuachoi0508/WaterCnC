import { connect } from 'react-redux';
import React from 'react';
import { login, removeErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Log in',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    otherForm: (
      <div className="other-form-div">
        <p className="form-message">Don't have an account?&nbsp;</p>
        <p className="other-form-button" 
          onClick={
            () => {
              dispatch(openModal('signup'));
              dispatch(removeErrors());
            }
        }
        >
          Sign up
        </p>
      </div>
    ),
    closeModal: () => dispatch(closeModal()),
    removeErrors: () => dispatch(removeErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
