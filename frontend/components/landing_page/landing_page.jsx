import React, {Component} from 'react';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import NavBar from './nav_bar';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      startDate: null,
      endDate: null,
      focusedInput: null,
      openDropdown: 'hidden',
      numGuests: 1,
      address: '',
      renderGuest: 'num-guest-hide'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.renderGuests = this.renderGuests.bind(this);
    this.disableGuests = this.disableGuests.bind(this);
  }

  componentDidMount(){
    document.addEventListener('click', (e) => this.disableGuests(e));
  }

  handleChange(address) {
    this.setState({ address });
  };

  handleSelect(address) {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  }

  renderGuestCount() {
    if (this.state.numGuests > 1) {
      return String(this.state.numGuests) + " guests";
    } else {
      return String(this.state.numGuests) + " guest";
    }
  }

  disableGuests(e) {
    debugger;
    if ((e.target.id === "search" || e.target.className === "lets-go") && this.state.renderGuest === 'num-guest-show') {
      this.setState({['renderGuest']: 'num-guest-hide'})
    }
  }

  renderGuests() {
    if (this.state.renderGuest === 'num-guest-show') {
      this.setState({['renderGuest']: 'num-guest-hide'})
    } else {
      this.setState({['renderGuest']: 'num-guest-show'})
    }
  }

  renderMinusButton() {
    if (this.state.numGuests === 1) {
      return (<button disabled={true} className="guest-count-button disabled">-</button>)
    } else {
      return (<button className="guest-count-button">-</button>)
    }
  }

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
                                className="autocomplete-dropdown-container"
                              >
                                <div
                                  {...getSuggestionItemProps(suggestion, {
                                    className,
                                    style,
                                  })}
                                > 
                                  <span className="search-result">
                                    <img className="locaiton-pointer" src={window.images.location_pointer}></img>
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
                <div className="guest-picker">
                  <div className="splash-guest-text">
                    <span>GUEST</span>
                  </div>
                  <div className="guest-botton-container">
                    <button
                      className="guest-button"
                      onClick={this.renderGuests}
                    >
                      {this.renderGuestCount()}
                    </button>
                  </div>
                  <div id={this.state.renderGuest}>
                    <p>Guests</p>
                    {this.renderMinusButton()}
                          {this.state.numGuests}
                    <button className="guest-count-button">+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
}

export default LandingPage;