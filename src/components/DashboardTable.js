import React, { Component } from "react";

import Divider from 'material-ui/Divider';
import DataTables from 'material-ui-datatables';

const TABLE_DATA = [
    {
        name: "Carlos Álvarez",
        place: "Harvard",
        methodology: "Metodología basada en proyectos",
        start_date: "2017-11-10",
    },
    {
        name: "Andrea Vásquez",
        place: "PUC Chile",
        methodology: "eXtreme Programming",
        start_date: "2017-11-12",
    },
    {
        name: "JC De La Llera",
        place: "University of California, San Diego",
        methodology: "Aprendizaje basado en sismología",
        start_date: "2017-11-14",
    },
]

class DashboardTable extends Component {
    render() {
        return (
            <div id="dashboard-table">
                <DataTables
                    columns={ this.props.tableCols }
                    data={ this.props.tableRows }
                    showRowHover={ true }
                    onCellClick={ this.props.onCellClick }
                    tableRowStyle={{ cursor: "pointer" }}
                    showHeaderToolbar={ true }
                    title="Experiencias"
                    rowSizeLabel="Filas por página:"
                />
            </div>
        )
    }
}

export default DashboardTable;