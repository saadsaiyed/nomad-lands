import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Dashboard extends Component {
    render() {
        return (
            <div className="blue-grey darken-3">
                <div class="row grey-text text-lighten-2">
                    <div class="col s12">This div is 12-columns wide on all screen sizes</div>
                    <div class="col s6">6-columns (one-half)</div>
                    <div class="col s6">6-columns (one-half)</div>
                </div>
            </div>
        )
    }
}

export default Dashboard;