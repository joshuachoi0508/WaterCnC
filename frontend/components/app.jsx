import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LandingPageContainer from './landing_page/landing_page_container';
import Modal from './modal/modal';

//testing
import { openModal } from '../actions/modal_actions';

const App = (props) => {
  return (
    <div className="boss-div">
      <div>
        <Modal />
        <button onClick={() => props.dispatch(openModal('signup'))}>
          Signup
        </button>
        <Route exact path='/' component={LandingPageContainer} />
      </div>
    </div>
  )
}

export default App;
