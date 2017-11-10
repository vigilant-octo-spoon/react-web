import React, { Component } from "react";

import DataTables from 'material-ui-datatables';

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