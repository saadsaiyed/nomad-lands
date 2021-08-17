import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
    renderContent(){
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a className="black-text" href="/auth/google">Log in with Google</a></li>
            default:
                return <li><a className="black-text" href="/api/user/logout">Log Out</a></li>
        }
    }
    render() {
        return (
            <nav style={{marginBottom: '50px'}}>
                <div className="nav-wrapper yellow darken-1">
                    <Link to={this.props.auth ? '/Dashboard': '/'} className="left brand-logo black-text">
                        Logo
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({auth}) {
    return {auth};
}
export default connect(mapStateToProps)(Header);