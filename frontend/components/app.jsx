import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LandingPageContainer from './landing_page/landing_page_container';
import Modal from './modal/modal';

const App = (props) => {
  return (
    <div className="boss-div">
      <div>
        <Modal />
        <Route exact path='/' component={LandingPageContainer} />
      </div>
    </div>
  )
}

export default App;
