import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import concat from "lodash/concat";

import { getFollows } from "../actions/follows.js";

import DashboardTable from "../components/DashboardTable.js";

const TABLE_COLS = [
    {
        key: "name",
        label: "Nombre",
    },
    {
        key: "place",
        label: "Lugar de aplicación",
    },
    {
        key: "methodology",
        label: "Metodología",
    },
    {
        key: "start_date",
        label: "Fecha de inicio",
    }
];


class DashboardTableContainer extends Component {
    constructor(props) {
        super(props);
        this.onCellClick = this.onCellClick.bind(this);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getFollows());
    }

    onCellClick(rowIndex, colIndex, row, col) {
        const { dispatch } = this.props;
        dispatch(push(`/follows/${row.id}`));
    }

    render() {
        return (
            <DashboardTable
                tableCols={ TABLE_COLS }
                tableRows={ this.props.tableRows }
                onCellClick={ this.onCellClick }
            />
        )
    }
}

const processFollowsObject = (follows) => {
    let experiences = [];
    let user_experiences;
    for(const user of follows.users) {
        user_experiences = user.follows.map((follow) => {
            return {
                id: follow.id,
                name: `${user.name} ${user.last_name}`,
                place: follow.step3.planning && follow.step3.planning.place,
                methodology: follow.name,
                start_date: follow.step3.planning && follow.step3.planning.start_date,
                current_step: follow.step,
            }
        })
        experiences = concat(experiences, user_experiences);
    }
    console.log(experiences);
    return experiences;
}

const mapStateToProps = (state) => {
    return {
        tableRows: processFollowsObject(state.follows),
    }
}

export default connect(mapStateToProps)(DashboardTableContainer);