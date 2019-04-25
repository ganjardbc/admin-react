import React, { Component } from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import MUIDataTable from "mui-datatables";
import CustomToolbarSelect from "../main/customToolbarSelect";

class Pages extends Component {

  constructor () {
    super()
    this.state = {
      createClass: 'app-popup',
      editClass: 'app-popup',
    }
  }

  openCreateForm = () => {
    if (this.state.createClass === 'app-popup app-popup-show') {
      this.setState({createClass: 'app-popup'})
    } else {
      this.setState({createClass: 'app-popup app-popup-show'})
    }
  }

  openEditForm = () => {
    if (this.state.editClass === 'app-popup app-popup-show') {
      this.setState({editClass: 'app-popup'})
    } else {
      this.setState({editClass: 'app-popup app-popup-show'})
    }
  }

  openDelete = () => {
    alert('still builded')
  }

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
      MUIDataTableSelectCell: {
        headerCell: {
          backgroundColor: "#f5f5f5",
          checkboxRoot: {
            color: "#fff",
          }
        },
        checkboxRoot: {
          color: "#555"
        }
      },
    }
  });

  columns = ["Name", "Title", "Location", "Age", "Salary", {
    name: "",
    options: {
      customBodyRender: () => {
        return (
          <div>
            <button 
              className="btn btn-green btn-small margin-right-5px"
              onClick={ this.openEditForm }>
              <i className="fa fa-lw fa-pencil-alt"></i>
            </button>
            <button 
              className="btn btn-red btn-small"
              onClick={ this.openDelete }>
              <i className="fa fa-lw fa-trash-alt"></i>
            </button>
          </div>
        )
      }
    }
  }
]
 
data = [
  ["Gabby George", "Business Analyst", "Minneapolis", 30, 100000],
  ["Aiden Lloyd", "Business Consultant", "Dallas",  55, 200000],
  ["Jaden Collins", "Attorney", "Santa Ana", 27, 500000],
  ["Franky Rees", "Business Analyst", "St. Petersburg", 22, 50000],
  ["Aaren Rose", "Business Consultant", "Toledo", 28, 75000],
  ["Blake Duncan", "Business Management Analyst", "San Diego", 65, 94000],
  ["Frankie Parry", "Agency Legal Counsel", "Jacksonville", 71, 210000],
  ["Lane Wilson", "Commercial Specialist", "Omaha", 19, 65000],
  ["Robin Duncan", "Business Analyst", "Los Angeles", 20, 77000],
  ["Mel Brooks", "Business Consultant", "Oklahoma City", 37, 135000],
  ["Harper White", "Attorney", "Pittsburgh", 52, 420000],
  ["Kris Humphrey", "Agency Legal Counsel", "Laredo", 30, 150000],
  ["Frankie Long", "Industrial Analyst", "Austin", 31, 170000],
  ["Brynn Robbins", "Business Analyst", "Norfolk", 22, 90000],
  ["Justice Mann", "Business Consultant", "Chicago", 24, 133000],
  ["Addison Navarro", "Business Management Analyst", "New York", 50, 295000],
  ["Jesse Welch", "Agency Legal Counsel", "Seattle", 28, 200000],
  ["Eli Mejia", "Commercial Specialist", "Long Beach", 65, 400000],
  ["Gene Leblanc", "Industrial Analyst", "Hartford", 34, 110000],
  ["Danny Leon", "Computer Scientist", "Newark", 60, 220000],
  ["Lane Lee", "Corporate Counselor", "Cincinnati", 52, 180000],
  ["Jesse Hall", "Business Analyst", "Baltimore", 44, 99000],
  ["Danni Hudson", "Agency Legal Counsel", "Tampa", 37, 90000],
  ["Terry Macdonald", "Commercial Specialist", "Miami", 39, 140000],
  ["Justice Mccarthy", "Attorney", "Tucson", 26, 330000],
  ["Silver Carey", "Computer Scientist", "Memphis", 47, 250000],
  ["Franky Miles", "Industrial Analyst", "Buffalo", 49, 190000],
  ["Glen Nixon", "Corporate Counselor", "Arlington", 44, 80000],
  ["Gabby Strickland", "Business Process Consultant", "Scottsdale", 26, 45000],
  ["Mason Ray", "Computer Scientist", "San Francisco", 39, 142000]
]

options = {
  selectableRows: false,
  filterType: 'dropdown',
  responsive: 'scroll',
  rowsPerPage: 5,
  rowsPerPageOptions: [5, 10, 50],
  print: false,
  download: false,
  elevation: 5,
  customToolbarSelect: (selectedRows) => <CustomToolbarSelect selectedRows={selectedRows} />
}

  render() {
    return (
      <div className="main-content">

        <div className="padding-15px grid grid-2x">
          <div className="col-1">
            <div className="txt-site txt-18 txt-bold txt-main padding-top-5px">
              Content Pages
            </div>
          </div>
          <div className="col-2 content-right">
            <button className="btn btn-blue" onClick={ this.openCreateForm }>
              Add Data
            </button>
          </div>
        </div>
        
        <div className="padding-15px">
          <MuiThemeProvider theme={this.getMuiTheme()}>
            <MUIDataTable
              title={"Employee List"}
              data={this.data}
              columns={this.columns}
              options={this.options}
            />
          </MuiThemeProvider>
        </div>

        
        <div className={this.state.createClass}>

            <div className="padding-top-20px"></div>

            <div className="popup-content background-white border-radius">

                <div className="padding-15px background-blue grid grid-2x">
                    <div className="col-1">
                        <div className="txt-site txt-12 txt-bold post-center">
                            Entry Data
                        </div>
                    </div>
                    <div className="col-2 content-right">
                        <button className="btn btn-circle background-blue" onClick={ this.openCreateForm }>
                            <i className="fa fa-lg fa-times"></i>
                        </button>
                    </div>
                </div>


                <form action="#">
                    <div className="border-bottom padding-15px">

                        <div className="margin-bottom-15px">
                            <div className="margin-5px">
                                <div className="txt-site txt-11 txt-primary">
                                    <span className="txt-site txt-11 txt-primary">
                                        Content 1
                                    </span>
                                </div>
                            </div>
                            <input 
                                type="text" 
                                className="txt txt-primary-color"
                                placeholder="Content 1"></input>
                        </div>

                        <div className="margin-15px">
                            <div className="margin-5px">
                                <div className="txt-site txt-11 txt-primary">
                                    Content 2
                                </div>
                            </div>
                            <select name="content2" className="slc slc-primary">
                                <option value="opt1">Opt1</option>
                                <option value="opt1">Opt1</option>
                                <option value="opt1">Opt1</option>
                            </select>
                        </div>

                        <div className="margin-top-15px">
                            <div className="margin-5px">
                                <div className="txt-site txt-11 txt-primary">
                                    Content 5
                                </div>
                            </div>
                            <textarea 
                                name="ctn5" 
                                className="txt txt-primary-color"
                                cols="30" 
                                rows="5"
                                placeholder="about"></textarea>
                        </div>


                    </div>

                    <div className="padding-15px">

                        <div className="grid grid-2x">
                            <div className="col-1">
                                <button 
                                  className="btn btn-primary" 
                                  type="button" 
                                  onClick={ this.openCreateForm }>
                                    <span>Cancel</span>
                                </button>
                            </div>
                            <div className="col-2 content-right">
                                <button className="btn btn-blue" type="submit">
                                    <span>Save</span>
                                </button>
                            </div>
                        </div>

                    </div>


                 </form>

             </div>

        </div>


        <div className={this.state.editClass}>

            <div className="padding-top-20px"></div>

            <div className="popup-content background-white border-radius">

                <div className="padding-15px background-blue grid grid-2x">
                    <div className="col-1">
                        <div className="txt-site txt-12 txt-bold post-center">
                            Edit Data
                        </div>
                    </div>
                    <div className="col-2 content-right">
                        <button 
                          className="btn btn-circle background-blue" 
                          onClick={ this.openEditForm }>
                            <i className="fa fa-lg fa-times"></i>
                        </button>
                    </div>
                </div>


                <form action="#">
                    <div className="border-bottom padding-15px">

                        <div className="margin-bottom-15px">
                            <div className="margin-5px">
                                <div className="txt-site txt-11 txt-primary">
                                    <span className="txt-site txt-11 txt-primary">
                                        Content 1
                                    </span>
                                </div>
                            </div>
                            <input 
                                type="text" 
                                className="txt txt-primary-color"
                                placeholder="Content 1"></input>
                        </div>

                        <div className="margin-15px">
                            <div className="margin-5px">
                                <div className="txt-site txt-11 txt-primary">
                                    Content 2
                                </div>
                            </div>
                            <select name="content2" className="slc slc-primary">
                                <option value="opt1">Opt1</option>
                                <option value="opt1">Opt1</option>
                                <option value="opt1">Opt1</option>
                            </select>
                        </div>

                        <div className="margin-top-15px">
                            <div className="margin-5px">
                                <div className="txt-site txt-11 txt-primary">
                                    Content 5
                                </div>
                            </div>
                            <textarea 
                                name="ctn5" 
                                className="txt txt-primary-color"
                                cols="30" 
                                rows="5"
                                placeholder="about"></textarea>
                        </div>


                    </div>

                    <div className="padding-15px">

                        <div className="grid grid-2x">
                            <div className="col-1">
                                <button 
                                  className="btn btn-primary" 
                                  type="button"
                                  onClick={ this.openEditForm }>
                                    <span>Cancel</span>
                                </button>
                            </div>
                            <div className="col-2 content-right">
                                <button className="btn btn-blue" type="submit">
                                    <span>Save</span>
                                </button>
                            </div>
                        </div>

                    </div>
                    

                 </form>

             </div>

        </div>

        

      </div>
    )
  }


}

export default Pages