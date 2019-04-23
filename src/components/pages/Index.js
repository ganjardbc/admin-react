import React, { Component, Fragment } from 'react'
// import ReactDatatable from '@ashvin27/react-datatable';
import MUIDataTable from "mui-datatables";

const columns = ["No", "Name", "Company", "City", "State"]
 
const data = [
 ["1", "Joe James", "Test Corp", "Yonkers", "NY"],
 ["2", "John Walsh", "Test Corp", "Hartford", "CT"],
 ["3", "Bob Herm", "Test Corp", "Tampa", "FL"],
 ["4", "James Houston", "Test Corp", "Dallas", "TX"],
 ["5", "James", "Test Corp", "Dallas", "TX"],
 ["6", "Collany", "Jorn Corp", "Tampa", "FL"],
 ["7", "Joe Herm", "Fisma Corp", "Hartford", "CN"],
 ["8", "Joe Houston", "Fisma Corp", "Dallas", "CN"],
]

const options = {
  filterType: 'dropdown',
  selectableRows: true,
  responsive: 'scroll',
  rowsPerPage: 5,
  rowsPerPageOptions: [5, 10, 50],
  print: false,
  download: false
}

class Pages extends Component {

  render() {
    return (
      <div className="main-content">

        <div className="padding-15px">
          <div className="txt-site txt-18 txt-bold txt-main">
            Data Pages
          </div>
        </div>
        
        <div className="padding-15px">
          <MUIDataTable
            title={"Employee List"}
            data={data}
            columns={columns}
            options={options}
          />
        </div>

      </div>
    )
  }


}

export default Pages