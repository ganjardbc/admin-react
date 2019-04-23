import React, { Component, Fragment } from 'react'
import ReactDatatable from '@ashvin27/react-datatable';


class Pages extends Component {

  constructor(props) {
    super(props)
    this.columns = [
      {
        key: "name",
        text: "Name",
        className: "name",
        align: "left",
        sortable: true,
      },
      {
        key: "address",
        text: "Address",
        className: "address",
        align: "left",
        sortable: true
      },
      {
        key: "postcode",
        text: "Postcode",
        className: "postcode",
        sortable: true
      },
      {
        key: "rating",
        text: "Rating",
        className: "rating",
        align: "left",
        sortable: true
      },
      {
        key: "type_of_food",
        text: "Type of Food",
        className: "type_of_food",
        sortable: true,
        align: "left"
      },
      {
        key: "action",
        text: "Action",
        className: "action",
        width: 130,
        align: "center",
        sortable: false,
        cell: record => { 
          return (
            <Fragment>
              <button
                className="btn btn-green btn-circle" 
                onClick={() => this.editRecord(record)}
                style={{marginRight: '5px'}}>
                <i className="fa fa-edit"></i>
              </button>
              <button 
                className="btn btn-red btn-circle" 
                onClick={() => this.deleteRecord(record)}>
                <i className="fa fa-trash"></i>
              </button>
            </Fragment>
          );
        }
    }
    ]
    this.config = {
      page_size: 5,
      length_menu: [ 5, 10, 15, 20],
      sort: {column: 'name', order: 'asc'},
      show_filter: true,
      show_length_menu: true,
    }
    this.state = {
      records: [
        {
          "id": "55f14312c7447c3da7051b26",
          "address": "228 City Road",
          "name": ".CN Chinese",
          "postcode": "3JH",
          "rating": 5,
          "type_of_food": "Chinese"
        },
        {
          "id": "55f14312c7447c3da7051b27",
          "address": "376 Rayleigh Road",
          "name": "@ Thai",
          "postcode": "5PT",
          "rating": 5.5,
          "type_of_food": "Thai"
        },
        {
          "id": "55f14312c7447c3da7051b44",
          "address": "23 Road",
          "name": "Xava Restaurant",
          "postcode": "8HX",
          "rating": 4.8,
          "type_of_food": "Kava"
        },
        {
          "id": "55f14312c7447c3da7051b29",
          "address": "30 Greyhound Road Hammersmith",
          "name": "@ Thai Restaurant",
          "postcode": "8NX",
          "rating": 4.5,
          "type_of_food": "Thai"
        },
        {
          "id": "55f14312c7447c3da7051b30",
          "address": "30 Hammersmith",
          "name": "Garok",
          "postcode": "8FX",
          "rating": 4.0,
          "type_of_food": "Sundaness"
        },
        {
          "id": "55f14312c7447c3da7051b88",
          "address": "22 Garo Hammersmith",
          "name": "Yogya",
          "postcode": "8FH",
          "rating": 4.4,
          "type_of_food": "Yogyakarta"
        },
        {
          "id": "55f14312c7447c3da7051b11",
          "address": "22 Smith Hammer",
          "name": "Bali",
          "postcode": "3FH",
          "rating": 4.6,
          "type_of_food": "Japan"
        }
      ]
    }
  }

  editRecord(record) {
    console.log("Edit Record", record);
  }

  deleteRecord(record) {
    console.log("Delete Record", record);
  }

  render() {
    return (
      <div className="main-content">

        <div className="padding-15px">
          <div className="txt-site txt-18 txt-bold txt-main">
            Data pages
          </div>
        </div>
        
        <ReactDatatable
          config={this.config}
          records={this.state.records}
          columns={this.columns}
        ></ReactDatatable>

      </div>
    )
  }


}

export default Pages