import React from 'react';

const NavBar = props => {
    if (props.currentUserId) {
        return (
            <div className="nav-bar">
                <div className="nav-bar-left">
                    <img className="nav-bar-logo" src={window.images.navbar_logo} />
                </div>
                <div className="nav-bar-right">
                    <p className="nav-right-item" onClick={() => props.logout()}>
                        log out
                    </p>
                </div>
            </div>
        )
    }
    
    return (
        <div className="nav-bar">
            <div className="nav-bar-left">
                <img className="nav-bar-logo" src={window.images.navbar_logo} />
            </div>
            <div className="nav-bar-right">
                <p className="nav-right-item" onClick={() => props.openModal('login')}>
                    log in
                </p>
                <p className="nav-right-item" onClick={() => props.openModal('signup')}>
                    Sign up
                </p>
            </div>
        </div>
    )
}

export default NavBar;