import React, { Component } from "react";
import { connect } from "react-redux";

import DashboardTable from "../components/DashboardTable.js";

class DashboardTableContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DashboardTable />
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps)(DashboardTableContainer);