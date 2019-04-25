import React, { Component, Fragment } from 'react'
// import ReactDatatable from '@ashvin27/react-datatable';
import {createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import MUIDataTable from "mui-datatables";

const columns = ["No", "Name", "Company", "City", "State", {
  name: "",
  options: {
    customBodyRender: () => {
      return (
        <div>
          <button className="btn btn-green btn-small margin-right-5px">
            <i className="fa fa-lw fa-pencil-alt"></i>
          </button>
          <button className="btn btn-red btn-small">
            <i className="fa fa-lw fa-trash-alt"></i>
          </button>
        </div>
      )
    }
  }
}]
 
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
  selectableRows: false,
  responsive: 'scroll',
  rowsPerPage: 5,
  rowsPerPageOptions: [5, 10, 50],
  print: false,
  download: false,
  elevation: 5,
  customBodyRender: (value, tableMeta, updateValue) => {
    return (
      <React.Fragment>
        <Tooltip title={"custom icon"}>
          <IconButton className onClick>
            <AddIcon className />
          </IconButton>
        </Tooltip>
      </React.Fragment>
    );
  }
}

// const styles = {
//   overrides: {
//     MUIDataTable: {
//       root: {
//         backgroundColor: "#000",
//       },
//       paper: {
//         boxShadow: "none",
//       }
//     },
//     MUIDataTableBodyCell: {
//       root: {
//         backgroundColor: "#FFF"
//       }
//     }
//   }
// }

class Pages extends Component {

  getMuiTheme = () => createMuiTheme({
    overrides: {
      MUIDataTable: {
        root: {
          backgroundColor: "#394263",
        },
        paper: {
          boxShadow: "0 0 30px 0 rgba(154,161,171,.15)",
          borderRadius: "10px",
          overflow: "hidden",
        },
      },
      MUIDataTableToolbar: {
        root: {
          backgroundColor: "#394263",
        },
        titleText: {
          color: "#fff"
        },
        icon: {
          color: "#fff"
        }
      },
      MUIDataTableSearch: {
        searchIcon: {
          color: "#fff"
        },
        searchText: {
          color: "#fff",
          MuiInputBase : {
            formControl: {
              color: "#fff"
            },
            input: {
              color: "#fff"
            }
          }
        },
        clearIcon: {
          color: "#fff"
        }
      },
      MUIDataTableHead: {
        main: {
          backgroundColor: "#394263",
          color: "#fff"
        }
      },
      MUIDataTableHeadRow: {
        root: {
          backgroundColor: "#394263",
        }
      },
      MUIDataTableHeadCell: {
        root: {
          fontSize: "11pt",
          fontWeight: "900",
          color: "#394263",
        },
        fixedHeader: {
          backgroundColor: "#f5f5f5",
          color: "#555"
        },
        sortActive: {
          color: "#fff"
        },
        sortAction: {
          color: "#fff",
          MuiButtonBase: {
            color: "#fff",
            root: {
              color: "#fff",
            }
          }
        }
      },
      MUIDataTableBodyCell: {
        root: {
          fontSize: "11pt",
        }
      },
    }
  });

  render() {
    return (
      <div className="main-content">

        <div className="padding-15px">
          <div className="txt-site txt-18 txt-bold txt-main">
            Data Pages
          </div>
        </div>
        
        <div className="padding-15px">
          <MuiThemeProvider theme={this.getMuiTheme()}>
            <MUIDataTable
              title={"Employee List"}
              data={data}
              columns={columns}
              options={options}
            />
          </MuiThemeProvider>
        </div>

      </div>
    )
  }


}

export default Pages