import React from 'react';
import { isInclusivelyAfterDay, DayPickerRangeController } from 'react-dates';

class LandingPage extends React.Component {
render(){
    return(
      <div id="landing">
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