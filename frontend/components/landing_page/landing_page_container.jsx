import { connect } from 'react-redux';
import LandingPage from './landing_page';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
    return ({
        currentUserId: state.session.id
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        openModal: formType => dispatch(openModal(formType)),
        logout: () => dispatch(logout())
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
