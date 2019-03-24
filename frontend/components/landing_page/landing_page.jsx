import React from 'react';
import { isInclusivelyAfterDay, DayPickerRangeController } from 'react-dates';
import NavBar from './nav_bar'

class LandingPage extends React.Component {
  render(){
      return(
        <div id="landing">
          <NavBar 
            openModal={this.props.openModal} 
            currentUserId={this.props.currentUserId}
            logout={this.props.logout}
          />
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