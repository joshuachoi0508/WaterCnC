import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { removeErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';

function Modal({modal, closeModal, removeErrors}) {
  if (!modal) {
    return null;
  }

  let component;

  switch (modal.type) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" 
    onClick={
      () => {
        closeModal()
        removeErrors()
      }
    }
    >
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    removeErrors: () => dispatch(removeErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);