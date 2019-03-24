import { connect } from 'react-redux';
import LandingPage from './landing_page';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return ({
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        openModal: formType => dispatch(openModal(formType))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
