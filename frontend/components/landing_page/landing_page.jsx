import React from 'react';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import NavBar from './nav_bar';
import moment from 'moment';

const today = moment();

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      startDate: null,
      endDate: null,
      focusedInput: null,
      openDropdown: 'hidden',
      numGuests: 1,
      numAdults: 1,
      numChildren: 0,
      numInfants: 0,
      address: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange(address) {
    this.setState({ address });
  };

  handleSelect(address) {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };

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
              <div className="search-options">
                <div className="location-picker">
                  <div className="splash-location-text">
                    <span>LOCATION</span>
                  </div>
                  <PlacesAutocomplete
                    value={this.state.address}
                    onChange={this.handleChange}
                    onSelect={this.handleSelect}
                  >
                    {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                      <div>
                        <input
                          className="location-input"
                          {...getInputProps({
                            placeholder: 'Try "San Francisco"',
                            className: 'location-search-input',
                          })}
                        />
                        <div className="autocomplete-dropdown-container">
                          {suggestions.map(suggestion => {
                            const className = suggestion.active
                              ? 'suggestion-item--active'
                              : 'suggestion-item';
                            // inline style for demonstration purpose
                            const style = suggestion.active
                              ? { 
                                  backgroundColor: '#fafafa', 
                                  cursor: 'pointer' ,
                                  padding: '10px'
                                }
                              : { 
                                  backgroundColor: '#ffffff', 
                                  cursor: 'pointer',
                                  padding: '10px'
                                };
                            return (
                              <div
                                onClick={(e) => this.handleChange(e.target.innerText)} 
                              >
                                <div
                                  {...getSuggestionItemProps(suggestion, {
                                    className,
                                    style,
                                  })}
                                > 
                                  <span 
                                    onClick={(e) => this.handleChange(e.currentTarget.innerText)}
                                  >
                                    {suggestion.description}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </PlacesAutocomplete>
                </div>
                <div className="date-picker">
                  <div className="splash-dates-text">
                    <span>DATE</span>
                  </div>
                  <DateRangePicker
                    startDateId="splashStartDate"
                    endDateId="splashEndDate"
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate }); }}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={(focusedInput) => { this.setState({ focusedInput }); }}
                    hideKeyboardShortcutsPanel
                    small
                    showClearDates
                    reopenPickerOnClearDates
                    startDatePlaceholderText="Check in"
                    endDatePlaceholderText="Check out"
                  />
                </div>
              </div>
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