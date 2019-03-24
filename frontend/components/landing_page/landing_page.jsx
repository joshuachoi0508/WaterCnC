import React from 'react';
import { isInclusivelyAfterDay, DayPickerRangeController } from 'react-dates';

class LandingPage extends React.Component {
render(){
    return(
      <div id="landing">
        <div className="nav-bar">
          <div className="nav-bar-left">
            <img className="nav-bar-logo" src={window.images.navbar_logo} />
          </div>
          <div className="nav-bar-right">
            <p className="nav-right-item" onClick={() => this.props.openModal('login')}>
              login
            </p>
            <p className="nav-right-item" onClick={() => this.props.openModal('signup')}>
              Signup
            </p>
          </div>
        </div>
        <div id="search">
          <div className="content">
            <span className="lets-go">Let's Go</span>
            <div id="search-bar">
              <div className='search-input'>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;