import React, { Component } from 'react'
import CardPercentage from '../cards/Percentage'
import CardStatistic from '../cards/Statistic'

class Home extends Component {
  render() {
    return (
      <div className="main-content">
        <div className="padding-15px grid grid-2x grid-mobile-none">
          
          <div className="column-1">
            <div className="txt-site txt-18 txt-main-color txt-bold margin-top-5px margin-bottom-5px">
                Dashboard
            </div>
          </div>

          <div className="column-2 content-right display-flex">
            <form action="#" style={ {width: '100%'} }>
                <div className="input-group">
                    <input 
                      type="date" 
                      className="txt txt-main-color txt-trans-color" 
                      placeholder="Date"
                      required></input>
                    <button 
                      className="btn btn-no-radius btn-blue icn"
                      type="submit">
                      <i className="far fa-lg fa-calendar"></i>
                    </button>
                </div>
            </form>

            <div className="margin-left-5px margin-right-5px">
                <button className="btn btn-blue btn-qube icn">
                  <i className="fa fa-lg fa-print"></i>
                </button>
            </div>

            <div>
                <button className="btn btn-blue btn-qube icn" >
                  <i className="fa fa-lg fa-ellipsis-h"></i>
                </button>
            </div>
          </div>

        </div>

        <div className="display-flex-mobile">

          { this.cardStatistic(2) }
          { this.cardPercentage(2) }

        </div>

        <div className="display-flex-mobile" style={{width: '100%'}}>

          <table>
              <thead className="background-blue">
                  <th>No</th>
                  <th>Content 1</th>
                  <th>Content 2</th>
                  <th>Content 3</th>
              </thead>
              <tbody>
                { this.createTableContents() }
              </tbody>
          </table>

          <div className="card">
            <div className="padding-15px background-blue">
              Diagram
            </div>
            <div className="card-mid">
              <div className="padding-10px txt-site txt-primary txt-14">
                Diagram will show in here
              </div>
            </div>
          </div>

        </div>

      </div>
    )
  }

  createTableContents = () => {
    let dt = []

    for (let i = 0; i < 5; i++) {
      dt.push(
        <tr>
          <td>
              <strong>{ i + 1 }</strong>
          </td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
      )
    }

    return dt
  }

  cardPercentage = (val) => {
    let dt = []

    for (let index = 0; index < val; index++) {
      dt.push(
        <CardPercentage></CardPercentage>
      )
    }

    return dt
  }

  cardStatistic = (val) => {
    let dt = []

    for (let index = 0; index < val; index++) {
      dt.push(
        <CardStatistic></CardStatistic>
      )
    }

    return dt
  }

}

export default Home