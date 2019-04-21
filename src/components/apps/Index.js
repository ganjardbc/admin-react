import React, { Component } from 'react'
import CardPercentage from '../cards/Percentage'
import CardStatistic from '../cards/Statistic'

class Apps extends Component {
  render() {
    return (
      <div className="main-content">
        <div className="padding-15px">
          <div className="grid grid-2x">
            <div className="col-1">
              <div className="txt-site txt-18 txt-bold txt-main post-center">
                Apps
              </div>
            </div>
            <div className="col-2 content-right">
              <button className="btn btn-blue">
                <i className="fa fa-lw fa-filter"></i>
                <span>FILTER</span>
              </button>
            </div>
          </div>
        </div>

        <div className="txt-site txt-12 txt-primary txt-bold margin-left-15px">
          Content Apps 1
        </div>

        <div className="display-flex-mobile">
          { this.cardStatistic(2) }
          { this.cardPercentage(2) }
        </div>

        <div className="txt-site txt-12 txt-primary txt-bold margin-left-15px margin-top-15px">
          Content Apps 2
        </div>

        <div className="display-flex">
          { this.cardPercentage(2) }
        </div>

      </div>
    )
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

export default Apps